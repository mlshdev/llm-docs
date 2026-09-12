> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553001-iorecursivelocksleep](https://developer.apple.com/documentation/kernel/1553001-iorecursivelocksleep)

# IORecursiveLockSleep

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
int IORecursiveLockSleep(IORecursiveLock *_lock, void *event, UInt32 interType);
```

## See Also

### Recursive Locks

- [IORecursiveLockAlloc](1553013-iorecursivelockalloc.md): Allocates and initializes an recursive lock.
- [IORecursiveLockFree](1553031-iorecursivelockfree.md): Frees a recursive lock.
- [IORecursiveLockGetMachLock](1552988-iorecursivelockgetmachlock.md): Accessor to a Mach mutex.
- [IORecursiveLockHaveLock](1552995-iorecursivelockhavelock.md): Check if a recursive lock is held by the calling thread.
- [IORecursiveLockLock](1553020-iorecursivelocklock.md): Lock a recursive lock.
- [IORecursiveLockSleepDeadline](1552986-iorecursivelocksleepdeadline.md)
- [IORecursiveLockTryLock](1552993-iorecursivelocktrylock.md): Attempt to lock a recursive lock.
- [IORecursiveLockUnlock](1553032-iorecursivelockunlock.md): Unlock a recursive lock.
- [IORecursiveLockWakeup](1553014-iorecursivelockwakeup.md)
