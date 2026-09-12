> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/currentmode](https://developer.apple.com/documentation/foundation/runloop/currentmode)

# currentMode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s current input mode.

## Declaration

```swift
var currentMode: RunLoop.Mode? { get }
```

<a id="Discussion"></a>

## Discussion

The receiver’s current input mode. This method returns the current input mode *only* while the receiver is running; otherwise, it returns `nil`.

The current mode is set by the methods that run the run loop, such as [acceptInput(forMode:before:)](acceptinput%28formode_before_%29.md) and [run(mode:before:)](run%28mode_before_%29.md).

## See Also

### Related Documentation

- [run(until:)](run%28until_%29.md): Runs the loop until the specified date, during which time it processes data from all attached input sources.
- [run()](run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.

### Accessing Run Loops and Modes

- [current](current.md): Returns the run loop for the current thread.
- [limitDate(forMode:)](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [main](main.md): Returns the run loop of the main thread.
- [getCFRunLoop()](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [RunLoop.Mode](mode.md): Modes that a run loop operates in.

# currentMode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s current input mode.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSRunLoopMode currentMode;
```

<a id="Discussion"></a>

## Discussion

The receiver’s current input mode. This method returns the current input mode *only* while the receiver is running; otherwise, it returns `nil`.

The current mode is set by the methods that run the run loop, such as [acceptInputForMode:beforeDate:](acceptinput%28formode_before_%29.md) and [runMode:beforeDate:](run%28mode_before_%29.md).

## See Also

### Related Documentation

- [runUntilDate:](run%28until_%29.md): Runs the loop until the specified date, during which time it processes data from all attached input sources.
- [run](run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.

### Accessing Run Loops and Modes

- [currentRunLoop](current.md): Returns the run loop for the current thread.
- [limitDateForMode:](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [mainRunLoop](main.md): Returns the run loop of the main thread.
- [getCFRunLoop](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [NSRunLoopMode](mode.md): Modes that a run loop operates in.
