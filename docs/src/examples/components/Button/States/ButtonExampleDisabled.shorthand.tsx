import * as React from 'react'
import { Button, Flex } from '@fluentui/react'

const ButtonExampleDisabled = () => (
  <Flex column gap="gap.smaller">
    <Flex gap="gap.smaller">
      <Button disabled content="Default" />
      <Button disabled content="Primary" primary />
      <Button disabled icon={{ name: 'emoji' }} content="Click me" iconPosition="before" primary />
      <Button disabled circular icon={{ name: 'translation' }} title="Translation" />
      <Button
        disabled
        text
        content="Disabled text button"
        icon={{ name: 'call-video' }}
        iconPosition="before"
      />
    </Flex>
    <Button disabled fluid content="Fluid" />
  </Flex>
)

export default ButtonExampleDisabled
