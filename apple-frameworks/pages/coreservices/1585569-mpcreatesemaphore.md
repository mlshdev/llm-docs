> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585569-mpcreatesemaphore](https://developer.apple.com/documentation/coreservices/1585569-mpcreatesemaphore)

# MPCreateSemaphore

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a semaphore.

## Declaration

```objectivec
OSStatus MPCreateSemaphore(MPSemaphoreCount maximumValue, MPSemaphoreCount initialValue, MPSemaphoreID *semaphore);
```

## Parameters

- `maximumValue`: The maximum allowed value of the semaphore.
- `initialValue`: The initial value of the semaphore.
- `semaphore`: On return, `semaphore` contains the ID of the newly–created semaphore.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

If you want to create a binary semaphore, you can call the macro `MPCreateBinarySemaphore (MPSemaphoreID *semaphore)` instead, which simply calls `MPCreateSemaphore` with both `maximumValue` and `initialValue` set to 1.

Also see the function  [MPDeleteSemaphore](1585586-mpdeletesemaphore.md).

## See Also

### Creating and Handling Semaphores

- [MPDeleteSemaphore](1585586-mpdeletesemaphore.md): Deprecated. Removes a semaphore.
- [MPSignalSemaphore](1585713-mpsignalsemaphore.md): Deprecated. Signals a semaphore.
- [MPWaitOnSemaphore](1585722-mpwaitonsemaphore.md): Deprecated. Waits on a semaphore
