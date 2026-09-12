> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/view](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/view)

# view (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The view containing the movie content and controls.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var view: UIView! { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the view used for presenting the video content. This view incorporates all the background, content, and controls needed to display movies. You can incorporate this view into your own view hierarchies or present it by itself using a view controller.

To embed the view into your own view hierarchies, add it as a subview to one of your existing views. A good place to do this is in the [loadView()](../../uikit/uiviewcontroller/loadview%28%29.md) or [viewDidLoad()](../../uikit/uiviewcontroller/viewdidload%28%29.md) method of the custom view controller that presents your view hierarchy. You are free to change the view’s [frame](../../uikit/uiview/frame.md) rectangle to accommodate the space available in your view hierarchy. The movie player uses the value in the [scalingMode](scalingmode.md) property to scale the movie content to match the frame you specify.

If you want to present the view by itself—that is, without embedding it in an existing view hierarchy—you can use an instance of the [MPMoviePlayerViewController](../mpmovieplayerviewcontroller.md) class to manage the presentation of the view. That class works directly with the movie player controller to present the view by itself.

You can add subviews to the view in this property. You might do this in cases where you want to display custom playback controls or add other custom content that is relevant to your app.

## See Also

### Accessing the view

- [backgroundView](backgroundview.md): Deprecated. A customizable view that is displayed behind the movie content.

# view (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The view containing the movie content and controls.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * view;
```

<a id="Discussion"></a>

## Discussion

This property contains the view used for presenting the video content. This view incorporates all the background, content, and controls needed to display movies. You can incorporate this view into your own view hierarchies or present it by itself using a view controller.

To embed the view into your own view hierarchies, add it as a subview to one of your existing views. A good place to do this is in the [loadView](../../uikit/uiviewcontroller/loadview%28%29.md) or [viewDidLoad](../../uikit/uiviewcontroller/viewdidload%28%29.md) method of the custom view controller that presents your view hierarchy. You are free to change the view’s [frame](../../uikit/uiview/frame.md) rectangle to accommodate the space available in your view hierarchy. The movie player uses the value in the [scalingMode](scalingmode.md) property to scale the movie content to match the frame you specify.

If you want to present the view by itself—that is, without embedding it in an existing view hierarchy—you can use an instance of the [MPMoviePlayerViewController](../mpmovieplayerviewcontroller.md) class to manage the presentation of the view. That class works directly with the movie player controller to present the view by itself.

You can add subviews to the view in this property. You might do this in cases where you want to display custom playback controls or add other custom content that is relevant to your app.

## See Also

### Accessing the view

- [backgroundView](backgroundview.md): Deprecated. A customizable view that is displayed behind the movie content.
