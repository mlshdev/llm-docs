> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.property](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.property)

# contentSource (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The source of the controller’s content.

## Declaration

```swift
var contentSource: AVPictureInPictureController.ContentSource? { get set }
```

<a id="Discussion"></a>

## Discussion

You can change a content source while a Picture in Picture session is active, but only if the new content source is ready for display. If it isn’t ready, the session ends immediately.

If your app uses [AVPlayerLayer](../../avfoundation/avplayerlayer.md), verify that the value of its [isReadyForDisplay](../../avfoundation/avplayerlayer/isreadyfordisplay.md) property is `true` before setting it as a content source.

## See Also

### Configuring the Content Source

- [AVPictureInPictureController.ContentSource](contentsource-swift.class.md): An object that represents the source of the content to present in Picture in Picture.

# contentSource (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The source of the controller’s content.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) AVPictureInPictureControllerContentSource * contentSource;
```

<a id="Discussion"></a>

## Discussion

You can change a content source while a Picture in Picture session is active, but only if the new content source is ready for display. If it isn’t ready, the session ends immediately.

If your app uses [AVPlayerLayer](../../avfoundation/avplayerlayer.md), verify that the value of its [readyForDisplay](../../avfoundation/avplayerlayer/isreadyfordisplay.md) property is `true` before setting it as a content source.

## See Also

### Configuring the Content Source

- [AVPictureInPictureControllerContentSource](contentsource-swift.class.md): An object that represents the source of the content to present in Picture in Picture.
