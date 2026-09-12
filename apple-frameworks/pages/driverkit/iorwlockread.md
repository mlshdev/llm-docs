> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iorwlockread](https://developer.apple.com/documentation/driverkit/iorwlockread)

# IORWLockRead

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
void IORWLockRead(struct IORWLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="discussion"></a>

## Discussion

Lock a read/write lock for read.

Lock the lock for read, allowing multiple readers when there are no writers. If the lock is held for write, block waiting for its unlock. Locking the lock recursively from one thread, for read or write, can result in deadlock.

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
