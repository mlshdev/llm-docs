> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585722-mpwaitonsemaphore](https://developer.apple.com/documentation/coreservices/1585722-mpwaitonsemaphore)

# MPWaitOnSemaphore

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Waits on a semaphore

## Declaration

```objectivec
OSStatus MPWaitOnSemaphore(MPSemaphoreID semaphore, Duration timeout);
```

## Parameters

- `semaphore`: The ID of the semaphore you want to wait on.
- `timeout`: The maximum time the function should wait before timing out. See [Timer Duration Constants](1585641-timer_duration_constants.md) for a list of constants you can use to specify the wait interval.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

If the value of the semaphore is greater than zero, the value is decremented and the function returns with `noErr`. Otherwise, the task is blocked awaiting a signal until the specified timeout is exceeded.

If you call this function from a cooperative task, you should specify only `kDurationImmediate` for the timeout length; other waits will cause the task to block. 

Also see the function  [MPSignalSemaphore](1585713-mpsignalsemaphore.md).

## See Also

### Creating and Handling Semaphores

- [MPCreateSemaphore](1585569-mpcreatesemaphore.md): Deprecated. Creates a semaphore.
- [MPDeleteSemaphore](1585586-mpdeletesemaphore.md): Deprecated. Removes a semaphore.
- [MPSignalSemaphore](1585713-mpsignalsemaphore.md): Deprecated. Signals a semaphore.
