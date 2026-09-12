> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/minimumrefreshinterval](https://developer.apple.com/documentation/appkit/nsscreen/minimumrefreshinterval)

# minimumRefreshInterval (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The shortest refresh interval that the screen supports.

## Declaration

```swift
var minimumRefreshInterval: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This interval represents the minimum amount of time, in seconds, your app has to generate new frames. It corresponds to the highest refresh rate of the display.

## See Also

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
- [lastDisplayUpdateTimestamp](lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.

# minimumRefreshInterval (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The shortest refresh interval that the screen supports.

## Declaration

```objectivec
@property (readonly) NSTimeInterval minimumRefreshInterval;
```

<a id="Discussion"></a>

## Discussion

This interval represents the minimum amount of time, in seconds, your app has to generate new frames. It corresponds to the highest refresh rate of the display.

## See Also

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
- [lastDisplayUpdateTimestamp](lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.
