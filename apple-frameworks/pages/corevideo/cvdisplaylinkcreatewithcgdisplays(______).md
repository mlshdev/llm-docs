> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkcreatewithcgdisplays(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkcreatewithcgdisplays(_:_:_:))

# CVDisplayLinkCreateWithCGDisplays(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link for an array of displays.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkCreateWithCGDisplays(_ displayArray: UnsafeMutablePointer<CGDirectDisplayID>, _ count: CFIndex, _ displayLinkOut: UnsafeMutablePointer<CVDisplayLink?>) -> CVReturn
```

## Parameters

- `displayArray`: A pointer to an array of Core Graphics display IDs representing all the active monitors you want to use with this display link.
- `count`: The number of displays in the display array.
- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use this call to create a display link for a set of displays identified by the Core Graphics display IDs. For more information on the display identifier type, see [CGDirectDisplayID](../coregraphics/cgdirectdisplayid.md).

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay(\_:\_:)](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithActiveCGDisplays(\_:)](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask(\_:\_:)](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.

# CVDisplayLinkCreateWithCGDisplays (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link for an array of displays.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkCreateWithCGDisplays(CGDirectDisplayID *displayArray, CFIndex count, CVDisplayLinkRef*displayLinkOut);
```

## Parameters

- `displayArray`: A pointer to an array of Core Graphics display IDs representing all the active monitors you want to use with this display link.
- `count`: The number of displays in the display array.
- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use this call to create a display link for a set of displays identified by the Core Graphics display IDs. For more information on the display identifier type, see [CGDirectDisplayID](../coregraphics/cgdirectdisplayid.md).

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithActiveCGDisplays](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.
