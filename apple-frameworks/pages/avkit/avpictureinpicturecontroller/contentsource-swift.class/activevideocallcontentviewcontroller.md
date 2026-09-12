> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallcontentviewcontroller](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallcontentviewcontroller)

# activeVideoCallContentViewController (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view controller that presents the video call content.

## Declaration

```swift
var activeVideoCallContentViewController: AVPictureInPictureVideoCallViewController { get }
```

<a id="Discussion"></a>

## Discussion

This view controller may indicate a preferred content size which influences the aspect ratio and the size of the Picture in Picture window. The view it presents isn’t interactive and doesn’t receive touches or user input.

When this view controller’s appearance methods indicate that its view is on screen, place the video call content view in the controller’s view hierarchy. The content must fill the bounds of the view controller’s view.

Although apps can choose to move content from their source view to this view controller, it’s also valid to show different views, as long as they represent the same video call.

## See Also

### Accessing the Active Call Presentation

- [activeVideoCallSourceView](activevideocallsourceview.md): The view that contains the video content of the call.
- [AVPictureInPictureVideoCallViewController](../../avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.

# activeVideoCallContentViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view controller that presents the video call content.

## Declaration

```objectivec
@property (nonatomic, readonly) AVPictureInPictureVideoCallViewController * activeVideoCallContentViewController;
```

<a id="Discussion"></a>

## Discussion

This view controller may indicate a preferred content size which influences the aspect ratio and the size of the Picture in Picture window. The view it presents isn’t interactive and doesn’t receive touches or user input.

When this view controller’s appearance methods indicate that its view is on screen, place the video call content view in the controller’s view hierarchy. The content must fill the bounds of the view controller’s view.

Although apps can choose to move content from their source view to this view controller, it’s also valid to show different views, as long as they represent the same video call.

## See Also

### Accessing the Active Call Presentation

- [activeVideoCallSourceView](activevideocallsourceview.md): The view that contains the video content of the call.
- [AVPictureInPictureVideoCallViewController](../../avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.
