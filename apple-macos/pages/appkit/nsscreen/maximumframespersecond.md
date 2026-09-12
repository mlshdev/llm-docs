> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/maximumframespersecond](https://developer.apple.com/documentation/appkit/nsscreen/maximumframespersecond)

# maximumFramesPerSecond (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The maximum number of frames per second that the screen supports.

## Declaration

```swift
var maximumFramesPerSecond: Int { get }
```

## See Also

### Getting Variable Refresh Rate Details

- [minimumRefreshInterval](minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
- [lastDisplayUpdateTimestamp](lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.

# maximumFramesPerSecond (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The maximum number of frames per second that the screen supports.

## Declaration

```objectivec
@property (readonly) NSInteger maximumFramesPerSecond;
```

## See Also

### Getting Variable Refresh Rate Details

- [minimumRefreshInterval](minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
- [lastDisplayUpdateTimestamp](lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.
