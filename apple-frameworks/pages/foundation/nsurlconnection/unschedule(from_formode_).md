> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/unschedule(from:formode:)](https://developer.apple.com/documentation/foundation/nsurlconnection/unschedule(from:formode:))

# unschedule(from:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the connection to stop calling delegate methods in the specified run loop and mode.

## Declaration

```swift
func unschedule(from aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: The run loop instance to unschedule.
- `mode`: The mode to unschedule.

<a id="Discussion"></a>

## Discussion

By default, a connection is scheduled on the current thread in the default mode when it is created. If you create a connection with the [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter, you can instead schedule connection on a different run loop or mode before starting it with the [start()](start%28%29.md) method. You can schedule a connection on multiple run loops and modes, or on the same run loop in multiple modes. Use this method to unschedule the connection from an undesired run loop and mode before starting the connection.

You cannot reschedule a connection after it has started. It is not necessary to unschedule a connection after it has finished.

## See Also

### Scheduling Delegate Method Calls

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Determines the run loop and mode that the connection uses to call methods on its delegate.
- [setDelegateQueue(\_:)](setdelegatequeue%28__%29.md): Determines the operation queue that is used to call methods on the connection’s delegate.

# unscheduleFromRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the connection to stop calling delegate methods in the specified run loop and mode.

## Declaration

```objectivec
- (void) unscheduleFromRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: The run loop instance to unschedule.
- `mode`: The mode to unschedule.

<a id="Discussion"></a>

## Discussion

By default, a connection is scheduled on the current thread in the default mode when it is created. If you create a connection with the [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter, you can instead schedule connection on a different run loop or mode before starting it with the [start](start%28%29.md) method. You can schedule a connection on multiple run loops and modes, or on the same run loop in multiple modes. Use this method to unschedule the connection from an undesired run loop and mode before starting the connection.

You cannot reschedule a connection after it has started. It is not necessary to unschedule a connection after it has finished.

## See Also

### Scheduling Delegate Method Calls

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Determines the run loop and mode that the connection uses to call methods on its delegate.
- [setDelegateQueue:](setdelegatequeue%28__%29.md): Determines the operation queue that is used to call methods on the connection’s delegate.
