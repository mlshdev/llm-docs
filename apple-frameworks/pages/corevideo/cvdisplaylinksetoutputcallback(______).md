> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinksetoutputcallback(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinksetoutputcallback(_:_:_:))

# CVDisplayLinkSetOutputCallback(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Sets the renderer output callback function.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkSetOutputCallback(_ displayLink: CVDisplayLink, _ callback: CVDisplayLinkOutputCallback?, _ userInfo: UnsafeMutableRawPointer?) -> CVReturn
```

## Parameters

- `displayLink`: The display link whose output callback you want to set.
- `callback`: The callback function to set for this display link. See [CVDisplayLinkOutputCallback](cvdisplaylinkoutputcallback.md) for more information about implementing this function.
- `userInfo`: A pointer to user data.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

The display link invokes this callback whenever it wants you to output a frame.

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay(\_:\_:)](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(\_:\_:\_:)](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputHandler(\_:\_:)](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

# CVDisplayLinkSetOutputCallback (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Sets the renderer output callback function.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkSetOutputCallback(CVDisplayLinkRef displayLink, CVDisplayLinkOutputCallback callback, void *userInfo);
```

## Parameters

- `displayLink`: The display link whose output callback you want to set.
- `callback`: The callback function to set for this display link. See [CVDisplayLinkOutputCallback](cvdisplaylinkoutputcallback.md) for more information about implementing this function.
- `userInfo`: A pointer to user data.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

The display link invokes this callback whenever it wants you to output a frame.

## See Also

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputHandler](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)
