> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkcreatewithactivecgdisplays(_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkcreatewithactivecgdisplays(_:))

# CVDisplayLinkCreateWithActiveCGDisplays(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link capable of being used with all active displays.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkCreateWithActiveCGDisplays(_ displayLinkOut: UnsafeMutablePointer<CVDisplayLink?>) -> CVReturn
```

## Parameters

- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

`CVDisplayLinkCreateWithActiveCGDisplays` determines the displays actively used by the host computer and creates a display link compatible with all of them. For most applications, calling this function is the most convenient way to create a display link. After creation, you can assign the display link to any active display by calling the [CVDisplayLinkSetCurrentCGDisplay(\_:\_:)](cvdisplaylinksetcurrentcgdisplay%28____%29.md) function.

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay(\_:\_:)](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithCGDisplays(\_:\_:\_:)](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask(\_:\_:)](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.

# CVDisplayLinkCreateWithActiveCGDisplays (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Creates a display link capable of being used with all active displays.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkCreateWithActiveCGDisplays(CVDisplayLinkRef*displayLinkOut);
```

## Parameters

- `displayLinkOut`: On output, `displayLinkOut` points to the newly created display link.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

`CVDisplayLinkCreateWithActiveCGDisplays` determines the displays actively used by the host computer and creates a display link compatible with all of them. For most applications, calling this function is the most convenient way to create a display link. After creation, you can assign the display link to any active display by calling the [CVDisplayLinkSetCurrentCGDisplay](cvdisplaylinksetcurrentcgdisplay%28____%29.md) function.

## See Also

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithCGDisplays](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.
