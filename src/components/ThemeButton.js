import { useTheme } from "../context/ThemeContext"

export const ThemeButton = () =>{
    const {theme,toggleTheme}=useTheme()
    return(
        <button onClick={toggleTheme}
        style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: theme === "light" ? "#007bff" : "#333",
            color: theme === "light" ? "#fff" : "#eee",
            borderRadius: "4px",
          }}
        >
            Change theme to {theme==="light"?"Dark":"Light"}
        </button>
    )
}