> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallsourceview](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallsourceview)

# activeVideoCallSourceView (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view that contains the video content of the call.

## Declaration

```swift
weak var activeVideoCallSourceView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

The controller uses this view’s layout frame and visibility to determine whether or not Picture in Picture begins automatically when the app moves to the background. The view’s layout frame also influences the animation when entering and exiting Picture in Picture.

## See Also

### Accessing the Active Call Presentation

- [activeVideoCallContentViewController](activevideocallcontentviewcontroller.md): The view controller that presents the video call content.
- [AVPictureInPictureVideoCallViewController](../../avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.

# activeVideoCallSourceView (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view that contains the video content of the call.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) UIView * activeVideoCallSourceView;
```

<a id="Discussion"></a>

## Discussion

The controller uses this view’s layout frame and visibility to determine whether or not Picture in Picture begins automatically when the app moves to the background. The view’s layout frame also influences the animation when entering and exiting Picture in Picture.

## See Also

### Accessing the Active Call Presentation

- [activeVideoCallContentViewController](activevideocallcontentviewcontroller.md): The view controller that presents the video call content.
- [AVPictureInPictureVideoCallViewController](../../avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.
