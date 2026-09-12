> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/frameinterval](https://developer.apple.com/documentation/quartzcore/cadisplaylink/frameinterval)

# frameInterval (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ (deprecated in 10.0) · iPadOS 3.1+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The number of frames that must pass before the display link notifies the target again.

> Use [preferredFramesPerSecond](preferredframespersecond.md) instead.

## Declaration

```swift
var frameInterval: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which results in the system notifying your app at the refresh rate of the display. If you set the value to a value greater than `1`, the display link notifies your app at a fraction of the native refresh rate. For example, setting the interval to `2` causes the display link to fire every other frame, providing half the frame rate.

Setting this value to less than `1` results in undefined behavior and is a programmer error.

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [isPaused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.

# frameInterval (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ (deprecated in 10.0) · iPadOS 3.1+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The number of frames that must pass before the display link notifies the target again.

> Use [preferredFramesPerSecond](preferredframespersecond.md) instead.

## Declaration

```objectivec
@property (nonatomic) NSInteger frameInterval;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which results in the system notifying your app at the refresh rate of the display. If you set the value to a value greater than `1`, the display link notifies your app at a fraction of the native refresh rate. For example, setting the interval to `2` causes the display link to fire every other frame, providing half the frame rate.

Setting this value to less than `1` results in undefined behavior and is a programmer error.

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [paused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
