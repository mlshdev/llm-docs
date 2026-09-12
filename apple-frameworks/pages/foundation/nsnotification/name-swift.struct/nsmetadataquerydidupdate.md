> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsmetadataquerydidupdate](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsmetadataquerydidupdate)

# NSMetadataQueryDidUpdate (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the receiver’s results have changed during the live-update phase of the query.

## Declaration

```swift
static let NSMetadataQueryDidUpdate: NSNotification.Name
```

## See Also

### Working with notifications

- [NSMetadataQueryDidFinishGathering](nsmetadataquerydidfinishgathering.md): Posted when the receiver has finished with the initial result-gathering phase of the query.
- [NSMetadataQueryDidStartGathering](nsmetadataquerydidstartgathering.md): Posted when the receiver begins with the initial result-gathering phase of the query.
- [NSMetadataQueryGatheringProgress](nsmetadataquerygatheringprogress.md): Posted as the receiver is collecting results during the initial result-gathering phase of the query.

# NSMetadataQueryDidUpdateNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the receiver’s results have changed during the live-update phase of the query.

## Declaration

```objectivec
extern NSNotificationName const NSMetadataQueryDidUpdateNotification;
```

## See Also

### Working with notifications

- [NSMetadataQueryDidFinishGatheringNotification](nsmetadataquerydidfinishgathering.md): Posted when the receiver has finished with the initial result-gathering phase of the query.
- [NSMetadataQueryDidStartGatheringNotification](nsmetadataquerydidstartgathering.md): Posted when the receiver begins with the initial result-gathering phase of the query.
- [NSMetadataQueryGatheringProgressNotification](nsmetadataquerygatheringprogress.md): Posted as the receiver is collecting results during the initial result-gathering phase of the query.
