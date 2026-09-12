> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcicontrollerstatemachine/enqueueupdatedframe(_:timestamp:)](https://developer.apple.com/documentation/iousbhost/iousbhostcicontrollerstatemachine/enqueueupdatedframe(_:timestamp:))

# enqueueUpdatedFrame(\_:timestamp:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func enqueueUpdatedFrame(_ frame: UInt64, timestamp: UInt64) throws
```

## See Also

### Instance Methods

- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)
- [respond(toCommand:status:frame:timestamp:)](respond%28tocommand_status_frame_timestamp_%29.md)

# enqueueUpdatedFrame:timestamp:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) enqueueUpdatedFrame:(uint64_t) frame timestamp:(uint64_t) timestamp error:(NSError **) error;
```

## See Also

### Instance Methods

- [inspectCommand:error:](inspectcommand%28__%29.md)
- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [respondToCommand:status:frame:timestamp:error:](respond%28tocommand_status_frame_timestamp_%29.md)
- [initWithInterface:error:](initwithinterface_error_.md)
