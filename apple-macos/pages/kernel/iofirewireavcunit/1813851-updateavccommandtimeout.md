> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavcunit/1813851-updateavccommandtimeout](https://developer.apple.com/documentation/kernel/iofirewireavcunit/1813851-updateavccommandtimeout)

# updateAVCCommandTimeout

**Interface language:** Objective-C

**Framework:** Kernel

By default, AVCCommands timeout 10 seconds after receiving an Interim response. This function resets the timeout of the current command to 10 seconds from the current time. Call this repeatedly for AVC commands that take a very long time to execute to prevent premature timeout.

## Declaration

```objectivec
virtual IOReturn updateAVCCommandTimeout(); 
```

## See Also

### Miscellaneous

- [AVCCommand](1813829-avccommand.md): Sends an AVC command to the device and stores the response.
- [AVCCommandInGeneration](1813833-avccommandingeneration.md): Sends an AVC command to the device and stores the response. The command must complete in the specified FireWire bus generation otherwise kIOFireWireBusReset is returned.
- [handleClose](1813838-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813842-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813847-matchpropertytable.md): Matching language support Match on the following properties of the unit: Vendor_ID GUID Unit_Type and available sub-units, match if the device has at least the requested number of a sub-unit type: AVCSubUnit_0 -\> AVCSubUnit_1f
