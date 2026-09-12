> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscondition/wait(until:)](https://developer.apple.com/documentation/foundation/nscondition/wait(until:))

# wait(until:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until the condition is signaled or the specified time limit is reached.

## Declaration

```swift
func wait(until limit: Date) -> Bool
```

## Parameters

- `limit`: The time at which to wake up the thread if the condition has not been signaled.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the condition was signaled; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the time limit was reached.

<a id="Discussion"></a>

## Discussion

You must lock the receiver prior to calling this method.

## See Also

### Related Documentation

- [lock()](../nslocking/lock%28%29.md): Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.

### Waiting for the Lock

- [wait()](wait%28%29.md): Blocks the current thread until the condition is signaled.

# waitUntilDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until the condition is signaled or the specified time limit is reached.

## Declaration

```objectivec
- (BOOL) waitUntilDate:(NSDate *) limit;
```

## Parameters

- `limit`: The time at which to wake up the thread if the condition has not been signaled.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the condition was signaled; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the time limit was reached.

<a id="Discussion"></a>

## Discussion

You must lock the receiver prior to calling this method.

## See Also

### Related Documentation

- [lock](../nslocking/lock%28%29.md): Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.

### Waiting for the Lock

- [wait](wait%28%29.md): Blocks the current thread until the condition is signaled.
