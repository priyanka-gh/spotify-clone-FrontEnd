import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists},dispatch]=useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
            <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
            <SidebarOption Icon={SearchIcon}title="Search"></SidebarOption>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"></SidebarOption>
            <br></br>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr></hr>
            <div className="song__list">
                {playlists?.items?.map((playlist)=>(
                    <SidebarOption title={playlist.name}></SidebarOption>
                ))}
            </div>
            {/* <SidebarOption title="Hipp hop"></SidebarOption>
            <SidebarOption title="Rock"></SidebarOption>
            <SidebarOption title="RnB"></SidebarOption> */}
        </div>
    )
}

export default Sidebar;

// import './Sidebar.css';
// import SidebarOption from './SidebarOption';
// import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
// import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
// import { useDataLayerValue } from './DataLayer';

// const Sidebar = () => {

//     const [{playlists}] = useDataLayerValue();

//     return (
//         <div className="sidebar">
//             <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
//             <SidebarOption Icon={HomeIcon} title="Home"/>
//             <SidebarOption Icon={SearchIcon} title="Search"/>
//             <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

//             <br/>
//             <strong className="sidebar__title">PLAYLISTS</strong>
//             <hr/>

//             <div className="sidebar__lists">
//                 {playlists?.items?.map(playlist => (
//                     <SidebarOption key={playlist.id} title={playlist.name}/>
//                 ))}
//             </div>
            
//         </div>
//     )
// }

// export default Sidebar