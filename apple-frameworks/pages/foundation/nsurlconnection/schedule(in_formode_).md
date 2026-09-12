> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/schedule(in:formode:)](https://developer.apple.com/documentation/foundation/nsurlconnection/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines the run loop and mode that the connection uses to call methods on its delegate.

## Declaration

```swift
func schedule(in aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: The [RunLoop](../runloop.md) instance to use when calling delegate methods.
- `mode`: The mode in which to call delegate methods.

<a id="Discussion"></a>

## Discussion

By default, a connection is scheduled on the current thread in the default mode when it is created. If you create a connection with the [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter, you can schedule the connection on a different run loop or mode before starting it with the [start()](start%28%29.md) method. You can schedule a connection on multiple run loops and modes, or on the same run loop in multiple modes.

You cannot reschedule a connection after it has started.

It is an error to schedule delegate method calls with both this method and the [setDelegateQueue(\_:)](setdelegatequeue%28__%29.md) method.

## See Also

### Scheduling Delegate Method Calls

- [setDelegateQueue(\_:)](setdelegatequeue%28__%29.md): Determines the operation queue that is used to call methods on the connection’s delegate.
- [unschedule(from:forMode:)](unschedule%28from_formode_%29.md): Causes the connection to stop calling delegate methods in the specified run loop and mode.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines the run loop and mode that the connection uses to call methods on its delegate.

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: The [NSRunLoop](../runloop.md) instance to use when calling delegate methods.
- `mode`: The mode in which to call delegate methods.

<a id="Discussion"></a>

## Discussion

By default, a connection is scheduled on the current thread in the default mode when it is created. If you create a connection with the [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter, you can schedule the connection on a different run loop or mode before starting it with the [start](start%28%29.md) method. You can schedule a connection on multiple run loops and modes, or on the same run loop in multiple modes.

You cannot reschedule a connection after it has started.

It is an error to schedule delegate method calls with both this method and the [setDelegateQueue:](setdelegatequeue%28__%29.md) method.

## See Also

### Scheduling Delegate Method Calls

- [setDelegateQueue:](setdelegatequeue%28__%29.md): Determines the operation queue that is used to call methods on the connection’s delegate.
- [unscheduleFromRunLoop:forMode:](unschedule%28from_formode_%29.md): Causes the connection to stop calling delegate methods in the specified run loop and mode.
