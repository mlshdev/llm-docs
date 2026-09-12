> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitem/wait(walltimeout:)](https://developer.apple.com/documentation/dispatch/dispatchworkitem/wait(walltimeout:))

# wait(wallTimeout:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Causes the caller to wait synchronously until the dispatch work item finishes executing, or until the specified time elapses.

## Declaration

```swift
func wait(wallTimeout: DispatchWallTime) -> DispatchTimeoutResult
```

## Parameters

- `wallTimeout`: The time at which to stop waiting for the dispatch item to finish. Specifying [distantFuture](../dispatchtime/distantfuture.md) is equivalent to calling the [wait()](wait%28%29.md) method.

<a id="return-value"></a>

## Return Value

[DispatchTimeoutResult.success](../dispatchtimeoutresult/success.md) if the method returned because the work item finished executing, or [DispatchTimeoutResult.timedOut](../dispatchtimeoutresult/timedout.md) if the timeout value was reached.

<a id="Discussion"></a>

## Discussion

This method returns immediately if the current work item has already finished executing.

## See Also

### Waiting for the Completion of a Work Item

- [wait()](wait%28%29.md): Causes the caller to wait synchronously until the dispatch work item finishes executing.
- [wait(timeout:)](wait%28timeout_%29.md): Causes the caller to wait synchronously until the dispatch work item finishes executing, or until the specified time elapses.
- [DispatchTime](../dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](../dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
