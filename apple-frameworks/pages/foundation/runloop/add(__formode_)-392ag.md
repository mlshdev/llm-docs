> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/add(_:formode:)-392ag](https://developer.apple.com/documentation/foundation/runloop/add(_:formode:)-392ag)

# add(\_:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers a given timer with a given input mode.

## Declaration

```swift
func add(_ timer: Timer, forMode mode: RunLoop.Mode)
```

## Parameters

- `timer`: The timer to register with the receiver.
- `mode`: The mode in which to add `aTimer`. You may specify a custom mode or use one of the modes listed in `Run Loop Modes`.

<a id="Discussion"></a>

## Discussion

You can add a timer to multiple input modes. While running in the designated mode, the receiver causes the timer to fire on or after its scheduled fire date. Upon firing, the timer invokes its associated handler routine, which is a selector on a designated object.

The receiver retains `aTimer`. To remove a timer from all run loop modes on which it is installed, send an [invalidate()](../timer/invalidate%28%29.md) message to the timer.

# addTimer:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers a given timer with a given input mode.

## Declaration

```objectivec
- (void) addTimer:(NSTimer *) timer forMode:(NSRunLoopMode) mode;
```

## Parameters

- `timer`: The timer to register with the receiver.
- `mode`: The mode in which to add `aTimer`. You may specify a custom mode or use one of the modes listed in `Run Loop Modes`.

<a id="Discussion"></a>

## Discussion

You can add a timer to multiple input modes. While running in the designated mode, the receiver causes the timer to fire on or after its scheduled fire date. Upon firing, the timer invokes its associated handler routine, which is a selector on a designated object.

The receiver retains `aTimer`. To remove a timer from all run loop modes on which it is installed, send an [invalidate](../timer/invalidate%28%29.md) message to the timer.
