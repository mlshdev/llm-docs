> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideooutputspecification](https://developer.apple.com/documentation/avfoundation/avvideooutputspecification)

# AVVideoOutputSpecification (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

An object that specifies the pixel buffer attributes and tag collections handled by a player video output.

## Declaration

```swift
class AVVideoOutputSpecification
```

## Topics

### Creating a specification

- [init(tagCollections:)](avvideooutputspecification/init%28tagcollections_%29.md)

### Configuring the specification

- [defaultOutputSettings](avvideooutputspecification/defaultoutputsettings.md)
- [setOutputSettings(\_:for:)](avvideooutputspecification/setoutputsettings%28__for_%29.md)
- [defaultPixelBufferAttributes](avvideooutputspecification/defaultpixelbufferattributes.md): Deprecated.
- [setOutputPixelBufferAttributes(\_:for:)](avvideooutputspecification/setoutputpixelbufferattributes%28__for_%29.md): Deprecated.
- [preferredTagCollections](avvideooutputspecification/preferredtagcollections-3gdo7.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media output

- [AVPlayerVideoOutput](avplayervideooutput.md): An object that receives video data from a player object.
- [AVPlayerItemOutput](avplayeritemoutput.md): An abstract class that defines the common interface to output media data from a player item.
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md): An object that outputs video frames from a player item.
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVVideoOutputSpecification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

An object that specifies the pixel buffer attributes and tag collections handled by a player video output.

## Declaration

```objectivec
@interface AVVideoOutputSpecification : NSObject
```

## Topics

### Creating a specification

- [initWithTagCollections:](avvideooutputspecification/initwithtagcollections_.md)

### Configuring the specification

- [defaultOutputSettings](avvideooutputspecification/defaultoutputsettings.md)
- [setOutputSettings:forTagCollection:](avvideooutputspecification/setoutputsettings_fortagcollection_.md)
- [defaultPixelBufferAttributes](avvideooutputspecification/defaultpixelbufferattributes.md): Deprecated.
- [setOutputPixelBufferAttributes:forTagCollection:](avvideooutputspecification/setoutputpixelbufferattributes_fortagcollection_.md): Deprecated.
- [preferredTagCollections](avvideooutputspecification/preferredtagcollections-2ikbd.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Media output

- [AVPlayerVideoOutput](avplayervideooutput.md): An object that receives video data from a player object.
- [CMTagCollectionCreateWithVideoOutputPreset](cmtagcollectioncreatewithvideooutputpreset.md): Creates a collection with the required tags to describe the specified video output requirements.
- [CMTagCollectionVideoOutputPreset](cmtagcollectionvideooutputpreset.md): Constants that indicate the type of video content to output.
- [AVPlayerItemOutput](avplayeritemoutput.md): An abstract class that defines the common interface to output media data from a player item.
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md): An object that outputs video frames from a player item.
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputDelegate](avplayeritemsamplebufferoutputdelegate.md): Defines common delegate methods for objects participating in sample buffer output.
