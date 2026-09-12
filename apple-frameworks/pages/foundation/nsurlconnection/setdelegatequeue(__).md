> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/setdelegatequeue(_:)](https://developer.apple.com/documentation/foundation/nsurlconnection/setdelegatequeue(_:))

# setDelegateQueue(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines the operation queue that is used to call methods on the connection’s delegate.

## Declaration

```swift
func setDelegateQueue(_ queue: OperationQueue?)
```

## Parameters

- `queue`: The operation queue to use when calling delegate methods.

<a id="Discussion"></a>

## Discussion

By default, a connection is scheduled on the current thread in the default mode when it is created. If you create a connection with the [init(request:delegate:startImmediately:)](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter, you can instead schedule the connection on an operation queue before starting it with the [start()](start%28%29.md) method.

You cannot reschedule a connection after it has started.

It is an error to schedule delegate method calls with both this method and the [schedule(in:forMode:)](schedule%28in_formode_%29.md) method.

## See Also

### Scheduling Delegate Method Calls

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Determines the run loop and mode that the connection uses to call methods on its delegate.
- [unschedule(from:forMode:)](unschedule%28from_formode_%29.md): Causes the connection to stop calling delegate methods in the specified run loop and mode.

# setDelegateQueue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines the operation queue that is used to call methods on the connection’s delegate.

## Declaration

```objectivec
- (void) setDelegateQueue:(NSOperationQueue *) queue;
```

## Parameters

- `queue`: The operation queue to use when calling delegate methods.

<a id="Discussion"></a>

## Discussion

By default, a connection is scheduled on the current thread in the default mode when it is created. If you create a connection with the [initWithRequest:delegate:startImmediately:](init%28request_delegate_startimmediately_%29.md) method and provide [false](https://developer.apple.com/documentation/swift/false) for the `startImmediately` parameter, you can instead schedule the connection on an operation queue before starting it with the [start](start%28%29.md) method.

You cannot reschedule a connection after it has started.

It is an error to schedule delegate method calls with both this method and the [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md) method.

## See Also

### Scheduling Delegate Method Calls

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Determines the run loop and mode that the connection uses to call methods on its delegate.
- [unscheduleFromRunLoop:forMode:](unschedule%28from_formode_%29.md): Causes the connection to stop calling delegate methods in the specified run loop and mode.
