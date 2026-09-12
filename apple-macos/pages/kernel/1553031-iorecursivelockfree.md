> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553031-iorecursivelockfree](https://developer.apple.com/documentation/kernel/1553031-iorecursivelockfree)

# IORecursiveLockFree

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

Frees a recursive lock.

## Declaration

```objectivec
void IORecursiveLockFree(struct IORecursiveLock *lock);
```

```objectivec
void IORecursiveLockFree(IORecursiveLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="discussion"></a>

## Discussion

Frees a lock allocated with IORecursiveLockAlloc. Lock should be unlocked with no waiters.

## See Also

### Recursive Locks

- [IORecursiveLockAlloc](1553013-iorecursivelockalloc.md): Allocates and initializes an recursive lock.
- [IORecursiveLockGetMachLock](1552988-iorecursivelockgetmachlock.md): Accessor to a Mach mutex.
- [IORecursiveLockHaveLock](1552995-iorecursivelockhavelock.md): Check if a recursive lock is held by the calling thread.
- [IORecursiveLockLock](1553020-iorecursivelocklock.md): Lock a recursive lock.
- [IORecursiveLockSleep](1553001-iorecursivelocksleep.md)
- [IORecursiveLockSleepDeadline](1552986-iorecursivelocksleepdeadline.md)
- [IORecursiveLockTryLock](1552993-iorecursivelocktrylock.md): Attempt to lock a recursive lock.
- [IORecursiveLockUnlock](1553032-iorecursivelockunlock.md): Unlock a recursive lock.
- [IORecursiveLockWakeup](1553014-iorecursivelockwakeup.md)
