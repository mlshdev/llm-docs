> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/run(until:)](https://developer.apple.com/documentation/foundation/runloop/run(until:))

# run(until:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Runs the loop until the specified date, during which time it processes data from all attached input sources.

## Declaration

```swift
func run(until limitDate: Date)
```

## Parameters

- `limitDate`: The date up until which to run.

<a id="Discussion"></a>

## Discussion

If no input sources or timers are attached to the run loop, this method exits immediately; otherwise, it runs the receiver in the `NSDefaultRunLoopMode` by repeatedly invoking [run(mode:before:)](run%28mode_before_%29.md) until the specified expiration date.

Manually removing all known input sources and timers from the run loop is not a guarantee that the run loop will exit. macOS can install and remove additional input sources as needed to process requests targeted at the receiver’s thread. Those sources could therefore prevent the run loop from exiting.

## See Also

### Running a Loop

- [run()](run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.
- [run(mode:before:)](run%28mode_before_%29.md): Runs the loop once, blocking for input in the specified mode until a given date.
- [acceptInput(forMode:before:)](acceptinput%28formode_before_%29.md): Runs the loop once or until the specified date, accepting input only for the specified mode.

# runUntilDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Runs the loop until the specified date, during which time it processes data from all attached input sources.

## Declaration

```objectivec
- (void) runUntilDate:(NSDate *) limitDate;
```

## Parameters

- `limitDate`: The date up until which to run.

<a id="Discussion"></a>

## Discussion

If no input sources or timers are attached to the run loop, this method exits immediately; otherwise, it runs the receiver in the `NSDefaultRunLoopMode` by repeatedly invoking [runMode:beforeDate:](run%28mode_before_%29.md) until the specified expiration date.

Manually removing all known input sources and timers from the run loop is not a guarantee that the run loop will exit. macOS can install and remove additional input sources as needed to process requests targeted at the receiver’s thread. Those sources could therefore prevent the run loop from exiting.

## See Also

### Running a Loop

- [run](run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.
- [runMode:beforeDate:](run%28mode_before_%29.md): Runs the loop once, blocking for input in the specified mode until a given date.
- [acceptInputForMode:beforeDate:](acceptinput%28formode_before_%29.md): Runs the loop once or until the specified date, accepting input only for the specified mode.
