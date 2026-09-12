> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcidevicestatemachine/respond(tocommand:status:)](https://developer.apple.com/documentation/iousbhost/iousbhostcidevicestatemachine/respond(tocommand:status:))

# respond(toCommand:status:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func respond(toCommand command: UnsafePointer<IOUSBHostCIMessage>, status: IOUSBHostCIMessageStatus) throws
```

## See Also

### Instance Methods

- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [respond(toCommand:status:deviceAddress:)](respond%28tocommand_status_deviceaddress_%29.md)

# respondToCommand:status:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) respondToCommand:(const IOUSBHostCIMessage *) command status:(const IOUSBHostCIMessageStatus) status error:(NSError **) error;
```

## See Also

### Instance Methods

- [inspectCommand:error:](inspectcommand%28__%29.md)
- [respondToCommand:status:deviceAddress:error:](respond%28tocommand_status_deviceaddress_%29.md)
- [initWithInterface:command:error:](initwithinterface_command_error_.md)
