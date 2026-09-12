> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585586-mpdeletesemaphore](https://developer.apple.com/documentation/coreservices/1585586-mpdeletesemaphore)

# MPDeleteSemaphore

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Removes a semaphore.

## Declaration

```objectivec
OSStatus MPDeleteSemaphore(MPSemaphoreID semaphore);
```

## Parameters

- `semaphore`: The ID of the semaphore you want to remove.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Calling this function unblocks all tasks waiting on the semaphore and the tasks’ respective  [MPWaitOnSemaphore](1585722-mpwaitonsemaphore.md)  calls will return with the result code `kMPDeletedErr`.

Also see the function  [MPCreateSemaphore](1585569-mpcreatesemaphore.md).

## See Also

### Creating and Handling Semaphores

- [MPCreateSemaphore](1585569-mpcreatesemaphore.md): Deprecated. Creates a semaphore.
- [MPSignalSemaphore](1585713-mpsignalsemaphore.md): Deprecated. Signals a semaphore.
- [MPWaitOnSemaphore](1585722-mpwaitonsemaphore.md): Deprecated. Waits on a semaphore
