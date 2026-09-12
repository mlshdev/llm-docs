> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/schedule(in:formode:)](https://developer.apple.com/documentation/foundation/nsmachport/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules the receiver into the run loop mode `mode` of `runLoop`.

## Declaration

```swift
func schedule(in runLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode in which to add the receiver.

<a id="Discussion"></a>

## Discussion

When the receiver is scheduled, the run loop monitors the mach port for incoming messages and, when a message arrives, invokes the delegate method [handleMachMessage(\_:)](../nsmachportdelegate/handlemachmessage%28__%29.md).

## See Also

### Scheduling the Port on a Run Loop

- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the receiver from the run loop mode `mode` of `runLoop`.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules the receiver into the run loop mode `mode` of `runLoop`.

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) runLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode in which to add the receiver.

<a id="Discussion"></a>

## Discussion

When the receiver is scheduled, the run loop monitors the mach port for incoming messages and, when a message arrives, invokes the delegate method [handleMachMessage:](../nsmachportdelegate/handlemachmessage%28__%29.md).

## See Also

### Scheduling the Port on a Run Loop

- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the receiver from the run loop mode `mode` of `runLoop`.
