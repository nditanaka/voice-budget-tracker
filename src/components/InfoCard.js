import React from 'react'
// import { Delete, TipsAndUpdatesIcon } from '@material-ui/icons'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
const isIncome = Math.round(Math.random())

const InfoCard = () => {
  return (
      <div style={{ textAlign: 'center', padding: '0 10%' }}>
          <div><TipsAndUpdatesOutlinedIcon /><br />
              Add {isIncome ? 'Income ' : 'Expense '}
              for {isIncome ? '$100 ' : '$50 '}
              in Category {isIncome ? 'Salary ' : 'Clothes '}
              for {isIncome ? 'Monday ' : 'next Friday '}
          </div>
      </div>
  )
}

export default InfoCard