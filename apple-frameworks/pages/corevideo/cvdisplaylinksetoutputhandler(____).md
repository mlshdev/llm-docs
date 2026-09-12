> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinksetoutputhandler(_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinksetoutputhandler(_:_:))

# CVDisplayLinkSetOutputHandler(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkSetOutputHandler(_ displayLink: CVDisplayLink, _ handler: @escaping CVDisplayLinkOutputHandler) -> CVReturn
```

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay(\_:\_:)](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(\_:\_:\_:)](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback(\_:\_:\_:)](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

# CVDisplayLinkSetOutputHandler (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkSetOutputHandler(CVDisplayLinkRef displayLink, CVDisplayLinkOutputHandler handler);
```

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)
