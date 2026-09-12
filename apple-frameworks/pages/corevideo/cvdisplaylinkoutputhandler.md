> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkoutputhandler](https://developer.apple.com/documentation/corevideo/cvdisplaylinkoutputhandler)

# CVDisplayLinkOutputHandler (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```swift
typealias CVDisplayLinkOutputHandler = @Sendable (CVDisplayLink, UnsafePointer<CVTimeStamp>, UnsafePointer<CVTimeStamp>, CVOptionFlags, UnsafeMutablePointer<CVOptionFlags>) -> CVReturn
```

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay(\_:\_:)](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(\_:\_:\_:)](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback(\_:\_:\_:)](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler(\_:\_:)](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.

# CVDisplayLinkOutputHandler (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
typedef int (^)(struct __CVDisplayLink *, const CVTimeStamp *, const CVTimeStamp *, unsigned long long, unsigned long long *) CVDisplayLinkOutputHandler;
```

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
