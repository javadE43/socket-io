
import { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/theme';

const ThemeToggle = () => {
  const { theme,setTheme } = useContext(ThemeContext);

  return (
    <div className='p-2'>
      {theme === 'dark' ? (
        <div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiSun className='text-primary text-2xl mr-2' /> تم سفید
        </div>
      ) : (
        <div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiMoon className='text-primary text-2xl mr-2' /> تم سیاه
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;