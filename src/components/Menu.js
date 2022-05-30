import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import { useMenuToggle } from '../Layout/menuTogglelayout';
import { useRouter } from 'next/router';


export const Menu = () => {
  const { push } = useRouter();
  const { menuToggle } = useMenuToggle();

  return (
    <Paper sx={{ width: menuToggle ? 250 : 50, maxWidth: '100%', overflow: 'hidden' }}>
      
      <MenuList>
        {listItem.map(({ href, title, icon, typo }, index) => {
          return (
          <MenuItem
            key={index}
            onClick={() => {
              push(href)
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{title}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {typo}
            </Typography>
          </MenuItem>

          ) 
        })}

      </MenuList>
    </Paper>
  );
}


const listItem = [
  {
    href: "/dashboard",
    title: "Dashboard",
    icon: <ContentCut fontSize="small" />,
    typo: "⌘X"
  },
  {
    href: "/orders",
    title: "Order",
    icon: <ContentCopy fontSize="small" />,
    typo: "⌘C"
  },
  {
    href: "/users",
    title: "Users",
    icon: <ContentPaste fontSize="small" />,
    typo: "⌘"
  },
];