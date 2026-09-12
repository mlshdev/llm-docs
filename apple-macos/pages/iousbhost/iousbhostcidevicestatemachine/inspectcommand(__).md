> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcidevicestatemachine/inspectcommand(_:)](https://developer.apple.com/documentation/iousbhost/iousbhostcidevicestatemachine/inspectcommand(_:))

# inspectCommand(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func inspectCommand(_ command: UnsafePointer<IOUSBHostCIMessage>) throws
```

## See Also

### Instance Methods

- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)
- [respond(toCommand:status:deviceAddress:)](respond%28tocommand_status_deviceaddress_%29.md)

# inspectCommand:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) inspectCommand:(const IOUSBHostCIMessage *) command error:(NSError **) error;
```

## See Also

### Instance Methods

- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [respondToCommand:status:deviceAddress:error:](respond%28tocommand_status_deviceaddress_%29.md)
- [initWithInterface:command:error:](initwithinterface_command_error_.md)
