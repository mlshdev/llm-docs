> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinksetcurrentcgdisplayfromopenglcontext(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinksetcurrentcgdisplayfromopenglcontext(_:_:_:))

# CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Selects the display link most optimal for the current renderer of an OpenGL context.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(_ displayLink: CVDisplayLink, _ cglContext: CGLContextObj, _ cglPixelFormat: CGLPixelFormatObj) -> CVReturn
```

## Parameters

- `displayLink`: The display link whose current display is to be set.
- `cglContext`: The OpenGL context to retrieve the current renderer from.
- `cglPixelFormat`: The OpenGL pixel format used to create the passed-in OpenGL context.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function chooses the display with the lowest refresh rate.

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay(\_:\_:)](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetOutputCallback(\_:\_:\_:)](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler(\_:\_:)](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

# CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Selects the display link most optimal for the current renderer of an OpenGL context.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(CVDisplayLinkRef displayLink, CGLContextObj cglContext, CGLPixelFormatObj cglPixelFormat);
```

## Parameters

- `displayLink`: The display link whose current display is to be set.
- `cglContext`: The OpenGL context to retrieve the current renderer from.
- `cglPixelFormat`: The OpenGL pixel format used to create the passed-in OpenGL context.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function chooses the display with the lowest refresh rate.

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetOutputCallback](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)
