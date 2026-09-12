> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1552990-iosimplelockinit](https://developer.apple.com/documentation/kernel/1552990-iosimplelockinit)

# IOSimpleLockInit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Initialize a spin lock.

## Declaration

```objectivec
void IOSimpleLockInit(IOSimpleLock *lock);
```

## Parameters

- `lock`: Pointer to the lock.

<a id="discussion"></a>

## Discussion

Initialize an embedded spin lock, to the unlocked state.

## See Also

### Simple Locks

- [IOSimpleLockAlloc](1553017-iosimplelockalloc.md): Allocates and initializes a spin lock.
- [IOSimpleLockDestroy](3380136-iosimplelockdestroy.md)
- [IOSimpleLockFree](1553035-iosimplelockfree.md): Frees a spin lock.
- [IOSimpleLockGetMachLock](1553019-iosimplelockgetmachlock.md): Accessor to a Mach spin lock.
- [IOSimpleLockLock](1552997-iosimplelocklock.md): Lock a spin lock.
- [IOSimpleLockLockDisableInterrupt](1553005-iosimplelocklockdisableinterrupt.md): Lock a spin lock.
- [IOSimpleLockTryLock](1553029-iosimplelocktrylock.md): Attempt to lock a spin lock.
- [IOSimpleLockUnlock](1553015-iosimplelockunlock.md): Unlock a spin lock.
- [IOSimpleLockUnlockEnableInterrupt](1552998-iosimplelockunlockenableinterrup.md): Unlock a spin lock, and restore interrupt state.
