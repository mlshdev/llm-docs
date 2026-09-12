> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1552993-iorecursivelocktrylock](https://developer.apple.com/documentation/kernel/1552993-iorecursivelocktrylock)

# IORecursiveLockTryLock

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

Attempt to lock a recursive lock.

## Declaration

```objectivec
bool IORecursiveLockTryLock(struct IORecursiveLock *lock);
```

```objectivec
boolean_t IORecursiveLockTryLock(IORecursiveLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="return_value"></a>

## Return Value

True if the lock is now locked by the caller, otherwise false.

<a id="discussion"></a>

## Discussion

Lock the lock if it is currently unlocked, or held by the calling thread, and return true. If the lock is held by another thread, return false. Successful calls to IORecursiveLockTryLock should be balanced with calls to IORecursiveLockUnlock.

## See Also

### Recursive Locks

- [IORecursiveLockAlloc](1553013-iorecursivelockalloc.md): Allocates and initializes an recursive lock.
- [IORecursiveLockFree](1553031-iorecursivelockfree.md): Frees a recursive lock.
- [IORecursiveLockGetMachLock](1552988-iorecursivelockgetmachlock.md): Accessor to a Mach mutex.
- [IORecursiveLockHaveLock](1552995-iorecursivelockhavelock.md): Check if a recursive lock is held by the calling thread.
- [IORecursiveLockLock](1553020-iorecursivelocklock.md): Lock a recursive lock.
- [IORecursiveLockSleep](1553001-iorecursivelocksleep.md)
- [IORecursiveLockSleepDeadline](1552986-iorecursivelocksleepdeadline.md)
- [IORecursiveLockUnlock](1553032-iorecursivelockunlock.md): Unlock a recursive lock.
- [IORecursiveLockWakeup](1553014-iorecursivelockwakeup.md)
