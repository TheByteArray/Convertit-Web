import { Button, Card, CardContent, Typography, Container, Box, Stack, ThemeProvider, createTheme, Paper, IconButton, Tooltip, Grid, Divider, Fade, Zoom } from '@mui/material';
import { 
  Android as AndroidIcon, 
  Download as DownloadIcon, 
  GitHub as GitHubIcon, 
  Code as CodeIcon, 
  FormatListBulleted as ListIcon, 
  Speed as SpeedIcon, 
  MusicNote as MusicIcon, 
  VideoLibrary as VideoIcon, 
  Twitter as TwitterIcon, 
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  BugReport as BugIcon,
  Star as StarIcon,
  Security as SecurityIcon,
  Description as DescriptionIcon,
  Help as HelpIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { useState, useMemo } from 'react';
import '@material/web/switch/switch.js';
import ThemeSwitch from './components/ThemeSwitch';
import GitHubStats from './components/GitHubStats';
import './App.css';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#66BB6A',
    },
    background: {
      default: mode === 'light' ? '#F8F9FA' : '#121212',
      paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
    },
    text: {
      primary: mode === 'light' ? '#1A1A1A' : '#FFFFFF',
      secondary: mode === 'light' ? '#4A4A4A' : '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
          borderRadius: 16,
          height: '100%',
          boxShadow: mode === 'light' 
            ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
            : '0 4px 20px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'light'
              ? '0 8px 30px rgba(0, 0, 0, 0.12)'
              : '0 8px 30px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: mode === 'light'
            ? '0 4px 14px rgba(76, 175, 80, 0.2)'
            : '0 4px 14px rgba(76, 175, 80, 0.3)',
          '&:hover': {
            boxShadow: mode === 'light'
              ? '0 6px 20px rgba(76, 175, 80, 0.3)'
              : '0 6px 20px rgba(76, 175, 80, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: '16px', sm: '24px', md: '32px' },
          paddingRight: { xs: '16px', sm: '24px', md: '32px' },
          maxWidth: { xs: '100%', sm: '640px', md: '960px', lg: '1280px' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('dark');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const handleThemeChange = (e) => {
    setMode(e.target.selected ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`app ${mode}`} style={{ width: '100%', overflowX: 'hidden' }}>
        <Paper elevation={0} className="header" sx={{ width: '100%', overflow: 'hidden' }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, width: '100%' }}>
            <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
              <GitHubStats />
              <ThemeSwitch mode={mode} onChange={handleThemeChange} />
            </Box>
            <Box className="hero-content" sx={{ 
              minHeight: { xs: 'calc(100vh - 48px)', sm: 'calc(100vh - 64px)' },
              display: 'flex',
              alignItems: 'center',
              pt: { xs: 4, sm: 6, md: 8 },
              pb: { xs: 4, sm: 6, md: 8 },
              width: '100%',
              px: { xs: 0, sm: 0.5 }
            }}>
              <Box className="hero-text" sx={{ 
                maxWidth: { xs: '100%', sm: '600px', md: '800px' },
                mx: { xs: 'auto', sm: 0 },
                textAlign: { xs: 'center', sm: 'left' },
                width: '100%',
                ml: { xs: 0, sm: 2 }
              }}>
                <Fade in timeout={1000}>
                  <Typography variant="h1" component="h1" className="gradient-text" sx={{ 
                    mb: 2,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    lineHeight: { xs: 1.2, sm: 1.3 },
                    letterSpacing: '-0.02em'
                  }}>
                    Convertit: Audio & Video Tools
                  </Typography>
                </Fade>
                <Fade in timeout={1200}>
                  <Typography variant="h5" color="text.secondary" sx={{ 
                    mb: 4, 
                    maxWidth: '600px',
                    fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                    lineHeight: 1.5
                  }}>
ConvertIt is an ad-free Android app for converting audio and video files to various formats like FLAC, ALAC, MP3, WAV, AAC, OGG, M4A, AIFF, OPUS, WMA, MKA, and SPX. Built with Kotlin, Compose, and FFmpeg, it offers flexible bitrate options for high-quality conversions. Video-to-audio conversion is also supported.
If you don't see this, let me know and I'll ensure the update is applied directly!                  </Typography>
                </Fade>
                <Fade in timeout={1400}>
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    sx={{ 
                      mb: 4,
                      justifyContent: { xs: 'center', sm: 'flex-start' }
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="https://play.google.com/store/apps/details?id=com.nasahacker.convertit"
                      startIcon={<AndroidIcon />}
                      sx={{ 
                        px: { xs: 3, sm: 4 }, 
                        py: { xs: 1.25, sm: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                      className="cta-button"
                    >
                      Get it on Google Play
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      href="https://github.com/CodeWithTamim/Convertit/releases/latest/download/app-release.apk"
                      startIcon={<DownloadIcon />}
                      sx={{ 
                        px: { xs: 3, sm: 4 }, 
                        py: { xs: 1.25, sm: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                      className="cta-button"
                      download="ConvertIt.apk"
                    >
                      Download APK
                    </Button>
                  </Stack>
                </Fade>
                <Fade in timeout={1600}>
                  <Box className="hero-stats" sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 3, md: 4 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    mt: { xs: 3, sm: 4 }
                  }}>
                    <Box className="stat-item">
                      <Typography variant="h4" className="gradient-text" sx={{ fontSize: { xs: '1.75rem', sm: '2rem' } }}>10+</Typography>
                      <Typography color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Audio Formats</Typography>
                    </Box>
                    <Box className="stat-item">
                      <Typography variant="h4" className="gradient-text" sx={{ fontSize: { xs: '1.75rem', sm: '2rem' } }}>100%</Typography>
                      <Typography color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Ad Free</Typography>
                    </Box>
                    <Box className="stat-item">
                      <Typography variant="h4" className="gradient-text" sx={{ fontSize: { xs: '1.75rem', sm: '2rem' } }}>∞</Typography>
                      <Typography color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Unlimited Conversions</Typography>
                    </Box>
                  </Box>
                </Fade>
              </Box>
            </Box>
          </Container>
        </Paper>

        <main className="main-content" style={{ width: '100%', overflowX: 'hidden' }}>
          <Container maxWidth="md" sx={{ px: { xs: 1.5, sm: 2, md: 3 }, width: '100%' }}>
            <Box className="features" sx={{ 
              py: { xs: 3, sm: 4, md: 5 },
              width: '100%'
            }}>
              <Fade in timeout={1000}>
                <Typography 
                  variant="h2" 
                  component="h2" 
                  align="center" 
                  className="gradient-text" 
                  sx={{ 
                    mb: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
                    fontWeight: 700,
                    letterSpacing: '-0.02em'
                  }}
                >
                  Key Features
                </Typography>
              </Fade>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={6}>
                  <Zoom in timeout={1200}>
                    <Card className="feature-card" sx={{ 
                      height: '100%',
                      minHeight: 120,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: theme => theme.palette.mode === 'dark' 
                          ? '0 8px 20px rgba(0, 0, 0, 0.2)'
                          : '0 8px 20px rgba(0, 0, 0, 0.10)',
                      }
                    }}>
                      <CardContent sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 1, sm: 1.5 }
                      }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ 
                            p: { xs: 0.5, sm: 1 }, 
                            borderRadius: 2,
                            bgcolor: theme => theme.palette.mode === 'dark' 
                              ? 'rgba(76, 175, 80, 0.1)' 
                              : 'rgba(76, 175, 80, 0.08)'
                          }}>
                            <MusicIcon color="primary" sx={{ fontSize: { xs: 18, sm: 22 } }} />
                          </Box>
                          <Typography variant="h6" component="h3" sx={{ 
                            fontSize: { xs: '0.85rem', sm: '1rem' },
                            fontWeight: 600
                          }}>
                            Multiple Format Support
                          </Typography>
                        </Stack>
                        <Typography color="text.secondary" sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.85rem' },
                          lineHeight: 1.5,
                          flex: 1
                        }}>
                          Convert between FLAC, ALAC, MP3, WAV, AAC, OGG, M4A, and more. Support for all major audio formats ensures maximum compatibility.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Zoom in timeout={1400}>
                    <Card className="feature-card" sx={{ 
                      height: '100%',
                      minHeight: 120,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: theme => theme.palette.mode === 'dark' 
                          ? '0 8px 20px rgba(0, 0, 0, 0.2)'
                          : '0 8px 20px rgba(0, 0, 0, 0.10)',
                      }
                    }}>
                      <CardContent sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 1, sm: 1.5 }
                      }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ 
                            p: { xs: 0.5, sm: 1 }, 
                            borderRadius: 2,
                            bgcolor: theme => theme.palette.mode === 'dark' 
                              ? 'rgba(76, 175, 80, 0.1)' 
                              : 'rgba(76, 175, 80, 0.08)'
                          }}>
                            <SpeedIcon color="primary" sx={{ fontSize: { xs: 18, sm: 22 } }} />
                          </Box>
                          <Typography variant="h6" component="h3" sx={{ 
                            fontSize: { xs: '0.85rem', sm: '1rem' },
                            fontWeight: 600
                          }}>
                            Customizable Quality
                          </Typography>
                        </Stack>
                        <Typography color="text.secondary" sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.85rem' },
                          lineHeight: 1.5,
                          flex: 1
                        }}>
                          Choose from various bitrates (64k to 1024k) for optimal output quality. Perfect balance between file size and audio quality.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Zoom in timeout={1600}>
                    <Card className="feature-card" sx={{ 
                      height: '100%',
                      minHeight: 120,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: theme => theme.palette.mode === 'dark' 
                          ? '0 8px 20px rgba(0, 0, 0, 0.2)'
                          : '0 8px 20px rgba(0, 0, 0, 0.10)',
                      }
                    }}>
                      <CardContent sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 1, sm: 1.5 }
                      }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ 
                            p: { xs: 0.5, sm: 1 }, 
                            borderRadius: 2,
                            bgcolor: theme => theme.palette.mode === 'dark' 
                              ? 'rgba(76, 175, 80, 0.1)' 
                              : 'rgba(76, 175, 80, 0.08)'
                          }}>
                            <VideoIcon color="primary" sx={{ fontSize: { xs: 18, sm: 22 } }} />
                          </Box>
                          <Typography variant="h6" component="h3" sx={{ 
                            fontSize: { xs: '0.85rem', sm: '1rem' },
                            fontWeight: 600
                          }}>
                            Video to Audio
                          </Typography>
                        </Stack>
                        <Typography color="text.secondary" sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.85rem' },
                          lineHeight: 1.5,
                          flex: 1
                        }}>
                          Extract audio from video files with ease. Support for all major video formats including MP4, AVI, MKV, and more.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Zoom in timeout={1800}>
                    <Card className="feature-card" sx={{ 
                      height: '100%',
                      minHeight: 120,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: theme => theme.palette.mode === 'dark' 
                          ? '0 8px 20px rgba(0, 0, 0, 0.2)'
                          : '0 8px 20px rgba(0, 0, 0, 0.10)',
                      }
                    }}>
                      <CardContent sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 1, sm: 1.5 }
                      }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ 
                            p: { xs: 0.5, sm: 1 }, 
                            borderRadius: 2,
                            bgcolor: theme => theme.palette.mode === 'dark' 
                              ? 'rgba(76, 175, 80, 0.1)' 
                              : 'rgba(76, 175, 80, 0.08)'
                          }}>
                            <ListIcon color="primary" sx={{ fontSize: { xs: 18, sm: 22 } }} />
                          </Box>
                          <Typography variant="h6" component="h3" sx={{ 
                            fontSize: { xs: '0.85rem', sm: '1rem' },
                            fontWeight: 600
                          }}>
                            Ad-Free Experience
                          </Typography>
                        </Stack>
                        <Typography color="text.secondary" sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.85rem' },
                          lineHeight: 1.5,
                          flex: 1
                        }}>
                          Enjoy a clean, uninterrupted conversion process. No ads, no pop-ups, just pure functionality and performance.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </main>

        <Paper elevation={0} className="footer" sx={{ 
          background: mode === 'dark' 
            ? 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.95) 100%)' 
            : 'linear-gradient(180deg, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 0.95) 100%)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid',
          borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
          pt: { xs: 4, sm: 5, md: 6 },
          pb: { xs: 3, sm: 4, md: 5 },
          width: '100%',
          overflow: 'hidden'
        }}>
          <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 2, md: 3 }, width: '100%' }}>
            <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box className="footer-brand" sx={{ 
                  width: '100%', 
                  textAlign: { xs: 'center', md: 'left' },
                  mb: { xs: 3, md: 0 }
                }}>
                  <Typography variant="h6" className="gradient-text" gutterBottom sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    mb: 1
                  }}>
                    ConvertIt
                  </Typography>
                  <Typography color="text.secondary" sx={{ 
                    mb: 2, 
                    fontSize: '0.85rem', 
                    maxWidth: '500px',
                    lineHeight: 1.5,
                    mx: { xs: 'auto', md: 0 }
                  }}>
                    Transform your media files effortlessly with our powerful, ad-free converter. Support for multiple formats and high-quality output.
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <IconButton
                      href="https://github.com/CodeWithTamim/Convertit"
                      target="_blank"
                      sx={{
                        color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        '&:hover': {
                          color: mode === 'dark' ? '#fff' : '#000',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href="https://t.me/officialnasahacker"
                      target="_blank"
                      sx={{
                        color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        '&:hover': {
                          color: mode === 'dark' ? '#fff' : '#000',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        p: 0.7
                      }}
                      aria-label="Telegram"
                    >
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/social-icons-33/512/Telegram-512.png"
                        alt="Telegram"
                        style={{ width: 24, height: 24, display: 'block' }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://discord.com/invite/2WCsnpw4et"
                      target="_blank"
                      sx={{
                        color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        '&:hover': {
                          color: mode === 'dark' ? '#fff' : '#000',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        p: 0.7
                      }}
                      aria-label="Discord"
                    >
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"
                        alt="Discord"
                        style={{ width: 24, height: 24, display: 'block' }}
                      />
                    </IconButton>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="footer-links" sx={{ width: '100%' }}>
                  <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
                    <Grid item xs={6} sm={4}>
                      <Stack spacing={1.5} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                        <Typography variant="subtitle2" className="footer-heading" sx={{ 
                          color: mode === 'dark' ? 'primary.light' : 'primary.dark',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          mb: 1,
                          textAlign: { xs: 'center', sm: 'left' }
                        }}>
                          Resources
                        </Typography>
                        <Button 
                          color="inherit" 
                          href="https://github.com/CodeWithTamim/Convertit" 
                          target="_blank"
                          className="footer-link"
                          size="small"
                          startIcon={<GitHubIcon fontSize="small" />}
                          sx={{ 
                            justifyContent: 'flex-start',
                            fontSize: '0.85rem',
                            minWidth: { xs: '140px', sm: 'auto' },
                            '&:hover': {
                              color: mode === 'dark' ? '#fff' : '#000',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          GitHub
                        </Button>
                        <Button 
                          color="inherit" 
                          href="https://github.com/CodeWithTamim/Convertit/blob/master/README.md" 
                          target="_blank"
                          className="footer-link"
                          size="small"
                          startIcon={<DescriptionIcon fontSize="small" />}
                          sx={{ 
                            justifyContent: 'flex-start',
                            fontSize: '0.85rem',
                            minWidth: { xs: '140px', sm: 'auto' },
                            '&:hover': {
                              color: mode === 'dark' ? '#fff' : '#000',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Documentation
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Stack spacing={1.5} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                        <Typography variant="subtitle2" className="footer-heading" sx={{ 
                          color: mode === 'dark' ? 'primary.light' : 'primary.dark',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          mb: 1,
                          textAlign: { xs: 'center', sm: 'left' }
                        }}>
                          Support
                        </Typography>
                        <Button 
                          color="inherit" 
                          href="https://github.com/CodeWithTamim/Convertit/issues" 
                          target="_blank"
                          className="footer-link"
                          size="small"
                          startIcon={<BugIcon fontSize="small" />}
                          sx={{ 
                            justifyContent: 'flex-start',
                            fontSize: '0.85rem',
                            minWidth: { xs: '140px', sm: 'auto' },
                            '&:hover': {
                              color: mode === 'dark' ? '#fff' : '#000',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Report Issues
                        </Button>
                        <Button 
                          color="inherit" 
                          href="mailto:codewithtamim@gmail.com"
                          className="footer-link"
                          size="small"
                          startIcon={<EmailIcon fontSize="small" />}
                          sx={{ 
                            justifyContent: 'flex-start',
                            fontSize: '0.85rem',
                            minWidth: { xs: '140px', sm: 'auto' },
                            '&:hover': {
                              color: mode === 'dark' ? '#fff' : '#000',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Contact Us
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Stack spacing={1.5} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                        <Typography variant="subtitle2" className="footer-heading" sx={{ 
                          color: mode === 'dark' ? 'primary.light' : 'primary.dark',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          mb: 1,
                          textAlign: { xs: 'center', sm: 'left' }
                        }}>
                          Legal
                        </Typography>
                        <Button 
                          color="inherit" 
                          href="https://github.com/CodeWithTamim/Convertit/blob/master/PRIVACY.md" 
                          target="_blank"
                          className="footer-link"
                          size="small"
                          startIcon={<SecurityIcon fontSize="small" />}
                          sx={{ 
                            justifyContent: 'flex-start',
                            fontSize: '0.85rem',
                            minWidth: { xs: '140px', sm: 'auto' },
                            '&:hover': {
                              color: mode === 'dark' ? '#fff' : '#000',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Privacy
                        </Button>
                        <Button 
                          color="inherit" 
                          href="https://github.com/CodeWithTamim/Convertit/blob/master/LICENSE" 
                          target="_blank"
                          className="footer-link"
                          size="small"
                          startIcon={<DescriptionIcon fontSize="small" />}
                          sx={{ 
                            justifyContent: 'flex-start',
                            fontSize: '0.85rem',
                            minWidth: { xs: '140px', sm: 'auto' },
                            '&:hover': {
                              color: mode === 'dark' ? '#fff' : '#000',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          License
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2, opacity: mode === 'dark' ? 0.1 : 0.2 }} />
            <Box className="footer-bottom" sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              pt: 1,
              width: '100%'
            }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                © {new Date().getFullYear()} ConvertIt. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
