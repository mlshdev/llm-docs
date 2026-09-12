> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/limitdate(formode:)](https://developer.apple.com/documentation/foundation/runloop/limitdate(formode:))

# limitDate(forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.

## Declaration

```swift
func limitDate(forMode mode: RunLoop.Mode) -> Date?
```

## Parameters

- `mode`: The run loop mode to search. You may specify custom modes or use one of the modes listed in `Run Loop Modes`.

<a id="return-value"></a>

## Return Value

The date at which the next timer is scheduled to fire, or `nil` if there are no input sources for this mode.

<a id="Discussion"></a>

## Discussion

The run loop is entered with an immediate timeout, so the run loop does not block, waiting for input, if no input sources need processing.

## See Also

### Accessing Run Loops and Modes

- [current](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [main](main.md): Returns the run loop of the main thread.
- [getCFRunLoop()](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [RunLoop.Mode](mode.md): Modes that a run loop operates in.

# limitDateForMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.

## Declaration

```objectivec
- (NSDate *) limitDateForMode:(NSRunLoopMode) mode;
```

## Parameters

- `mode`: The run loop mode to search. You may specify custom modes or use one of the modes listed in `Run Loop Modes`.

<a id="return-value"></a>

## Return Value

The date at which the next timer is scheduled to fire, or `nil` if there are no input sources for this mode.

<a id="Discussion"></a>

## Discussion

The run loop is entered with an immediate timeout, so the run loop does not block, waiting for input, if no input sources need processing.

## See Also

### Accessing Run Loops and Modes

- [currentRunLoop](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [mainRunLoop](main.md): Returns the run loop of the main thread.
- [getCFRunLoop](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [NSRunLoopMode](mode.md): Modes that a run loop operates in.
