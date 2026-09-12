> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/schedule(in:formode:)](https://developer.apple.com/documentation/foundation/stream/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules the receiver on a given run loop in a given mode.

## Declaration

```swift
func schedule(in aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: The run loop on which to schedule the receiver.
- `mode`: The mode for the run loop.

<a id="Discussion"></a>

## Discussion

Unless the client is polling the stream, it is responsible for ensuring that the stream is scheduled on at least one run loop and that at least one of the run loops on which the stream is scheduled is being run.

## See Also

### Managing Run Loops

- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the receiver from a given run loop running in a given mode.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules the receiver on a given run loop in a given mode.

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: The run loop on which to schedule the receiver.
- `mode`: The mode for the run loop.

<a id="Discussion"></a>

## Discussion

Unless the client is polling the stream, it is responsible for ensuring that the stream is scheduled on at least one run loop and that at least one of the run loops on which the stream is scheduled is being run.

## See Also

### Managing Run Loops

- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the receiver from a given run loop running in a given mode.
