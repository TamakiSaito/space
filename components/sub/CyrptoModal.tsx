import React from 'react'
import { Modal, Box, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface CryptoModalProps {
  open: boolean
  handleClose: () => void
}

const CryptoModal: React.FC<CryptoModalProps> = ({ open, handleClose }) => {
  const iframeUrl = 'https://bitcoin-react.vercel.app/bitcoin'

  const titleClick = () => {
    window.open(iframeUrl, '_blank')
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="w-[80%] h-[80%] bg-white p-[16px] mx-auto mt-[10%] overflow-auto">
        <Typography 
          variant="h6"
          sx={{
            cursor: 'pointer',
            '&:hover': { color: 'gray' }
          }}
          onClick={titleClick}
        >
          <OpenInNewIcon />
          Open in New Window.
        </Typography>
        <iframe title="Crypto Modal" src={iframeUrl} width="100%" height="100%"></iframe>
      </Box>
    </Modal>
  )
}

export default CryptoModal
