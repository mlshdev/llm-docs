> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkcreatewithcgdisplay(_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkcreatewithcgdisplay(_:_:))

# CVDisplayLinkCreateWithCGDisplay(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link for a single display.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkCreateWithCGDisplay(_ displayID: CGDirectDisplayID, _ displayLinkOut: UnsafeMutablePointer<CVDisplayLink?>) -> CVReturn
```

## Parameters

- `displayID`: The Core Graphics ID of the target display.
- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use this call to create a display link for a single display. For more information on the display identifier type, see [CGDirectDisplayID](../coregraphics/cgdirectdisplayid.md).

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplays(\_:\_:\_:)](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithActiveCGDisplays(\_:)](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask(\_:\_:)](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.

# CVDisplayLinkCreateWithCGDisplay (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link for a single display.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkCreateWithCGDisplay(CGDirectDisplayID displayID, CVDisplayLinkRef*displayLinkOut);
```

## Parameters

- `displayID`: The Core Graphics ID of the target display.
- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use this call to create a display link for a single display. For more information on the display identifier type, see [CGDirectDisplayID](../coregraphics/cgdirectdisplayid.md).

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplays](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithActiveCGDisplays](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.
