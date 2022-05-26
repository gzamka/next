import { useState, createContext, useContext } from "react"

const MenuToggleContext = createContext();

export const MenuTogglelayout = ({children}) => {

  const [menuToggle, setMenuToggle] = useState(false);
  
  const handleClickMenu = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <MenuToggleContext.Provider value={{handleClickMenu, menuToggle}}>
      {children}
    </MenuToggleContext.Provider>
  )
  
}
  export const useMenuToggle = () => useContext(MenuToggleContext);

  