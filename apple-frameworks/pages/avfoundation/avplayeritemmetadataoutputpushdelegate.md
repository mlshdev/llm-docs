> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutputpushdelegate](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate)

# AVPlayerItemMetadataOutputPushDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to provide additional metadata.

## Declaration

```swift
protocol AVPlayerItemMetadataOutputPushDelegate : AVPlayerItemOutputPushDelegate
```

<a id="overview"></a>

## Overview

This protocol extends the [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md) protocol.

## Topics

### Combining timed metadata groups

- [metadataOutput(\_:didOutputTimedMetadataGroups:from:)](avplayeritemmetadataoutputpushdelegate/metadataoutput%28__didoutputtimedmetadatagroups_from_%29.md): Tells the delegate a new collection of metadata items is available.

## Relationships

### Inherits From

- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](avplayeritemmetadataoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](avplayeritemmetadataoutput/delegate.md): The delegate object.
- [delegateQueue](avplayeritemmetadataoutput/delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate(\_:queue:)](avplayeritemmetadataoutput/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.

# AVPlayerItemMetadataOutputPushDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to provide additional metadata.

## Declaration

```objectivec
@protocol AVPlayerItemMetadataOutputPushDelegate <AVPlayerItemOutputPushDelegate>
```

<a id="overview"></a>

## Overview

This protocol extends the [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md) protocol.

## Topics

### Combining timed metadata groups

- [metadataOutput:didOutputTimedMetadataGroups:fromPlayerItemTrack:](avplayeritemmetadataoutputpushdelegate/metadataoutput%28__didoutputtimedmetadatagroups_from_%29.md): Tells the delegate a new collection of metadata items is available.

## Relationships

### Inherits From

- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md)

## See Also

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](avplayeritemmetadataoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](avplayeritemmetadataoutput/delegate.md): The delegate object.
- [delegateQueue](avplayeritemmetadataoutput/delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate:queue:](avplayeritemmetadataoutput/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.
