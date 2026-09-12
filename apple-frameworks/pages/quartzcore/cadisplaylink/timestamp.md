> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/timestamp](https://developer.apple.com/documentation/quartzcore/cadisplaylink/timestamp)

# timestamp (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

The time interval that represents when the last frame displayed.

## Declaration

```swift
var timestamp: CFTimeInterval { get }
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](../optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="Discussion"></a>

## Discussion

If you need to calculate what to display next, use [targetTimestamp](targettimestamp.md) instead.

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [isPaused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.

# timestamp (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

The time interval that represents when the last frame displayed.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval timestamp;
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](../optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="Discussion"></a>

## Discussion

If you need to calculate what to display next, use [targetTimestamp](targettimestamp.md) instead.

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [paused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.
