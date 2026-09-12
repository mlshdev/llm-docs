> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553026-iolocksleep](https://developer.apple.com/documentation/kernel/1553026-iolocksleep)

# IOLockSleep

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.2+

Sleep with mutex unlock and relock

## Declaration

```objectivec
int IOLockSleep(IOLock *lock, void *event, UInt32 interType);
```

## Parameters

- `lock`: Pointer to the locked lock.
- `event`: The event to sleep on.
- `interType`: How can the sleep be interrupted.

<a id="return_value"></a>

## Return Value

The wait-result value indicating how the thread was awakened.

<a id="discussion"></a>

## Discussion

Prepare to sleep,unlock the mutex, and re-acquire it on wakeup. Results are undefined if the caller has not locked the mutex. This function may block and so should not be called from interrupt level or while a spin lock is held.

## See Also

### Mutexes

- [IOLockAlloc](1553021-iolockalloc.md): Allocates and initializes a mutex.
- [IOLockInitWithState](1553028-iolockinitwithstate.md)
- [IOLockFree](1553034-iolockfree.md): Frees a mutex.
- [IOTryLock](1553012-iotrylock.md)
- [IOTakeLock](1553007-iotakelock.md)
- [IOLockLock](1553000-iolocklock.md): Lock a mutex.
- [IOUnlock](1552994-iounlock.md)
- [IOLockTryLock](1553018-iolocktrylock.md): Attempt to lock a mutex.
- [IOLockUnlock](1553006-iolockunlock.md): Unlock a mutex.
- [IOLockWakeup](1553016-iolockwakeup.md)
- [IOLockSleepDeadline](1553030-iolocksleepdeadline.md)
- [IOLockGetMachLock](1553008-iolockgetmachlock.md): Accessor to a Mach mutex.
