> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/acceptinput(formode:before:)](https://developer.apple.com/documentation/foundation/runloop/acceptinput(formode:before:))

# acceptInput(forMode:before:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Runs the loop once or until the specified date, accepting input only for the specified mode.

## Declaration

```swift
func acceptInput(forMode mode: RunLoop.Mode, before limitDate: Date)
```

## Parameters

- `mode`: The mode in which to run. You may specify custom modes or use one of the modes listed in `Run Loop Modes`.
- `limitDate`: The date up until which to run.

<a id="Discussion"></a>

## Discussion

If no input sources or timers are attached to the run loop, this method exits immediately; otherwise, it runs the run loop once, returning as soon as one input source processes a message or the specifed time elapses.

> **Note**

>  A timer is not considered an input source and may fire multiple times while waiting for this method to return

Manually removing all known input sources and timers from the run loop is not a guarantee that the run loop will exit. macOS can install and remove additional input sources as needed to process requests targeted at the receiver’s thread. Those sources could therefore prevent the run loop from exiting.

## See Also

### Running a Loop

- [run()](run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.
- [run(mode:before:)](run%28mode_before_%29.md): Runs the loop once, blocking for input in the specified mode until a given date.
- [run(until:)](run%28until_%29.md): Runs the loop until the specified date, during which time it processes data from all attached input sources.

# acceptInputForMode:beforeDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Runs the loop once or until the specified date, accepting input only for the specified mode.

## Declaration

```objectivec
- (void) acceptInputForMode:(NSRunLoopMode) mode beforeDate:(NSDate *) limitDate;
```

## Parameters

- `mode`: The mode in which to run. You may specify custom modes or use one of the modes listed in `Run Loop Modes`.
- `limitDate`: The date up until which to run.

<a id="Discussion"></a>

## Discussion

If no input sources or timers are attached to the run loop, this method exits immediately; otherwise, it runs the run loop once, returning as soon as one input source processes a message or the specifed time elapses.

> **Note**

>  A timer is not considered an input source and may fire multiple times while waiting for this method to return

Manually removing all known input sources and timers from the run loop is not a guarantee that the run loop will exit. macOS can install and remove additional input sources as needed to process requests targeted at the receiver’s thread. Those sources could therefore prevent the run loop from exiting.

## See Also

### Running a Loop

- [run](run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.
- [runMode:beforeDate:](run%28mode_before_%29.md): Runs the loop once, blocking for input in the specified mode until a given date.
- [runUntilDate:](run%28until_%29.md): Runs the loop until the specified date, during which time it processes data from all attached input sources.
