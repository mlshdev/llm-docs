> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutputpushdelegate](https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpushdelegate)

# AVPlayerItemOutputPushDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines the methods to implement to respond to changes in the media data sequence.

## Declaration

```swift
protocol AVPlayerItemOutputPushDelegate : NSObjectProtocol, Sendable
```

## Topics

### Flushing sequence state

- [outputSequenceWasFlushed(\_:)](avplayeritemoutputpushdelegate/outputsequencewasflushed%28__%29.md): Tells the delegate that the output is starting a new sequence of media data.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [AVPlayerItemLegibleOutputPushDelegate](avplayeritemlegibleoutputpushdelegate.md)
- [AVPlayerItemMetadataOutputPushDelegate](avplayeritemmetadataoutputpushdelegate.md)
- [AVPlayerItemRenderedLegibleOutputPushDelegate](avplayeritemrenderedlegibleoutputpushdelegate.md)

## See Also

### Media output

- [AVPlayerVideoOutput](avplayervideooutput.md): An object that receives video data from a player object.
- [AVVideoOutputSpecification](avvideooutputspecification.md): An object that specifies the pixel buffer attributes and tag collections handled by a player video output.
- [AVPlayerItemOutput](avplayeritemoutput.md): An abstract class that defines the common interface to output media data from a player item.
- [AVPlayerItemVideoOutput](avplayeritemvideooutput.md): An object that outputs video frames from a player item.
- [AVPlayerItemLegibleOutput](avplayeritemlegibleoutput.md): An object that vends attributed strings for media with a legible characteristic.
- [AVPlayerItemRenderedLegibleOutput](avplayeritemrenderedlegibleoutput.md): A player item output that vends media with a legible characteristic as rendered pixel buffers.
- [AVRenderedCaptionImage](avrenderedcaptionimage.md): An object that provides a rendered pixel buffer and its position in pixels.
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).

# AVPlayerItemOutputPushDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines the methods to implement to respond to changes in the media data sequence.

## Declaration

```objectivec
@protocol AVPlayerItemOutputPushDelegate <NSObject>
```

## Topics

### Flushing sequence state

- [outputSequenceWasFlushed:](avplayeritemoutputpushdelegate/outputsequencewasflushed%28__%29.md): Tells the delegate that the output is starting a new sequence of media data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [AVPlayerItemLegibleOutputPushDelegate](avplayeritemlegibleoutputpushdelegate.md)
- [AVPlayerItemMetadataOutputPushDelegate](avplayeritemmetadataoutputpushdelegate.md)
- [AVPlayerItemRenderedLegibleOutputPushDelegate](avplayeritemrenderedlegibleoutputpushdelegate.md)

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
- [AVPlayerItemMetadataOutput](avplayeritemmetadataoutput.md): An object that vends collections of metadata items that a player item’s tracks carry.
- [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md): [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md) delivers `CMSampleBuffers` for [AVPlayerItem](avplayeritem.md) playback.
- [AVPlayerItemSampleBufferOutputConfiguration](avplayeritemsamplebufferoutputconfiguration.md): Configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputAudioConfiguration](avplayeritemsamplebufferoutputaudioconfiguration.md): Audio-specific configuration options specified when creating an [AVPlayerItemSampleBufferOutput](avplayeritemsamplebufferoutput.md).
- [AVPlayerItemSampleBufferOutputDelegate](avplayeritemsamplebufferoutputdelegate.md): Defines common delegate methods for objects participating in sample buffer output.
