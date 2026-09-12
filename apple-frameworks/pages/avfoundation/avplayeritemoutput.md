> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutput](https://developer.apple.com/documentation/avfoundation/avplayeritemoutput)

# AVPlayerItemOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An abstract class that defines the common interface to output media data from a player item.

## Declaration

```swift
class AVPlayerItemOutput
```

<a id="overview"></a>

## Overview

This class provides basic methods for converting time values to the timebase of the item. It also provides an option to suppress rendering of the output associated with the specific instance of this class.

> **Important**

>  Don’t create instances of this class directly but instead use one of the concrete subclasses that manage specific types of assets.

## Topics

### Time conversion

- [itemTime(forHostTime:)](avplayeritemoutput/itemtime%28forhosttime_%29.md): Converts a host time, specified in seconds, to the item’s timebase.
- [itemTime(forMachAbsoluteTime:)](avplayeritemoutput/itemtime%28formachabsolutetime_%29.md): Converts a Mach host time to the item’s timebase.
- [itemTime(for:)](avplayeritemoutput/itemtime%28for_%29.md): Converts a Core Video timestamp to the item’s timebase.

### Configuring the playback options

- [suppressesPlayerRendering](avplayeritemoutput/suppressesplayerrendering.md): A Boolean value that indicates whether the player object renders the receiver’s output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md)
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md)
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md)
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md)
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md)

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
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md): An object that outputs video frames from a player item.
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemOutputPushDelegate](avplayeritemoutputpushdelegate.md): A protocol that defines the methods to implement to respond to changes in the media data sequence.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVPlayerItemOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An abstract class that defines the common interface to output media data from a player item.

## Declaration

```objectivec
@interface AVPlayerItemOutput : NSObject
```

<a id="overview"></a>

## Overview

This class provides basic methods for converting time values to the timebase of the item. It also provides an option to suppress rendering of the output associated with the specific instance of this class.

> **Important**

>  Don’t create instances of this class directly but instead use one of the concrete subclasses that manage specific types of assets.

## Topics

### Time conversion

- [itemTimeForHostTime:](avplayeritemoutput/itemtime%28forhosttime_%29.md): Converts a host time, specified in seconds, to the item’s timebase.
- [itemTimeForMachAbsoluteTime:](avplayeritemoutput/itemtime%28formachabsolutetime_%29.md): Converts a Mach host time to the item’s timebase.
- [itemTimeForCVTimeStamp:](avplayeritemoutput/itemtime%28for_%29.md): Converts a Core Video timestamp to the item’s timebase.

### Configuring the playback options

- [suppressesPlayerRendering](avplayeritemoutput/suppressesplayerrendering.md): A Boolean value that indicates whether the player object renders the receiver’s output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md)
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md)
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md)
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md)
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md)

## See Also

### Media output

- [AVPlayerVideoOutput](avplayervideooutput.md): An object that receives video data from a player object.
- [AVVideoOutputSpecification](avvideooutputspecification.md): An object that specifies the pixel buffer attributes and tag collections handled by a player video output.
- [CMTagCollectionCreateWithVideoOutputPreset](cmtagcollectioncreatewithvideooutputpreset.md): Creates a collection with the required tags to describe the specified video output requirements.
- [CMTagCollectionVideoOutputPreset](cmtagcollectionvideooutputpreset.md): Constants that indicate the type of video content to output.
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
