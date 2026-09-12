> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcidevicestatemachine/respond(tocommand:status:deviceaddress:)](https://developer.apple.com/documentation/iousbhost/iousbhostcidevicestatemachine/respond(tocommand:status:deviceaddress:))

# respond(toCommand:status:deviceAddress:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func respond(toCommand command: UnsafePointer<IOUSBHostCIMessage>, status: IOUSBHostCIMessageStatus, deviceAddress: Int) throws
```

## See Also

### Instance Methods

- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)

# respondToCommand:status:deviceAddress:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) respondToCommand:(const IOUSBHostCIMessage *) command status:(const IOUSBHostCIMessageStatus) status deviceAddress:(NSUInteger) deviceAddress error:(NSError **) error;
```

## See Also

### Instance Methods

- [inspectCommand:error:](inspectcommand%28__%29.md)
- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [initWithInterface:command:error:](initwithinterface_command_error_.md)
