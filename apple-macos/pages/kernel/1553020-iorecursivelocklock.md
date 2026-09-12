> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553020-iorecursivelocklock](https://developer.apple.com/documentation/kernel/1553020-iorecursivelocklock)

# IORecursiveLockLock

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

Lock a recursive lock.

## Declaration

```objectivec
void IORecursiveLockLock(struct IORecursiveLock *lock);
```

```objectivec
void IORecursiveLockLock(IORecursiveLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="discussion"></a>

## Discussion

Lock the recursive lock. If the lock is held by another thread, block waiting for its unlock. This function may block and so should not be called from interrupt level or while a spin lock is held. The lock may be taken recursively by the same thread, with a balanced number of calls to IORecursiveLockUnlock.

## See Also

### Recursive Locks

- [IORecursiveLockAlloc](1553013-iorecursivelockalloc.md): Allocates and initializes an recursive lock.
- [IORecursiveLockFree](1553031-iorecursivelockfree.md): Frees a recursive lock.
- [IORecursiveLockGetMachLock](1552988-iorecursivelockgetmachlock.md): Accessor to a Mach mutex.
- [IORecursiveLockHaveLock](1552995-iorecursivelockhavelock.md): Check if a recursive lock is held by the calling thread.
- [IORecursiveLockSleep](1553001-iorecursivelocksleep.md)
- [IORecursiveLockSleepDeadline](1552986-iorecursivelocksleepdeadline.md)
- [IORecursiveLockTryLock](1552993-iorecursivelocktrylock.md): Attempt to lock a recursive lock.
- [IORecursiveLockUnlock](1553032-iorecursivelockunlock.md): Unlock a recursive lock.
- [IORecursiveLockWakeup](1553014-iorecursivelockwakeup.md)
