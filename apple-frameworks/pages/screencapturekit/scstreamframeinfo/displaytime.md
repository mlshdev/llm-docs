> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamframeinfo/displaytime](https://developer.apple.com/documentation/screencapturekit/scstreamframeinfo/displaytime)

# displayTime (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A key to retrieve the display time of a video frame.

## Declaration

```swift
static let displayTime: SCStreamFrameInfo
```

<a id="discussion"></a>

## Discussion

For a frame event, this value represents the time the window server displays the frame.

## See Also

### Frame information constants

- [status](status.md): A key to retrieve the status of a video frame.
- [scaleFactor](scalefactor.md): A key to retrieve the scale factor of a video frame.
- [contentScale](contentscale.md): A key to retrieve the content scale of a video frame.
- [contentRect](contentrect.md): A key to retrieve the content rectangle of a video frame.
- [boundingRect](boundingrect.md): A key to retrieve the bounding rectangle for a video frame.
- [screenRect](screenrect.md): A key to retrieve the onscreen location of captured content.
- [dirtyRects](dirtyrects.md): A key to retrieve the areas of a video frame that contain changes.
- [presenterOverlayContentRect](presenteroverlaycontentrect.md)

# SCStreamFrameInfoDisplayTime (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A key to retrieve the display time of a video frame.

## Declaration

```objectivec
extern SCStreamFrameInfo const SCStreamFrameInfoDisplayTime;
```

<a id="discussion"></a>

## Discussion

For a frame event, this value represents the time the window server displays the frame.

## See Also

### Frame information constants

- [SCStreamFrameInfoStatus](status.md): A key to retrieve the status of a video frame.
- [SCStreamFrameInfoScaleFactor](scalefactor.md): A key to retrieve the scale factor of a video frame.
- [SCStreamFrameInfoContentScale](contentscale.md): A key to retrieve the content scale of a video frame.
- [SCStreamFrameInfoContentRect](contentrect.md): A key to retrieve the content rectangle of a video frame.
- [SCStreamFrameInfoBoundingRect](boundingrect.md): A key to retrieve the bounding rectangle for a video frame.
- [SCStreamFrameInfoScreenRect](screenrect.md): A key to retrieve the onscreen location of captured content.
- [SCStreamFrameInfoDirtyRects](dirtyrects.md): A key to retrieve the areas of a video frame that contain changes.
- [SCStreamFrameInfoPresenterOverlayContentRect](presenteroverlaycontentrect.md)
