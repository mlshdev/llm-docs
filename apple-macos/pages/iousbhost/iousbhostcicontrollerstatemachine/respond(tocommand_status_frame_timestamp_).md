> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcicontrollerstatemachine/respond(tocommand:status:frame:timestamp:)](https://developer.apple.com/documentation/iousbhost/iousbhostcicontrollerstatemachine/respond(tocommand:status:frame:timestamp:))

# respond(toCommand:status:frame:timestamp:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func respond(toCommand command: UnsafePointer<IOUSBHostCIMessage>, status: IOUSBHostCIMessageStatus, frame: UInt64, timestamp: UInt64) throws
```

## See Also

### Instance Methods

- [enqueueUpdatedFrame(\_:timestamp:)](enqueueupdatedframe%28__timestamp_%29.md)
- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)

# respondToCommand:status:frame:timestamp:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) respondToCommand:(const IOUSBHostCIMessage *) command status:(const IOUSBHostCIMessageStatus) status frame:(uint64_t) frame timestamp:(uint64_t) timestamp error:(NSError **) error;
```

## See Also

### Instance Methods

- [enqueueUpdatedFrame:timestamp:error:](enqueueupdatedframe%28__timestamp_%29.md)
- [inspectCommand:error:](inspectcommand%28__%29.md)
- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [initWithInterface:error:](initwithinterface_error_.md)
