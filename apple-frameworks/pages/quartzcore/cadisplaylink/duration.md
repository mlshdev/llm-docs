> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/duration](https://developer.apple.com/documentation/quartzcore/cadisplaylink/duration)

# duration (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

The time interval between screen refresh updates.

## Declaration

```swift
var duration: CFTimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This value is in an undefined state until the system calls the target’s selector at least once.

You calculate the expected amount of time your app has to render each frame by using [targetTimestamp](targettimestamp.md)-[timestamp](timestamp.md). Use [targetTimestamp](targettimestamp.md)-[CACurrentMediaTime()](../cacurrentmediatime%28%29.md) to calculate the actual amount of time.

## See Also

### Configuring a Display Link

- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [isPaused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.

# duration (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

The time interval between screen refresh updates.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

This value is in an undefined state until the system calls the target’s selector at least once.

You calculate the expected amount of time your app has to render each frame by using [targetTimestamp](targettimestamp.md)-[timestamp](timestamp.md). Use [targetTimestamp](targettimestamp.md)-[CACurrentMediaTime](../cacurrentmediatime%28%29.md) to calculate the actual amount of time.

## See Also

### Configuring a Display Link

- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [paused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [targetTimestamp](targettimestamp.md): The time interval that represents when the next frame displays.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.
