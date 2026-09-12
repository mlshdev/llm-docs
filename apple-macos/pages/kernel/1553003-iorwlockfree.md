> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1553003-iorwlockfree](https://developer.apple.com/documentation/kernel/1553003-iorwlockfree)

# IORWLockFree

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

Frees a read/write lock.

## Declaration

```objectivec
void IORWLockFree(struct IORWLock *lock);
```

```objectivec
void IORWLockFree(IORWLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="discussion"></a>

## Discussion

Frees a lock allocated with IORWLockAlloc. Lock should be unlocked with no waiters.

## See Also

### Read/Write Locks

- [IORWLockAlloc](1553010-iorwlockalloc.md): Allocates and initializes a read/write lock.
- [IORWLockGetMachLock](1553033-iorwlockgetmachlock.md): Accessor to a Mach read/write lock.
- [IORWLockRead](1553004-iorwlockread.md): Lock a read/write lock for read.
- [IORWLockUnlock](1553011-iorwlockunlock.md): Unlock a read/write lock.
- [IORWLockWrite](1552996-iorwlockwrite.md): Lock a read/write lock for write.
- [IORWUnlock](1553027-iorwunlock.md)
- [IOWriteLock](1552985-iowritelock.md)
- [IOReadLock](1553022-ioreadlock.md)
