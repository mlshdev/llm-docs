> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkgettypeid()](https://developer.apple.com/documentation/corevideo/cvdisplaylinkgettypeid())

# CVDisplayLinkGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Obtains the Core Foundation ID for the display link data type.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this type.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay(\_:)](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime(\_:\_:)](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkTranslateTime(\_:\_:\_:)](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency(\_:)](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning(\_:)](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.

# CVDisplayLinkGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Obtains the Core Foundation ID for the display link data type.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CFTypeID CVDisplayLinkGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation ID for this type.

## See Also

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkTranslateTime](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
