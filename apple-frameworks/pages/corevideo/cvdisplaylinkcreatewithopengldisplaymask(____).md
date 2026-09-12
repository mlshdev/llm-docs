> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkcreatewithopengldisplaymask(_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkcreatewithopengldisplaymask(_:_:))

# CVDisplayLinkCreateWithOpenGLDisplayMask(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link from an OpenGL display mask.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkCreateWithOpenGLDisplayMask(_ mask: CGOpenGLDisplayMask, _ displayLinkOut: UnsafeMutablePointer<CVDisplayLink?>) -> CVReturn
```

## Parameters

- `mask`: The OpenGL display mask describing the available displays.
- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Using this function avoids having to call the Core Graphics function `CGOpenGLDisplayMaskToDisplayID`.

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay(\_:\_:)](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithCGDisplays(\_:\_:\_:)](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithActiveCGDisplays(\_:)](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.

# CVDisplayLinkCreateWithOpenGLDisplayMask (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link from an OpenGL display mask.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkCreateWithOpenGLDisplayMask(CGOpenGLDisplayMask mask, CVDisplayLinkRef*displayLinkOut);
```

## Parameters

- `mask`: The OpenGL display mask describing the available displays.
- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Using this function avoids having to call the Core Graphics function `CGOpenGLDisplayMaskToDisplayID`.

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithCGDisplays](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithActiveCGDisplays](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
