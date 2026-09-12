> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutputpulldelegate](https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate)

# AVPlayerItemOutputPullDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to respond to pixel buffer changes.

## Declaration

```swift
protocol AVPlayerItemOutputPullDelegate : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

The methods in this protocol are called by [AVPlayerItemVideoOutput](avplayeritemvideooutput.md) objects.

## Topics

### Responding to pixel buffer changes

- [outputMediaDataWillChange(\_:)](avplayeritemoutputpulldelegate/outputmediadatawillchange%28__%29.md): Tells the delegate that new samples are about to arrive.
- [outputSequenceWasFlushed(\_:)](avplayeritemoutputpulldelegate/outputsequencewasflushed%28__%29.md): Tells the delegate that a new sample sequence is commencing.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the delegate

- [setDelegate(\_:queue:)](avplayeritemvideooutput/setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [delegate](avplayeritemvideooutput/delegate.md): The delegate for the video output object.
- [delegateQueue](avplayeritemvideooutput/delegatequeue.md): The dispatch queue on which to call delegate methods.

# AVPlayerItemOutputPullDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to respond to pixel buffer changes.

## Declaration

```objectivec
@protocol AVPlayerItemOutputPullDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The methods in this protocol are called by [AVPlayerItemVideoOutput](avplayeritemvideooutput.md) objects.

## Topics

### Responding to pixel buffer changes

- [outputMediaDataWillChange:](avplayeritemoutputpulldelegate/outputmediadatawillchange%28__%29.md): Tells the delegate that new samples are about to arrive.
- [outputSequenceWasFlushed:](avplayeritemoutputpulldelegate/outputsequencewasflushed%28__%29.md): Tells the delegate that a new sample sequence is commencing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the delegate

- [setDelegate:queue:](avplayeritemvideooutput/setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [delegate](avplayeritemvideooutput/delegate.md): The delegate for the video output object.
- [delegateQueue](avplayeritemvideooutput/delegatequeue.md): The dispatch queue on which to call delegate methods.
