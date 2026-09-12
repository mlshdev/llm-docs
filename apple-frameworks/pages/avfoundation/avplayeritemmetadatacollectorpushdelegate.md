> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate)

# AVPlayerItemMetadataCollectorPushDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol you implement to receive metadata callbacks from a player item metadata collector.

## Declaration

```swift
protocol AVPlayerItemMetadataCollectorPushDelegate : NSObjectProtocol, Sendable
```

## Topics

### Accessing HLS date range metadata

- [metadataCollector(\_:didCollect:indexesOfNewGroups:indexesOfModifiedGroups:)](avplayeritemmetadatacollectorpushdelegate/metadatacollector%28__didcollect_indexesofnewgroups_indexesofmodifiedgroups_%29.md): Tells the delegate the collected metadata group information has changed and needs to be updated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the delegate and callback queue

- [setDelegate(\_:queue:)](avplayeritemmetadatacollector/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [delegate](avplayeritemmetadatacollector/delegate.md): Accesses the metadata collector’s delegate object.
- [delegateQueue](avplayeritemmetadatacollector/delegatequeue.md): The dispatch queue on which the delegate’s methods are called.

# AVPlayerItemMetadataCollectorPushDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol you implement to receive metadata callbacks from a player item metadata collector.

## Declaration

```objectivec
@protocol AVPlayerItemMetadataCollectorPushDelegate <NSObject>
```

## Topics

### Accessing HLS date range metadata

- [metadataCollector:didCollectDateRangeMetadataGroups:indexesOfNewGroups:indexesOfModifiedGroups:](avplayeritemmetadatacollectorpushdelegate/metadatacollector%28__didcollect_indexesofnewgroups_indexesofmodifiedgroups_%29.md): Tells the delegate the collected metadata group information has changed and needs to be updated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing the delegate and callback queue

- [setDelegate:queue:](avplayeritemmetadatacollector/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate will be called.
- [delegate](avplayeritemmetadatacollector/delegate.md): Accesses the metadata collector’s delegate object.
- [delegateQueue](avplayeritemmetadatacollector/delegatequeue.md): The dispatch queue on which the delegate’s methods are called.
