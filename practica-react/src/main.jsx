import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirstApp } from './FirstApp.jsx'
import { List } from './List.jsx'
import { Section } from './Section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FirstApp />
    <Profile /> */}
   <Section/>
  </StrictMode>,
)
