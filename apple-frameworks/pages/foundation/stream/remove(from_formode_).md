> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/remove(from:formode:)](https://developer.apple.com/documentation/foundation/stream/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the receiver from a given run loop running in a given mode.

## Declaration

```swift
func remove(from aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: The run loop on which the receiver was scheduled.
- `mode`: The mode for the run loop.

## See Also

### Managing Run Loops

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Schedules the receiver on a given run loop in a given mode.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the receiver from a given run loop running in a given mode.

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: The run loop on which the receiver was scheduled.
- `mode`: The mode for the run loop.

## See Also

### Managing Run Loops

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Schedules the receiver on a given run loop in a given mode.
