> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavcnub/1810878-getdevice](https://developer.apple.com/documentation/kernel/iofirewireavcnub/1810878-getdevice)

# getDevice

**Interface language:** Objective-C

**Framework:** Kernel

Returns the FireWire device nub that is this object's provider .

## Declaration

```objectivec
IOFireWireNub* getDevice() const ;
```

## See Also

### Miscellaneous

- [AVCCommand](1810816-avccommand.md): Sends an AVC command to the device and stores the response.
- [AVCCommandInGeneration](1810846-avccommandingeneration.md): Sends an AVC command to the device and stores the response. The command must complete in the specified FireWire bus generation otherwise kIOFireWireBusReset is returned.
- [updateAVCCommandTimeout](1810906-updateavccommandtimeout.md): By default, AVCCommands timeout 10 seconds after receiving an Interim response. This function resets the timeout of the current command to 10 seconds from the current time. Call this repeatedly for AVC commands that take a very long time to execute to prevent premature timeout.
