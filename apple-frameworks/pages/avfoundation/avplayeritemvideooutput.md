> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput)

# AVPlayerItemVideoOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that outputs video frames from a player item.

## Declaration

```swift
class AVPlayerItemVideoOutput
```

## Topics

### Creating a video output

- [init(pixelBufferAttributes:)](avplayeritemvideooutput/init%28pixelbufferattributes_%29-7n7v8.md): Deprecated. Creates a video output object using the specified pixel buffer attributes.
- [init(pixelBufferAttributes:)](avplayeritemvideooutput/init%28pixelbufferattributes_%29-18izh.md): Initializes an instance of AVPlayerItemVideoOutput, using the specified pixel buffer attributes, for video image output
- [init(outputSettings:)](avplayeritemvideooutput/init%28outputsettings_%29.md): Creates a video output object initialized with the specified output settings.

### Configuring the delegate

- [setDelegate(\_:queue:)](avplayeritemvideooutput/setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [delegate](avplayeritemvideooutput/delegate.md): The delegate for the video output object.
- [AVPlayerItemOutputPullDelegate](avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.
- [delegateQueue](avplayeritemvideooutput/delegatequeue.md): The dispatch queue on which to call delegate methods.

### Notifying the delegate of changes

- [requestNotificationOfMediaDataChange(withAdvanceInterval:)](avplayeritemvideooutput/requestnotificationofmediadatachange%28withadvanceinterval_%29.md): Tells the receiver that the video out put client is entering a quiescent state.

### Getting pixel buffer data

- [hasNewPixelBuffer(forItemTime:)](avplayeritemvideooutput/hasnewpixelbuffer%28foritemtime_%29.md): Returns a Boolean value that indicates whether video output is available for the specified item time.
- [copyPixelBuffer(forItemTime:itemTimeForDisplay:)](avplayeritemvideooutput/copypixelbuffer%28foritemtime_itemtimefordisplay_%29.md): Deprecated. Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.
- [pixelBufferAndDisplayTime(forItemTime:)](avplayeritemvideooutput/pixelbufferanddisplaytime%28foritemtime_%29.md): Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired

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
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVPlayerItemVideoOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that outputs video frames from a player item.

## Declaration

```objectivec
@interface AVPlayerItemVideoOutput : AVPlayerItemOutput
```

## Topics

### Creating a video output

- [initWithPixelBufferAttributes:](avplayeritemvideooutput/init%28pixelbufferattributes_%29-7n7v8.md): Deprecated. Creates a video output object using the specified pixel buffer attributes.
- [initWithOutputSettings:](avplayeritemvideooutput/init%28outputsettings_%29.md): Creates a video output object initialized with the specified output settings.

### Configuring the delegate

- [setDelegate:queue:](avplayeritemvideooutput/setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue for the receiver.
- [delegate](avplayeritemvideooutput/delegate.md): The delegate for the video output object.
- [AVPlayerItemOutputPullDelegate](avplayeritemoutputpulldelegate.md): Methods you can implement to respond to pixel buffer changes.
- [delegateQueue](avplayeritemvideooutput/delegatequeue.md): The dispatch queue on which to call delegate methods.

### Notifying the delegate of changes

- [requestNotificationOfMediaDataChangeWithAdvanceInterval:](avplayeritemvideooutput/requestnotificationofmediadatachange%28withadvanceinterval_%29.md): Tells the receiver that the video out put client is entering a quiescent state.

### Getting pixel buffer data

- [hasNewPixelBufferForItemTime:](avplayeritemvideooutput/hasnewpixelbuffer%28foritemtime_%29.md): Returns a Boolean value that indicates whether video output is available for the specified item time.
- [copyPixelBufferForItemTime:itemTimeForDisplay:](avplayeritemvideooutput/copypixelbuffer%28foritemtime_itemtimefordisplay_%29.md): Deprecated. Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.

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
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputDelegate](avplayeritemsamplebufferoutputdelegate.md): Defines common delegate methods for objects participating in sample buffer output.
