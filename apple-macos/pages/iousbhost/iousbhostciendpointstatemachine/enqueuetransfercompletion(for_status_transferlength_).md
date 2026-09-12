> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostciendpointstatemachine/enqueuetransfercompletion(for:status:transferlength:)](https://developer.apple.com/documentation/iousbhost/iousbhostciendpointstatemachine/enqueuetransfercompletion(for:status:transferlength:))

# enqueueTransferCompletion(for:status:transferLength:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func enqueueTransferCompletion(for message: UnsafePointer<IOUSBHostCIMessage>, status: IOUSBHostCIMessageStatus, transferLength: Int) throws
```

## See Also

### Instance Methods

- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [processDoorbell(\_:)](processdoorbell%28__%29.md)
- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)

# enqueueTransferCompletionForMessage:status:transferLength:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) enqueueTransferCompletionForMessage:(const IOUSBHostCIMessage *) message status:(IOUSBHostCIMessageStatus) status transferLength:(NSUInteger) transferLength error:(NSError **) error;
```

## See Also

### Instance Methods

- [inspectCommand:error:](inspectcommand%28__%29.md)
- [processDoorbell:error:](processdoorbell%28__%29.md)
- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [initWithInterface:command:error:](initwithinterface_command_error_.md)
