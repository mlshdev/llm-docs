> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamframeinfo/boundingrect](https://developer.apple.com/documentation/screencapturekit/scstreamframeinfo/boundingrect)

# boundingRect (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A key to retrieve the bounding rectangle for a video frame.

## Declaration

```swift
static let boundingRect: SCStreamFrameInfo
```

<a id="discussion"></a>

## Discussion

The bounding rectangle provided for a frame is the minimum bounding box for containing all captured windows in the frame.

## See Also

### Frame information constants

- [status](status.md): A key to retrieve the status of a video frame.
- [displayTime](displaytime.md): A key to retrieve the display time of a video frame.
- [scaleFactor](scalefactor.md): A key to retrieve the scale factor of a video frame.
- [contentScale](contentscale.md): A key to retrieve the content scale of a video frame.
- [contentRect](contentrect.md): A key to retrieve the content rectangle of a video frame.
- [screenRect](screenrect.md): A key to retrieve the onscreen location of captured content.
- [dirtyRects](dirtyrects.md): A key to retrieve the areas of a video frame that contain changes.
- [presenterOverlayContentRect](presenteroverlaycontentrect.md)

# SCStreamFrameInfoBoundingRect (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

A key to retrieve the bounding rectangle for a video frame.

## Declaration

```objectivec
extern SCStreamFrameInfo const SCStreamFrameInfoBoundingRect;
```

<a id="discussion"></a>

## Discussion

The bounding rectangle provided for a frame is the minimum bounding box for containing all captured windows in the frame.

## See Also

### Frame information constants

- [SCStreamFrameInfoStatus](status.md): A key to retrieve the status of a video frame.
- [SCStreamFrameInfoDisplayTime](displaytime.md): A key to retrieve the display time of a video frame.
- [SCStreamFrameInfoScaleFactor](scalefactor.md): A key to retrieve the scale factor of a video frame.
- [SCStreamFrameInfoContentScale](contentscale.md): A key to retrieve the content scale of a video frame.
- [SCStreamFrameInfoContentRect](contentrect.md): A key to retrieve the content rectangle of a video frame.
- [SCStreamFrameInfoScreenRect](screenrect.md): A key to retrieve the onscreen location of captured content.
- [SCStreamFrameInfoDirtyRects](dirtyrects.md): A key to retrieve the areas of a video frame that contain changes.
- [SCStreamFrameInfoPresenterOverlayContentRect](presenteroverlaycontentrect.md)
