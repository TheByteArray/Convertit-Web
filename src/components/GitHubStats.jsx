import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Link, Tooltip, Paper } from '@mui/material';
import { Star as StarIcon, Tag as TagIcon, GitHub as GitHubIcon } from '@mui/icons-material';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch repo stats
        const repoResponse = await fetch('https://api.github.com/repos/CodeWithTamim/Convertit');
        if (!repoResponse.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }
        const repoData = await repoResponse.json();

        // Fetch latest release
        const releaseResponse = await fetch('https://api.github.com/repos/CodeWithTamim/Convertit/releases/latest');
        const releaseData = await releaseResponse.json();
        const latestVersion = releaseData.tag_name || 'v1.0.0';

        setStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          version: latestVersion
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress size={16} />
      </Box>
    );
  }

  if (error) {
    return null;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        p: 1,
        borderRadius: 2,
        background: theme => theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(0, 0, 0, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: theme => theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: theme => theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(0, 0, 0, 0.04)',
          transform: 'translateY(-2px)',
          boxShadow: theme => theme.palette.mode === 'dark'
            ? '0 4px 20px rgba(0, 0, 0, 0.2)'
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <Tooltip title="GitHub Stars" arrow placement="top">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 0.5,
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}>
          <StarIcon sx={{ color: '#FFD700', fontSize: '1.2rem' }} />
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            {stats?.stars.toLocaleString()}
          </Typography>
        </Box>
      </Tooltip>

      <Tooltip title="GitHub Forks" arrow placement="top">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 0.5,
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}>
          <img 
            src="https://cdn4.iconfinder.com/data/icons/liny/24/git-fork-line-512.png" 
            alt="Forks"
            style={{ 
              width: '1.2rem',
              height: '1.2rem',
              filter: 'invert(0.4) sepia(1) saturate(2) hue-rotate(80deg)'
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            {stats?.forks.toLocaleString()}
          </Typography>
        </Box>
      </Tooltip>

      <Tooltip title="Latest Version" arrow placement="top">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 0.5,
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}>
          <TagIcon sx={{ color: '#2196F3', fontSize: '1.2rem' }} />
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            {stats?.version}
          </Typography>
        </Box>
      </Tooltip>

      <Tooltip title="View on GitHub" arrow placement="top">
        <Link 
          href="https://github.com/CodeWithTamim/Convertit" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            color: 'text.secondary',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'scale(1.1)'
            }
          }}
        >
          <GitHubIcon sx={{ fontSize: '1.2rem' }} />
        </Link>
      </Tooltip>
    </Paper>
  );
};

export default GitHubStats; 