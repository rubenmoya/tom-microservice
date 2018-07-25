'use strict'

const test = require('ava')

const createConfig = require('../../helpers/create-config')
const createTom = require('../../../')

const { TELEGRAM_TEST_CHAT_ID } = process.env

test('notification:telegram', async t => {
  const config = createConfig(({ config, tom }) => {
    tom.on('notification:telegram', data => {
      t.is(data.text, message)
      t.is(data.chat.id, chatId)
    })
  })

  const tom = createTom(config)
  const chatId = parseInt(TELEGRAM_TEST_CHAT_ID)
  const message = 'Someone is running the tests 🙀'

  await tom.notification.telegram({ message, chatId })
})