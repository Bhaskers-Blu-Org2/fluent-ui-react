import React from 'react'
import { Button, Popup } from '@fluentui/react'

export const selectors = {
  triggerButtonId: 'trigger',
  popupContentClass: Popup.slotClassNames.content,
  popupContentButtonId: 'content-button',
}

const PopupClickHandlingExample = () => {
  const [show, setShow] = React.useState(true)
  return (
    <Popup
      trigger={
        <Button
          id={selectors.triggerButtonId}
          content="Open Popup"
          icon={{ name: 'expand' }}
          onClick={() => setShow(true)}
        />
      }
      content={
        !!show && (
          <Button
            id={selectors.popupContentButtonId}
            content="click me"
            onClick={e => {
              e.preventDefault()
              setShow(!show)
            }}
          />
        )
      }
    />
  )
}

export default PopupClickHandlingExample
