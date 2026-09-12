> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/remove(from:formode:)](https://developer.apple.com/documentation/foundation/nsmachport/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the receiver from the run loop mode `mode` of `runLoop`.

## Declaration

```swift
func remove(from runLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runLoop`: The run loop from which to remove the receiver.
- `mode`: The run loop mode from which to remove the receiver.

<a id="Discussion"></a>

## Discussion

When the receiver is removed, the run loop stops monitoring the Mach port for incoming messages.

## See Also

### Scheduling the Port on a Run Loop

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Schedules the receiver into the run loop mode `mode` of `runLoop`.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the receiver from the run loop mode `mode` of `runLoop`.

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) runLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runLoop`: The run loop from which to remove the receiver.
- `mode`: The run loop mode from which to remove the receiver.

<a id="Discussion"></a>

## Discussion

When the receiver is removed, the run loop stops monitoring the Mach port for incoming messages.

## See Also

### Scheduling the Port on a Run Loop

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Schedules the receiver into the run loop mode `mode` of `runLoop`.
