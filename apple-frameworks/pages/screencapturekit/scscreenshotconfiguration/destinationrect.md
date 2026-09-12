> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotconfiguration/destinationrect](https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/destinationrect)

# destinationRect (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A rectangle that specifies whether to output screenshots in a subset of the output image.

## Declaration

```swift
var destinationRect: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

If you don’t specify a destination rectangle, the system uses the full dimensions of the output surface. The rectangle is specified in pixels in the display’s coordinate system.

> **Note**

> The system doesn’t reference this value when capturing a single window because it draws the window into the output’s full bounds.

# destinationRect (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A rectangle that specifies whether to output screenshots in a subset of the output image.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect destinationRect;
```

<a id="discussion"></a>

## Discussion

If you don’t specify a destination rectangle, the system uses the full dimensions of the output surface. The rectangle is specified in pixels in the display’s coordinate system.

> **Note**

> The system doesn’t reference this value when capturing a single window because it draws the window into the output’s full bounds.
