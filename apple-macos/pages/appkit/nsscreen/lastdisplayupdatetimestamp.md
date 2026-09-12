> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/lastdisplayupdatetimestamp](https://developer.apple.com/documentation/appkit/nsscreen/lastdisplayupdatetimestamp)

# lastDisplayUpdateTimestamp (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The time of the last framebuffer update, expressed as the number of seconds since system startup.

## Declaration

```swift
var lastDisplayUpdateTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how much time elapsed since the last frame update.

## See Also

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [minimumRefreshInterval](minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.

# lastDisplayUpdateTimestamp (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The time of the last framebuffer update, expressed as the number of seconds since system startup.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastDisplayUpdateTimestamp;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how much time elapsed since the last frame update.

## See Also

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [minimumRefreshInterval](minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
