import {InboxOutlined,StarOutline,SendOutlined,InsertDriveFileOutlined,DeleteOutline,MailOutlined} from '@mui/icons-material'

export const SIDEBAR_DATA = [
    {
        name:"inbox",
        title:'Inbox',
        icon: InboxOutlined
    },
    {
        name:"starred",
        title:'Starred',
        icon: StarOutline
    },
    {
        name:"sent",
        title:'Sent',
        icon: SendOutlined
    },
    {
        name:"deafts",
        title:'Drafts',
        icon: InsertDriveFileOutlined

    },
    {
        name:"bin",
        title:'Bin',
        icon:  DeleteOutline
    },
    {
        name:"allmail",
        title:'All mail',
        icon:  MailOutlined

    }

    
]