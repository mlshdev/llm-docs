> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_semaphore_wait](https://developer.apple.com/documentation/dispatch/dispatch_semaphore_wait)

# dispatch_semaphore_wait

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Waits for (decrements) a semaphore.

## Declaration

```objectivec
extern intptr_t dispatch_semaphore_wait(dispatch_semaphore_t dsema, dispatch_time_t timeout);
```

## Parameters

- `dsema`: The semaphore. This parameter cannot be `NULL`.
- `timeout`: When to timeout (see [dispatch_time](dispatch_time.md)). The constants [DISPATCH_TIME_NOW](dispatch_time_now.md) and [DISPATCH_TIME_FOREVER](dispatch_time_forever.md) are available as a convenience.

<a id="return-value"></a>

## Return Value

Returns zero on success, or non-zero if the timeout occurred.

<a id="Discussion"></a>

## Discussion

Decrement the counting semaphore. If the resulting value is less than zero, this function waits for a signal to occur before returning.
