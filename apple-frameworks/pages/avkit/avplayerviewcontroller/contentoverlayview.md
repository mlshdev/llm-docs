> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/contentoverlayview](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/contentoverlayview)

# contentOverlayView (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A view that displays between the video content and the playback controls.

## Declaration

```swift
var contentOverlayView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

Use the content overlay view to add noninteractive custom views, such as a logo or watermark, between the video content and the controls.

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [videoGravity](videogravity.md): A string that specifies how the video displays within the bounds of the view controller’s view.
- [videoBounds](videobounds.md): The size and position of the video image within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [appliesPreferredDisplayCriteriaAutomatically](appliespreferreddisplaycriteriaautomatically.md): A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.

# contentOverlayView (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A view that displays between the video content and the playback controls.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * contentOverlayView;
```

<a id="Discussion"></a>

## Discussion

Use the content overlay view to add noninteractive custom views, such as a logo or watermark, between the video content and the controls.

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [videoGravity](videogravity.md): A string that specifies how the video displays within the bounds of the view controller’s view.
- [videoBounds](videobounds.md): The size and position of the video image within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [appliesPreferredDisplayCriteriaAutomatically](appliespreferreddisplaycriteriaautomatically.md): A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.
