> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsmetadataquerydidfinishgathering](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsmetadataquerydidfinishgathering)

# NSMetadataQueryDidFinishGathering (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the receiver has finished with the initial result-gathering phase of the query.

## Declaration

```swift
static let NSMetadataQueryDidFinishGathering: NSNotification.Name
```

## See Also

### Working with notifications

- [NSMetadataQueryDidStartGathering](nsmetadataquerydidstartgathering.md): Posted when the receiver begins with the initial result-gathering phase of the query.
- [NSMetadataQueryDidUpdate](nsmetadataquerydidupdate.md): Posted when the receiver’s results have changed during the live-update phase of the query.
- [NSMetadataQueryGatheringProgress](nsmetadataquerygatheringprogress.md): Posted as the receiver is collecting results during the initial result-gathering phase of the query.

# NSMetadataQueryDidFinishGatheringNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the receiver has finished with the initial result-gathering phase of the query.

## Declaration

```objectivec
extern NSNotificationName const NSMetadataQueryDidFinishGatheringNotification;
```

## See Also

### Working with notifications

- [NSMetadataQueryDidStartGatheringNotification](nsmetadataquerydidstartgathering.md): Posted when the receiver begins with the initial result-gathering phase of the query.
- [NSMetadataQueryDidUpdateNotification](nsmetadataquerydidupdate.md): Posted when the receiver’s results have changed during the live-update phase of the query.
- [NSMetadataQueryGatheringProgressNotification](nsmetadataquerygatheringprogress.md): Posted as the receiver is collecting results during the initial result-gathering phase of the query.
