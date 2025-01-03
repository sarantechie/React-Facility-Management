import './App.css';
import FacilityManagement from './components/FacilityManagement';
import { ThemeButton } from './components/ThemeButton';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme()
  return (
    <div style={{
      backgroundColor: theme === "light" ? "pink" : "red",
      color: theme === "light" ? "#000" : "fff"
    }}>
      <ThemeButton />
      <FacilityManagement />
    </div>

  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  )
}

export default App;
