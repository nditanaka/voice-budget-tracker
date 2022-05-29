import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import useStyles from './styles'

const List = () => {
    const classes = useStyles()

    const transactions = [
        { id: 1, type: 'Income', category: 'Salary', amount: 1500, date: 'Sun May 29' },
        { id: 2, type: 'Expense', category: 'Food', amount: 70, date: 'Wed May 11' },
        { id: 3, type: 'Income', category: 'Dividends', amount: 15, date: 'Mon May 10' },
        { id: 4, type: 'Expense', category: 'Utility', amount: 150, date: 'Fri May 27' }
    ]

  return (
      <MUIList dense={false} className={classes.list}>
          {transactions.map((transaction) => (
              <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                  <ListItem>
                      <ListItemAvatar>
                          <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                          </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                      <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete" onClick="">
                              <Delete />
                          </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
              </Slide>
          ))}
    </MUIList>
  )
}

export default List