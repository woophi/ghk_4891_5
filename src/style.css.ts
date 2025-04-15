import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '32px',
  width: '100%',
});

const hbBox = style({
  background: 'linear-gradient(178.81deg, #D1DBFE 55.16%, #AFB3F0 98.98%)',
  borderRadius: '24px',
  padding: '24px 12px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  marginBottom: '65px',
});

const hbBoxText = style({
  position: 'absolute',
  zIndex: -1,
  backgroundColor: '#F4F5F6',
  borderBottomRightRadius: '24px',
  borderBottomLeftRadius: '24px',
  padding: '80px 16px 8px',
  bottom: '-63px',
  left: '0',
  width: '100%',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 330px)': {
      bottom: '-88px',
    },
  },
});

const box = style({
  display: 'flex',
  padding: '20px 16px',
  flexDirection: 'column',
  gap: '12px',
  borderRadius: '1rem',
  backgroundColor: '#F2F3F5',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const img = style({ margin: '1rem auto 0', maxWidth: '219px', objectFit: 'contain' });

export const stepStyle = style({});

globalStyle(`${stepStyle} > div > div > div:first-child`, {
  backgroundColor: 'var(--color-light-neutral-translucent-1300)',
  color: 'var(--color-light-text-primary-inverted)',
});

export const btmContent = style({
  padding: 0,
});
const swSlide = style({
  width: '212px',
  height: '186px',
});
const swSlideCalc = style({
  width: 'min-content',
});

const slideContainer = style({
  marginTop: '32px',
  backgroundColor: '#E4F0FF',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '8px',
  minHeight: '154px',
});

const btmRowCalc = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'space-between',
});

const pds = style({
  backgroundColor: '#E4F0FF',
  borderRadius: '12px',
  padding: '1rem',
});

const blueBox = style({
  backgroundColor: '#E4F0FF',
  padding: '20px 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  borderRadius: '24px',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  img,
  stepStyle,
  btmContent,
  swSlide,
  btmRowCalc,
  hbBox,
  hbBoxText,
  slideContainer,
  pds,
  blueBox,
  swSlideCalc,
};
