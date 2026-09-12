> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/appliespreferreddisplaycriteriaautomatically](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/appliespreferreddisplaycriteriaautomatically)

# appliesPreferredDisplayCriteriaAutomatically (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.

## Declaration

```swift
var appliesPreferredDisplayCriteriaAutomatically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property value is `true`, the player uses the preferred display criteria of the video asset when playing the content in fullscreen. The display criteria is reset to the display’s default criteria when full-screen playback ends. Don’t change this value during full-screen presentation unless you’ve disposed of the player or player item.

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [contentOverlayView](contentoverlayview.md): A view that displays between the video content and the playback controls.
- [videoGravity](videogravity.md): A string that specifies how the video displays within the bounds of the view controller’s view.
- [videoBounds](videobounds.md): The size and position of the video image within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.

# appliesPreferredDisplayCriteriaAutomatically (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A Boolean value that indicates whether the view controller automatically sets the screen’s display criteria to match that of the currently playing asset.

## Declaration

```objectivec
@property (nonatomic) BOOL appliesPreferredDisplayCriteriaAutomatically;
```

<a id="Discussion"></a>

## Discussion

If this property value is `true`, the player uses the preferred display criteria of the video asset when playing the content in fullscreen. The display criteria is reset to the display’s default criteria when full-screen playback ends. Don’t change this value during full-screen presentation unless you’ve disposed of the player or player item.

## See Also

### Configuring presentation

- [showsPlaybackControls](showsplaybackcontrols.md): A Boolean value that indicates whether the player view controller shows playback controls.
- [contentOverlayView](contentoverlayview.md): A view that displays between the video content and the playback controls.
- [videoGravity](videogravity.md): A string that specifies how the video displays within the bounds of the view controller’s view.
- [videoBounds](videobounds.md): The size and position of the video image within the bounds of the view controller’s view.
- [showsTimecodes](showstimecodes.md): A Boolean value that determines whether the player view displays timecodes, if available.
