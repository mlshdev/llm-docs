> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput)

# AVPlayerItemLegibleOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that vends attributed strings for media with a legible characteristic.

## Declaration

```swift
class AVPlayerItemLegibleOutput
```

## Topics

### Creating a legible output

- [init(mediaSubtypesForNativeRepresentation:)](avplayeritemlegibleoutput/init%28mediasubtypesfornativerepresentation_%29.md): Creates an initialized legible-output object.

### Configuring text styling

- [textStylingResolution](avplayeritemlegibleoutput/textstylingresolution-swift.property.md): A string identifier indicating the degree of text styling to be applied to attributed strings vended by the object.
- [AVPlayerItemLegibleOutput.TextStylingResolution](avplayeritemlegibleoutput/textstylingresolution-swift.struct.md): A text styling resolution.

### Configuring the delegate

- [delegate](avplayeritemlegibleoutput/delegate.md): The delegate of the output class.
- [setDelegate(\_:queue:)](avplayeritemlegibleoutput/setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](avplayeritemlegibleoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](avplayeritemlegibleoutput/delegatequeue.md): The dispatch queue on which the delegate is called.

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
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVPlayerItemLegibleOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that vends attributed strings for media with a legible characteristic.

## Declaration

```objectivec
@interface AVPlayerItemLegibleOutput : AVPlayerItemOutput
```

## Topics

### Creating a legible output

- [init](1805461-init.md): Creates an initialized legible output object.
- [initWithMediaSubtypesForNativeRepresentation:](avplayeritemlegibleoutput/init%28mediasubtypesfornativerepresentation_%29.md): Creates an initialized legible-output object.

### Configuring text styling

- [textStylingResolution](avplayeritemlegibleoutput/textstylingresolution-swift.property.md): A string identifier indicating the degree of text styling to be applied to attributed strings vended by the object.
- [AVPlayerItemLegibleOutputTextStylingResolution](avplayeritemlegibleoutput/textstylingresolution-swift.struct.md): A text styling resolution.

### Configuring the delegate

- [delegate](avplayeritemlegibleoutput/delegate.md): The delegate of the output class.
- [setDelegate:queue:](avplayeritemlegibleoutput/setdelegate%28__queue_%29.md): Sets the receiver’s delegate and a dispatch queue on which the delegate is called.
- [AVPlayerItemLegibleOutputPushDelegate](avplayeritemlegibleoutputpushdelegate.md): Methods you can implement to provide alternative attributed-string output.
- [advanceIntervalForDelegateInvocation](avplayeritemlegibleoutput/advanceintervalfordelegateinvocation.md): The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.
- [delegateQueue](avplayeritemlegibleoutput/delegatequeue.md): The dispatch queue on which the delegate is called.

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
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputDelegate](avplayeritemsamplebufferoutputdelegate.md): Defines common delegate methods for objects participating in sample buffer output.
