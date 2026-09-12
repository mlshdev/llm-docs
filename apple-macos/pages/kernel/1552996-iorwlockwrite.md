> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1552996-iorwlockwrite](https://developer.apple.com/documentation/kernel/1552996-iorwlockwrite)

# IORWLockWrite

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Function  
**Availability:** DriverKit 24.4+ · macOS 10.0+

Lock a read/write lock for write.

## Declaration

```objectivec
void IORWLockWrite(struct IORWLock *lock);
```

```objectivec
void IORWLockWrite(IORWLock *lock);
```

## Parameters

- `lock`: Pointer to the allocated lock.

<a id="discussion"></a>

## Discussion

Lock the lock for write, allowing one writer exlusive access. If the lock is held for read or write, block waiting for its unlock. This function may block and so should not be called from interrupt level or while a spin lock is held. Locking the lock recursively from one thread, for read or write, can result in deadlock.

## See Also

### Read/Write Locks

- [IORWLockAlloc](1553010-iorwlockalloc.md): Allocates and initializes a read/write lock.
- [IORWLockFree](1553003-iorwlockfree.md): Frees a read/write lock.
- [IORWLockGetMachLock](1553033-iorwlockgetmachlock.md): Accessor to a Mach read/write lock.
- [IORWLockRead](1553004-iorwlockread.md): Lock a read/write lock for read.
- [IORWLockUnlock](1553011-iorwlockunlock.md): Unlock a read/write lock.
- [IORWUnlock](1553027-iorwunlock.md)
- [IOWriteLock](1552985-iowritelock.md)
- [IOReadLock](1553022-ioreadlock.md)
