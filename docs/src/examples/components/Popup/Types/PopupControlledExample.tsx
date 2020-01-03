import { useBooleanKnob } from '@fluentui/docs-components'
import * as React from 'react'
import { Button, Input, Popup, Flex } from '@fluentui/react'

const PopupControlledExample = () => {
  const [open, setOpen] = useBooleanKnob({ name: 'open' })

  const popupContent = (
    <Flex column>
      <Flex.Item align="end">
        <Button
          text
          iconOnly
          icon={{ name: 'close' }}
          onClick={() => setOpen(false)}
          title="Close"
        />
      </Flex.Item>
      <Input icon={{ name: 'search' }} placeholder="Search..." />
    </Flex>
  )

  return (
    <Popup
      open={open}
      onOpenChange={(e, { open }) => setOpen(open)}
      content={popupContent}
      trapFocus
    >
      <Button icon={{ name: 'open-outside' }} title="Open popup" />
    </Popup>
  )
}

export default PopupControlledExample
