> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkisrunning(_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkisrunning(_:))

# CVDisplayLinkIsRunning(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Indicates whether a given display link is running.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkIsRunning(_ displayLink: CVDisplayLink) -> Bool
```

## Parameters

- `displayLink`: The display link whose run state you want to determine.

<a id="return-value"></a>

## Return Value

Returns `true` if the display link is running, `false` otherwise.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay(\_:)](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime(\_:\_:)](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkTranslateTime(\_:\_:\_:)](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency(\_:)](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkGetTypeID()](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.

# CVDisplayLinkIsRunning (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Indicates whether a given display link is running.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern Boolean CVDisplayLinkIsRunning(CVDisplayLinkRef displayLink);
```

## Parameters

- `displayLink`: The display link whose run state you want to determine.

<a id="return-value"></a>

## Return Value

Returns `true` if the display link is running, `false` otherwise.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkTranslateTime](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkGetTypeID](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.
