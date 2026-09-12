> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutput](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput)

# AVPlayerItemMetadataOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that vends collections of metadata items that a player item’s tracks carry.

## Declaration

```swift
class AVPlayerItemMetadataOutput
```

<a id="overview"></a>

## Overview

> **Note**

>  Setting the value of [suppressesPlayerRendering](avplayeritemoutput/suppressesplayerrendering.md) on an instance of `AVPlayerItemMetadataOutput` has no effect.

## Topics

### Creating a metadata output

- [init(identifiers:)](avplayeritemmetadataoutput/init%28identifiers_%29.md): Creates an instance of AVPlayerItemMetadataOutput.

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](avplayeritemmetadataoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](avplayeritemmetadataoutput/delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](avplayeritemmetadataoutput/delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate(\_:queue:)](avplayeritemmetadataoutput/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.

## Relationships

### Inherits From

- [AVPlayerItemOutput](avplayeritemoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media output

- [AVPlayerVideoOutput](avplayervideooutput.md): An object that receives video data from a player object.
- [AVVideoOutputSpecification](avvideooutputspecification.md): An object that specifies the pixel buffer attributes and tag collections handled by a player video output.
- [AVPlayerItemOutput](avplayeritemoutput.md): An abstract class that defines the common interface to output media data from a player item.
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md): An object that outputs video frames from a player item.
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVPlayerItemMetadataOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that vends collections of metadata items that a player item’s tracks carry.

## Declaration

```objectivec
@interface AVPlayerItemMetadataOutput : AVPlayerItemOutput
```

<a id="overview"></a>

## Overview

> **Note**

>  Setting the value of [suppressesPlayerRendering](avplayeritemoutput/suppressesplayerrendering.md) on an instance of `AVPlayerItemMetadataOutput` has no effect.

## Topics

### Creating a metadata output

- [initWithIdentifiers:](avplayeritemmetadataoutput/init%28identifiers_%29.md): Creates an instance of AVPlayerItemMetadataOutput.

### Configuring the delegate

- [advanceIntervalForDelegateInvocation](avplayeritemmetadataoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.
- [delegate](avplayeritemmetadataoutput/delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](avplayeritemmetadataoutput/delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate:queue:](avplayeritemmetadataoutput/setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.

## Relationships

### Inherits From

- [AVPlayerItemOutput](avplayeritemoutput.md)

## See Also

### Media output

- [AVPlayerVideoOutput](avplayervideooutput.md): An object that receives video data from a player object.
- [AVVideoOutputSpecification](avvideooutputspecification.md): An object that specifies the pixel buffer attributes and tag collections handled by a player video output.
- [CMTagCollectionCreateWithVideoOutputPreset](cmtagcollectioncreatewithvideooutputpreset.md): Creates a collection with the required tags to describe the specified video output requirements.
- [CMTagCollectionVideoOutputPreset](cmtagcollectionvideooutputpreset.md): Constants that indicate the type of video content to output.
- [AVPlayerItemOutput](avplayeritemoutput.md): An abstract class that defines the common interface to output media data from a player item.
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md): An object that outputs video frames from a player item.
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputDelegate](avplayeritemsamplebufferoutputdelegate.md): Defines common delegate methods for objects participating in sample buffer output.
