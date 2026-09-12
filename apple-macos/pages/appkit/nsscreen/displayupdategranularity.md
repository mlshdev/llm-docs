> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/displayupdategranularity](https://developer.apple.com/documentation/appkit/nsscreen/displayupdategranularity)

# displayUpdateGranularity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.

## Declaration

```swift
var displayUpdateGranularity: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

All screen refresh rates fall between the values in the [minimumRefreshInterval](minimumrefreshinterval.md) and [maximumRefreshInterval](maximumrefreshinterval.md) properties. For screens that support fixed update rates, this property contains the amount of time between two successive rates. For example, if a screen supports update rates between 30Hz and 120Hz with an update granularity of 5ms, the screen supports additional refresh rates of approximately 35Hz, 43Hz, 55Hz, and 75Hz.

If the value of this property is `0`, the screen supports any update rate between the minimum and maximum refresh intervals.

## See Also

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [minimumRefreshInterval](minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [lastDisplayUpdateTimestamp](lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.

# displayUpdateGranularity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.

## Declaration

```objectivec
@property (readonly) NSTimeInterval displayUpdateGranularity;
```

<a id="Discussion"></a>

## Discussion

All screen refresh rates fall between the values in the [minimumRefreshInterval](minimumrefreshinterval.md) and [maximumRefreshInterval](maximumrefreshinterval.md) properties. For screens that support fixed update rates, this property contains the amount of time between two successive rates. For example, if a screen supports update rates between 30Hz and 120Hz with an update granularity of 5ms, the screen supports additional refresh rates of approximately 35Hz, 43Hz, 55Hz, and 75Hz.

If the value of this property is `0`, the screen supports any update rate between the minimum and maximum refresh intervals.

## See Also

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [minimumRefreshInterval](minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [lastDisplayUpdateTimestamp](lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.
