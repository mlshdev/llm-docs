> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkgetcurrenttime(_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkgetcurrenttime(_:_:))

# CVDisplayLinkGetCurrentTime(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Retrieves the current (“now”) time of a given display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkGetCurrentTime(_ displayLink: CVDisplayLink, _ outTime: UnsafeMutablePointer<CVTimeStamp>) -> CVReturn
```

## Parameters

- `displayLink`: The display link whose current time you want to obtain.
- `outTime`: A pointer to a `CVTimeStamp` structure. Note that you must set the version in the structure (currently 0) before calling to indicate which version of the timestamp structure you want.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

You use this call to obtain the timestamp of the frame that is currently being displayed.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay(\_:)](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkTranslateTime(\_:\_:\_:)](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency(\_:)](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning(\_:)](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
- [CVDisplayLinkGetTypeID()](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.

# CVDisplayLinkGetCurrentTime (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Retrieves the current (“now”) time of a given display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkGetCurrentTime(CVDisplayLinkRef displayLink, CVTimeStamp *outTime);
```

## Parameters

- `displayLink`: The display link whose current time you want to obtain.
- `outTime`: A pointer to a `CVTimeStamp` structure. Note that you must set the version in the structure (currently 0) before calling to indicate which version of the timestamp structure you want.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

You use this call to obtain the timestamp of the frame that is currently being displayed.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkTranslateTime](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
- [CVDisplayLinkGetTypeID](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.
