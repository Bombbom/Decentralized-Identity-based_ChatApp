import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack'
function DashboardLayout(): JSX.Element {
    return (
        <>
        <Box sx={{
            // overflowY: "scroll",
            height: "100vh",
            width: 100,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            // textAlign: "left"
          }}
        >
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
            textAlign="left" // Thêm thuộc tính textAlign vào đây
            >
            <Box sx={{
            // overflowY: "scroll",
            height: "100vh",
            width: 100,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            // textAlign: "left"
            }}
            >
                Hello
            </Box>
        </Stack>
        </Box>
        <Outlet/>
        </>
    )
}

export default DashboardLayout
