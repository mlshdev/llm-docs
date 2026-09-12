> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchgroup/wait(walltimeout:)](https://developer.apple.com/documentation/dispatch/dispatchgroup/wait(walltimeout:))

# wait(wallTimeout:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Waits synchronously for the previously submitted work to complete, and returns if the work is not completed before the specified timeout period has elapsed.

## Declaration

```swift
func wait(wallTimeout timeout: DispatchWallTime) -> DispatchTimeoutResult
```

## Parameters

- `timeout`: The latest time to wait for a group to complete.

<a id="return-value"></a>

## Return Value

[DispatchTimeoutResult.timedOut](../dispatchtimeoutresult/timedout.md) if the method returned due to a timeout, or [DispatchTimeoutResult.success](../dispatchtimeoutresult/success.md) if the tasks completed.

## See Also

### Waiting for Tasks to Finish Executing

- [wait()](wait%28%29.md): Waits synchronously for the previously submitted work to finish.
- [wait(timeout:)](wait%28timeout_%29.md): Waits synchronously for the previously submitted work to complete, and returns if the work is not completed before the specified timeout period has elapsed.
