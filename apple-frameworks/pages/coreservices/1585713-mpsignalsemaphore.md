> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585713-mpsignalsemaphore](https://developer.apple.com/documentation/coreservices/1585713-mpsignalsemaphore)

# MPSignalSemaphore

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Signals a semaphore.

## Declaration

```objectivec
OSStatus MPSignalSemaphore(MPSemaphoreID semaphore);
```

## Parameters

- `semaphore`: The ID of the semaphore you want to signal.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If the value of the semaphore was already at the maximum, `MPSignalSemaphore` returns `kInsufficientResourcesErr`.

<a id="discussion"></a>

## Discussion

If tasks are waiting on the semaphore, the oldest (first queued) task is unblocked so that the corresponding  [MPWaitOnSemaphore](1585722-mpwaitonsemaphore.md)  call for that task completes. Otherwise, if the value of the semaphore is not already equal to its maximum value, it is incremented by one.

Note that you can call this function from an interrupt handler.

## See Also

### Creating and Handling Semaphores

- [MPCreateSemaphore](1585569-mpcreatesemaphore.md): Deprecated. Creates a semaphore.
- [MPDeleteSemaphore](1585586-mpdeletesemaphore.md): Deprecated. Removes a semaphore.
- [MPWaitOnSemaphore](1585722-mpwaitonsemaphore.md): Deprecated. Waits on a semaphore
