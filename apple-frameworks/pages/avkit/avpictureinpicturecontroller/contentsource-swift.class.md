> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class)

# AVPictureInPictureController.ContentSource (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents the source of the content to present in Picture in Picture.

## Declaration

```swift
class ContentSource
```

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)

<a id="overview"></a>

## Overview

The system supports displaying content from an [AVPlayerLayer](../../avfoundation/avplayerlayer.md) or [AVSampleBufferDisplayLayer](../../avfoundation/avsamplebufferdisplaylayer.md) in a Picture in Picture window. Use an instance of this class to describe the source of your app’s content.

## Topics

### Creating a Content Source

- [init(playerLayer:)](contentsource-swift.class/init%28playerlayer_%29.md): Creates a content source with a player layer.
- [init(sampleBufferDisplayLayer:playbackDelegate:)](contentsource-swift.class/init%28samplebufferdisplaylayer_playbackdelegate_%29.md): Creates a content source with a sample buffer display layer.
- [init(activeVideoCallSourceView:contentViewController:)](contentsource-swift.class/init%28activevideocallsourceview_contentviewcontroller_%29.md): Creates a content source with an active video call.

### Accessing the Presentation Layer

- [playerLayer](contentsource-swift.class/playerlayer.md): The presenting player layer.
- [sampleBufferDisplayLayer](contentsource-swift.class/samplebufferdisplaylayer.md): The presenting sample buffer display layer.

### Accessing the Active Call Presentation

- [activeVideoCallSourceView](contentsource-swift.class/activevideocallsourceview.md): The view that contains the video content of the call.
- [activeVideoCallContentViewController](contentsource-swift.class/activevideocallcontentviewcontroller.md): The view controller that presents the video call content.
- [AVPictureInPictureVideoCallViewController](../avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.

### Configuring the Delegate

- [sampleBufferPlaybackDelegate](contentsource-swift.class/samplebufferplaybackdelegate.md): A delegate object that responds to sample buffer playback events.
- [AVPictureInPictureSampleBufferPlaybackDelegate](../avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.

### Invalidating State

- [invalidatePlaybackState()](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Content Source

- [contentSource](contentsource-swift.property.md): The source of the controller’s content.

# AVPictureInPictureControllerContentSource (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents the source of the content to present in Picture in Picture.

## Declaration

```objectivec
@interface AVPictureInPictureControllerContentSource : NSObject
```

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)

<a id="overview"></a>

## Overview

The system supports displaying content from an [AVPlayerLayer](../../avfoundation/avplayerlayer.md) or [AVSampleBufferDisplayLayer](../../avfoundation/avsamplebufferdisplaylayer.md) in a Picture in Picture window. Use an instance of this class to describe the source of your app’s content.

## Topics

### Creating a Content Source

- [initWithPlayerLayer:](contentsource-swift.class/init%28playerlayer_%29.md): Creates a content source with a player layer.
- [initWithSampleBufferDisplayLayer:playbackDelegate:](contentsource-swift.class/init%28samplebufferdisplaylayer_playbackdelegate_%29.md): Creates a content source with a sample buffer display layer.
- [initWithActiveVideoCallSourceView:contentViewController:](contentsource-swift.class/init%28activevideocallsourceview_contentviewcontroller_%29.md): Creates a content source with an active video call.

### Accessing the Presentation Layer

- [playerLayer](contentsource-swift.class/playerlayer.md): The presenting player layer.
- [sampleBufferDisplayLayer](contentsource-swift.class/samplebufferdisplaylayer.md): The presenting sample buffer display layer.

### Accessing the Active Call Presentation

- [activeVideoCallSourceView](contentsource-swift.class/activevideocallsourceview.md): The view that contains the video content of the call.
- [activeVideoCallContentViewController](contentsource-swift.class/activevideocallcontentviewcontroller.md): The view controller that presents the video call content.
- [AVPictureInPictureVideoCallViewController](../avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.

### Configuring the Delegate

- [sampleBufferPlaybackDelegate](contentsource-swift.class/samplebufferplaybackdelegate.md): A delegate object that responds to sample buffer playback events.
- [AVPictureInPictureSampleBufferPlaybackDelegate](../avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.

### Invalidating State

- [invalidatePlaybackState](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Configuring the Content Source

- [contentSource](contentsource-swift.property.md): The source of the controller’s content.
