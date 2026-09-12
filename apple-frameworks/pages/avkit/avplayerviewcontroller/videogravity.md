> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/videogravity](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/videogravity)

# videoGravity (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A string that specifies how the video displays within the bounds of the view controller’s view.

## Declaration

```swift
var videoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

The player view controller supports the following video gravity values: [resizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md), [resizeAspectFill](../../avfoundation/avlayervideogravity/resizeaspectfill.md), and [resize](../../avfoundation/avlayervideogravity/resize.md).

The default value is [resizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md).

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [contentOverlayView](contentoverlayview.md): A view that displays between the video content and the playback controls.
- [videoBounds](videobounds.md): The size and position of the video image within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [appliesPreferredDisplayCriteriaAutomatically](appliespreferreddisplaycriteriaautomatically.md): A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.

# videoGravity (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A string that specifies how the video displays within the bounds of the view controller’s view.

## Declaration

```objectivec
@property (nonatomic, copy) AVLayerVideoGravity videoGravity;
```

<a id="Discussion"></a>

## Discussion

The player view controller supports the following video gravity values: [AVLayerVideoGravityResizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md), [AVLayerVideoGravityResizeAspectFill](../../avfoundation/avlayervideogravity/resizeaspectfill.md), and [AVLayerVideoGravityResize](../../avfoundation/avlayervideogravity/resize.md).

The default value is [AVLayerVideoGravityResizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md).

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [contentOverlayView](contentoverlayview.md): A view that displays between the video content and the playback controls.
- [videoBounds](videobounds.md): The size and position of the video image within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [appliesPreferredDisplayCriteriaAutomatically](appliespreferreddisplaycriteriaautomatically.md): A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.
