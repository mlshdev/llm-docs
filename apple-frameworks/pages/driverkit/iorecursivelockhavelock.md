> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iorecursivelockhavelock](https://developer.apple.com/documentation/driverkit/iorecursivelockhavelock)

# IORecursiveLockHaveLock

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
bool IORecursiveLockHaveLock(struct IORecursiveLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="return-value"></a>

## Return Value

True if the calling thread holds the lock otherwise false.

<a id="discussion"></a>

## Discussion

Check if a recursive lock is held by the calling thread.

If the lock is held by the calling thread, return true, otherwise the lock is unlocked, or held by another thread and false is returned.

## See Also

### Functions

- [dequeue_head](dequeue_head.md)
- [dequeue_tail](dequeue_tail.md)
- [enqueue_head](enqueue_head.md)
- [enqueue_tail](enqueue_tail.md)
- [get_IOHistogramReporter_IVars](get_iohistogramreporter_ivars-4lwpg.md)
- [get_IOHistogramReporter_IVars](get_iohistogramreporter_ivars-5lkdv.md)
- [get_IOReporter_IVars](get_ioreporter_ivars-6q8vt.md)
- [get_IOReporter_IVars](get_ioreporter_ivars-89ntc.md)
- [get_IOStateReporter_IVars](get_iostatereporter_ivars-3g28i.md)
- [get_IOStateReporter_IVars](get_iostatereporter_ivars-56435.md)
- [insque](insque.md)
- [IOCallOnce](iocallonce.md)
- [IOLockAlloc](iolockalloc.md)
- [IOLockAssert](iolockassert.md)
- [IOLockFree](iolockfree.md)
