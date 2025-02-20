import React from 'react'
import { Modal, Box, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface MoviesModalProps {
  open: boolean
  handleClose: () => void
}

const MoviesModal: React.FC<MoviesModalProps> = ({ open, handleClose }) => {
  const iframeUrl = 'https://movies-react-beige.vercel.app'

  const titleClick = () => {
    window.open(iframeUrl, '_blank')
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="w-[80%] h-[80%] bg-white p-[16px] mx-auto mt-[10%] overflow-auto">
        <Box display="flex" alignItems="center">
          <Typography 
            variant="h6"
            sx={{
              cursor: 'pointer',
              '&:hover': { color: 'gray' }}}
            onClick={titleClick}
          >
            <OpenInNewIcon />
              Open in New Window.
          </Typography>
        </Box>
        <iframe title="Movies Modal" src={iframeUrl} width="100%" height="100%"></iframe>
      </Box>
    </Modal>
  )
}

export default MoviesModal
