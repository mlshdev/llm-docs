> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinktranslatetime(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinktranslatetime(_:_:_:))

# CVDisplayLinkTranslateTime(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Translates the time in the display link’s time base from one representation to another.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkTranslateTime(_ displayLink: CVDisplayLink, _ inTime: UnsafePointer<CVTimeStamp>, _ outTime: UnsafeMutablePointer<CVTimeStamp>) -> CVReturn
```

## Parameters

- `displayLink`: The display link whose time base should be used to do the translation.
- `inTime`: A pointer to a `CVTimeStamp` structure containing the source time to translate.
- `outTime`: A pointer to a `CVTimeStamp` structure into which the target time is written. Before calling, you must set the version field (currently `0`) to indicate which version of the structure you want. You should also set the `flags` field to specify which representations to translate to.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Note that the display link has to be running for this call to succeed.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay(\_:)](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime(\_:\_:)](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency(\_:)](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning(\_:)](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
- [CVDisplayLinkGetTypeID()](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.

# CVDisplayLinkTranslateTime (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Translates the time in the display link’s time base from one representation to another.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkTranslateTime(CVDisplayLinkRef displayLink, const CVTimeStamp *inTime, CVTimeStamp *outTime);
```

## Parameters

- `displayLink`: The display link whose time base should be used to do the translation.
- `inTime`: A pointer to a `CVTimeStamp` structure containing the source time to translate.
- `outTime`: A pointer to a `CVTimeStamp` structure into which the target time is written. Before calling, you must set the version field (currently `0`) to indicate which version of the structure you want. You should also set the `flags` field to specify which representations to translate to.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Note that the display link has to be running for this call to succeed.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
- [CVDisplayLinkGetTypeID](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.
