> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostciendpointstatemachine/processdoorbell(_:)](https://developer.apple.com/documentation/iousbhost/iousbhostciendpointstatemachine/processdoorbell(_:))

# processDoorbell(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func processDoorbell(_ doorbell: IOUSBHostCIDoorbell) throws
```

## See Also

### Instance Methods

- [enqueueTransferCompletion(for:status:transferLength:)](enqueuetransfercompletion%28for_status_transferlength_%29.md)
- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)

# processDoorbell:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) processDoorbell:(const IOUSBHostCIDoorbell) doorbell error:(NSError **) error;
```

## See Also

### Instance Methods

- [enqueueTransferCompletionForMessage:status:transferLength:error:](enqueuetransfercompletion%28for_status_transferlength_%29.md)
- [inspectCommand:error:](inspectcommand%28__%29.md)
- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [initWithInterface:command:error:](initwithinterface_command_error_.md)
