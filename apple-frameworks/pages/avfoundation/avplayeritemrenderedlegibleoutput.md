> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput)

# AVPlayerItemRenderedLegibleOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A player item output that vends media with a legible characteristic as rendered pixel buffers.

## Declaration

```swift
class AVPlayerItemRenderedLegibleOutput
```

## Topics

### Creating an output

- [init(videoDisplay:)](avplayeritemrenderedlegibleoutput/init%28videodisplay_%29.md): Creates a rendered legible output object.

### Configuring an output

- [advanceIntervalForDelegateInvocation](avplayeritemrenderedlegibleoutput/advanceintervalfordelegateinvocation.md): Permits advance invocation of the associated delegate, if any.
- [videoDisplaySize](avplayeritemrenderedlegibleoutput/videodisplaysize.md): Set the video display size to use for rendering of pixel buffers.

### Setting a delegate

- [delegate](avplayeritemrenderedlegibleoutput/delegate.md): A delegate object for this output.
- [setDelegate(\_:queue:)](avplayeritemrenderedlegibleoutput/setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [delegateQueue](avplayeritemrenderedlegibleoutput/delegatequeue.md): The dispatch queue on which the output calls the delegate object.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

### Initializers

- [init(videoDisplaySize:)](avplayeritemrenderedlegibleoutput/init%28videodisplaysize_%29.md)

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
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVPlayerItemRenderedLegibleOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A player item output that vends media with a legible characteristic as rendered pixel buffers.

## Declaration

```objectivec
@interface AVPlayerItemRenderedLegibleOutput : AVPlayerItemOutput
```

## Topics

### Creating an output

- [initWithVideoDisplaySize:](avplayeritemrenderedlegibleoutput/init%28videodisplay_%29.md): Creates a rendered legible output object.

### Configuring an output

- [advanceIntervalForDelegateInvocation](avplayeritemrenderedlegibleoutput/advanceintervalfordelegateinvocation.md): Permits advance invocation of the associated delegate, if any.
- [videoDisplaySize](avplayeritemrenderedlegibleoutput/videodisplaysize.md): Set the video display size to use for rendering of pixel buffers.

### Setting a delegate

- [delegate](avplayeritemrenderedlegibleoutput/delegate.md): A delegate object for this output.
- [setDelegate:queue:](avplayeritemrenderedlegibleoutput/setdelegate%28__queue_%29.md): Sets the delegate object and the queue on which it’s invoked.
- [delegateQueue](avplayeritemrenderedlegibleoutput/delegatequeue.md): The dispatch queue on which the output calls the delegate object.
- [AVPlayerItemRenderedLegibleOutputPushDelegate](avplayeritemrenderedlegibleoutputpushdelegate.md): A delegate that handles the rendered pixel buffers produced by a rendered legible output object.

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
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputDelegate](avplayeritemsamplebufferoutputdelegate.md): Defines common delegate methods for objects participating in sample buffer output.
