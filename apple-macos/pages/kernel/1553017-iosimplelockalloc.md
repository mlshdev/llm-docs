> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553017-iosimplelockalloc](https://developer.apple.com/documentation/kernel/1553017-iosimplelockalloc)

# IOSimpleLockAlloc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Allocates and initializes a spin lock.

## Declaration

```objectivec
IOSimpleLock * IOSimpleLockAlloc(void);
```

<a id="return_value"></a>

## Return Value

Pointer to the allocated lock, or zero on failure.

<a id="discussion"></a>

## Discussion

Allocates and initializes a spin lock in general purpose memory. Spin locks provide non-blocking mutual exclusion for synchronization between thread context and interrupt context, or for multiprocessor synchronization, and are supplied by libkern/locks.h. This function may block and so should not be called from interrupt level or while a spin lock is held. IOSimpleLocks use the global IOKit lock group, IOLockGroup. To simplify kext debugging and lock-heat analysis, consider using lck\_\* locks with a per-driver lock group, as defined in kern/locks.h.

## See Also

### Simple Locks

- [IOSimpleLockInit](1552990-iosimplelockinit.md): Initialize a spin lock.
- [IOSimpleLockDestroy](3380136-iosimplelockdestroy.md)
- [IOSimpleLockFree](1553035-iosimplelockfree.md): Frees a spin lock.
- [IOSimpleLockGetMachLock](1553019-iosimplelockgetmachlock.md): Accessor to a Mach spin lock.
- [IOSimpleLockLock](1552997-iosimplelocklock.md): Lock a spin lock.
- [IOSimpleLockLockDisableInterrupt](1553005-iosimplelocklockdisableinterrupt.md): Lock a spin lock.
- [IOSimpleLockTryLock](1553029-iosimplelocktrylock.md): Attempt to lock a spin lock.
- [IOSimpleLockUnlock](1553015-iosimplelockunlock.md): Unlock a spin lock.
- [IOSimpleLockUnlockEnableInterrupt](1552998-iosimplelockunlockenableinterrup.md): Unlock a spin lock, and restore interrupt state.
