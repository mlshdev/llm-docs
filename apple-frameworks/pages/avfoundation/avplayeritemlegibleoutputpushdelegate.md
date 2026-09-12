> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutputpushdelegate](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputpushdelegate)

# AVPlayerItemLegibleOutputPushDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to provide alternative attributed-string output.

## Declaration

```swift
protocol AVPlayerItemLegibleOutputPushDelegate : AVPlayerItemOutputPushDelegate
```

<a id="overview"></a>

## Overview

This protocol extends the [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md) protocol.

## Topics

### Providing alternative attributed-string output

- [legibleOutput(\_:didOutputAttributedStrings:nativeSampleBuffers:forItemTime:)](avplayeritemlegibleoutputpushdelegate/legibleoutput%28__didoutputattributedstrings_nativesamplebuffers_foritemtime_%29.md): Asks the delegate to process the delivery of new textual samples.

## Relationships

### Inherits From

- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the delegate

- [delegate](avplayeritemlegibleoutput/delegate.md): The delegate of the output class.
- [setDelegate(\_:queue:)](avplayeritemlegibleoutput/setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [advanceIntervalForDelegateInvocation](avplayeritemlegibleoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](avplayeritemlegibleoutput/delegatequeue.md): The dispatch queue on which the delegate is called.

# AVPlayerItemLegibleOutputPushDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to provide alternative attributed-string output.

## Declaration

```objectivec
@protocol AVPlayerItemLegibleOutputPushDelegate <AVPlayerItemOutputPushDelegate>
```

<a id="overview"></a>

## Overview

This protocol extends the [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md) protocol.

## Topics

### Providing alternative attributed-string output

- [legibleOutput:didOutputAttributedStrings:nativeSampleBuffers:forItemTime:](avplayeritemlegibleoutputpushdelegate/legibleoutput%28__didoutputattributedstrings_nativesamplebuffers_foritemtime_%29.md): Asks the delegate to process the delivery of new textual samples.

## Relationships

### Inherits From

- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md)

## See Also

### Configuring the delegate

- [delegate](avplayeritemlegibleoutput/delegate.md): The delegate of the output class.
- [setDelegate:queue:](avplayeritemlegibleoutput/setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [advanceIntervalForDelegateInvocation](avplayeritemlegibleoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](avplayeritemlegibleoutput/delegatequeue.md): The dispatch queue on which the delegate is called.
