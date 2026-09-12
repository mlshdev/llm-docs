> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavcnub/1810906-updateavccommandtimeout](https://developer.apple.com/documentation/kernel/iofirewireavcnub/1810906-updateavccommandtimeout)

# updateAVCCommandTimeout

**Interface language:** Objective-C

**Framework:** Kernel

By default, AVCCommands timeout 10 seconds after receiving an Interim response. This function resets the timeout of the current command to 10 seconds from the current time. Call this repeatedly for AVC commands that take a very long time to execute to prevent premature timeout.

## Declaration

```objectivec
virtual IOReturn updateAVCCommandTimeout() = 0; 
```

## See Also

### Miscellaneous

- [AVCCommand](1810816-avccommand.md): Sends an AVC command to the device and stores the response.
- [AVCCommandInGeneration](1810846-avccommandingeneration.md): Sends an AVC command to the device and stores the response. The command must complete in the specified FireWire bus generation otherwise kIOFireWireBusReset is returned.
- [getDevice](1810878-getdevice.md): Returns the FireWire device nub that is this object's provider .
