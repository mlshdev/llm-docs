> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/videobounds](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/videobounds)

# videoBounds (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size and position of the video image within the bounds of the view controller’s view.

## Declaration

```swift
var videoBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The size and position of this rectangle depend on the aspect ratio of the media (like 16:9 or 4:3), the bounds of the player view controller’s view, and the view controller’s [videoGravity](videogravity.md).

This property is key-value observable.

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [contentOverlayView](contentoverlayview.md): A view that displays between the video content and the playback controls.
- [videoGravity](videogravity.md): A string that specifies how the video displays within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [appliesPreferredDisplayCriteriaAutomatically](appliespreferreddisplaycriteriaautomatically.md): A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.

# videoBounds (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size and position of the video image within the bounds of the view controller’s view.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect videoBounds;
```

<a id="Discussion"></a>

## Discussion

The size and position of this rectangle depend on the aspect ratio of the media (like 16:9 or 4:3), the bounds of the player view controller’s view, and the view controller’s [videoGravity](videogravity.md).

This property is key-value observable.

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [contentOverlayView](contentoverlayview.md): A view that displays between the video content and the playback controls.
- [videoGravity](videogravity.md): A string that specifies how the video displays within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
- [appliesPreferredDisplayCriteriaAutomatically](appliespreferreddisplaycriteriaautomatically.md): A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.
