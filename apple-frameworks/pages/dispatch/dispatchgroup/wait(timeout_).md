> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchgroup/wait(timeout:)

# wait(timeout:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Waits synchronously for the previously submitted work to complete, and returns if the work is not completed before the specified timeout period has elapsed.

## Declaration

```swift
func wait(timeout: DispatchTime) -> DispatchTimeoutResult
```

## Parameters

- `timeout`: The latest time to wait for a group to complete.

<a id="return-value"></a>

## Return Value

A result value indicating whether the method returned due to a timeout.

## See Also

### Waiting for Tasks to Finish Executing

- [wait()](wait%28%29.md): Waits synchronously for the previously submitted work to finish.
- [wait(wallTimeout:)](wait%28walltimeout_%29.md): Waits synchronously for the previously submitted work to complete, and returns if the work is not completed before the specified timeout period has elapsed.
