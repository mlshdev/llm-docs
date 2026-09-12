> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1552985-iowritelock](https://developer.apple.com/documentation/kernel/1552985-iowritelock)

# IOWriteLock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
void IOWriteLock(IORWLock *lock);
```

## See Also

### Read/Write Locks

- [IORWLockAlloc](1553010-iorwlockalloc.md): Allocates and initializes a read/write lock.
- [IORWLockFree](1553003-iorwlockfree.md): Frees a read/write lock.
- [IORWLockGetMachLock](1553033-iorwlockgetmachlock.md): Accessor to a Mach read/write lock.
- [IORWLockRead](1553004-iorwlockread.md): Lock a read/write lock for read.
- [IORWLockUnlock](1553011-iorwlockunlock.md): Unlock a read/write lock.
- [IORWLockWrite](1552996-iorwlockwrite.md): Lock a read/write lock for write.
- [IORWUnlock](1553027-iorwunlock.md)
- [IOReadLock](1553022-ioreadlock.md)
