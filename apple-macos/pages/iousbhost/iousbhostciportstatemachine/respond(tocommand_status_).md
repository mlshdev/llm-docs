> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostciportstatemachine/respond(tocommand:status:)](https://developer.apple.com/documentation/iousbhost/iousbhostciportstatemachine/respond(tocommand:status:))

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
- [updateLinkState(\_:speed:inhibitLinkStateChange:)](updatelinkstate%28__speed_inhibitlinkstatechange_%29.md)

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
- [updateLinkState:speed:inhibitLinkStateChange:error:](updatelinkstate%28__speed_inhibitlinkstatechange_%29.md)
- [initWithInterface:portNumber:error:](initwithinterface_portnumber_error_.md)
