> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinksetcurrentcgdisplay(_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinksetcurrentcgdisplay(_:_:))

# CVDisplayLinkSetCurrentCGDisplay(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Sets the current display of a display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkSetCurrentCGDisplay(_ displayLink: CVDisplayLink, _ displayID: CGDirectDisplayID) -> CVReturn
```

## Parameters

- `displayLink`: The display link whose display you want to set.
- `displayID`: The ID of the display to be set.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Although it is safe to call this function on a running display link, a discontinuity may appear in the video timestamp.

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(\_:\_:\_:)](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback(\_:\_:\_:)](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler(\_:\_:)](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

# CVDisplayLinkSetCurrentCGDisplay (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Sets the current display of a display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkSetCurrentCGDisplay(CVDisplayLinkRef displayLink, CGDirectDisplayID displayID);
```

## Parameters

- `displayLink`: The display link whose display you want to set.
- `displayID`: The ID of the display to be set.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Although it is safe to call this function on a running display link, a discontinuity may appear in the video timestamp.

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)
