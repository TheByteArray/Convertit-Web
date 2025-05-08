import { Box, useTheme, useMediaQuery } from '@mui/material';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { useState } from 'react';

export default function ThemeSwitch({ mode, onChange }) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: 0.5, sm: 1 },
        position: 'relative',
        padding: { xs: '2px', sm: '4px' },
        borderRadius: '20px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        }
      }}
    >
      <LightModeIcon 
        sx={{ 
          color: mode === 'light' ? 'primary.main' : 'text.secondary',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontSize: { xs: '1rem', sm: '1.2rem' },
          opacity: mode === 'light' ? 1 : 0.7,
          transform: mode === 'light' ? 'scale(1.1)' : 'scale(1)',
        }} 
      />
      <Box
        onClick={() => onChange({ target: { selected: mode === 'light' } })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          width: { xs: '40px', sm: '44px' },
          height: { xs: '22px', sm: '24px' },
          backgroundColor: mode === 'dark' ? 'rgba(76, 175, 80, 0.2)' : '#E0E0E0',
          borderRadius: '12px',
          padding: '2px',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(76, 175, 80, 0.3)' : '#D0D0D0',
            transform: 'scale(1.02)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          }
        }}
      >
        <Box
          sx={{
            width: { xs: '18px', sm: '20px' },
            height: { xs: '18px', sm: '20px' },
            backgroundColor: mode === 'dark' ? '#4CAF50' : '#FFFFFF',
            borderRadius: '50%',
            transform: `translateX(${mode === 'dark' ? (isMobile ? '18px' : '20px') : '0px'})`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isHovered 
              ? '0 2px 8px rgba(0, 0, 0, 0.2)'
              : '0 1px 4px rgba(0, 0, 0, 0.1)',
            '&:active': {
              transform: `translateX(${mode === 'dark' ? (isMobile ? '20px' : '22px') : '-2px'})`,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            }
          }}
        />
      </Box>
      <DarkModeIcon 
        sx={{ 
          color: mode === 'dark' ? 'primary.main' : 'text.secondary',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontSize: { xs: '1rem', sm: '1.2rem' },
          opacity: mode === 'dark' ? 1 : 0.7,
          transform: mode === 'dark' ? 'scale(1.1)' : 'scale(1)',
        }} 
      />
    </Box>
  );
} 