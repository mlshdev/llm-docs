> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/ispaused](https://developer.apple.com/documentation/quartzcore/cadisplaylink/ispaused)

# isPaused (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the system suspends the display link’s notifications to the target.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), the display link doesn’t send notifications to the target.

This property is thread safe, so you can set it from a thread separate to the one in which the display link runs.

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.

# paused (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the system suspends the display link’s notifications to the target.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), the display link doesn’t send notifications to the target.

This property is thread safe, so you can set it from a thread separate to the one in which the display link runs.

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.
