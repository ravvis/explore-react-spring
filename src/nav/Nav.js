import {Card, List, ListItem, ListItemText} from "@material-ui/core";

const NAV_ITEMS = [
  {
    title: "Springy Button",
    href: "#springy-button"
  },
  {
    title: "Fading Message",
    href: "#fading-message"
  },
  {
    title: "Smooth Accordion",
    href: "#smooth-accordion"
  },
  {
    title: "SVG",
    href: "#svg"
  }
]

const Nav = () => {
  return <Card className="position-sticky mt-3 mx-5" style={{ top: '40px' }}>
    <List component="nav">
      {NAV_ITEMS.map(item => <ListItem component="a" href={item.href} button>
        <ListItemText primary={item.title}/>
      </ListItem>)}
    </List>
  </Card>
}
export default Nav;