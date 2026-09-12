> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkoutputcallback](https://developer.apple.com/documentation/corevideo/cvdisplaylinkoutputcallback)

# CVDisplayLinkOutputCallback (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

A type for a display link callback function that the system invokes when it’s time for the app to output a video frame.

## Declaration

```swift
typealias CVDisplayLinkOutputCallback = (CVDisplayLink, UnsafePointer<CVTimeStamp>, UnsafePointer<CVTimeStamp>, CVOptionFlags, UnsafeMutablePointer<CVOptionFlags>, UnsafeMutableRawPointer?) -> CVReturn
```

## Parameters

- `displayLink`: A display link that requests a frame.
- `inNow`: A pointer to the current time.
- `inOutputTime`: A pointer to the display time for a frame.
- `flagsIn`: Currently unused. Pass 0.
- `flagsOut`: Currently unused. Pass 0.
- `displayLinkContext`: A pointer to app-defined data.

<a id="Discussion"></a>

## Discussion

Your app must register a callback function for the system to invoke with the data necessary to process and output a frame of video. Your callback must retrieve the frame with the timestamp that the `inOutputTime` parameter specifies, manipulate it if you require (for example, apply color correction or map onto a surface), and output it to the display.

## See Also

### Callbacks

- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

# CVDisplayLinkOutputCallback (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

A type for a display link callback function that the system invokes when it’s time for the app to output a video frame.

## Declaration

```objectivec
typedef int (*)(struct __CVDisplayLink *, const CVTimeStamp *, const CVTimeStamp *, unsigned long long, unsigned long long *, void *) CVDisplayLinkOutputCallback;
```

## Parameters

- `displayLink`: A display link that requests a frame.
- `inNow`: A pointer to the current time.
- `inOutputTime`: A pointer to the display time for a frame.
- `flagsIn`: Currently unused. Pass 0.
- `flagsOut`: Currently unused. Pass 0.
- `displayLinkContext`: A pointer to app-defined data.

<a id="Discussion"></a>

## Discussion

Your app must register a callback function for the system to invoke with the data necessary to process and output a frame of video. Your callback must retrieve the frame with the timestamp that the `inOutputTime` parameter specifies, manipulate it if you require (for example, apply color correction or map onto a surface), and output it to the display.

## See Also

### Callbacks

- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)
