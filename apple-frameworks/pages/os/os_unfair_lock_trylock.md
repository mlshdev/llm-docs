> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_unfair_lock_trylock](https://developer.apple.com/documentation/os/os_unfair_lock_trylock)

# os_unfair_lock_trylock

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Locks an unfair lock if it is not already locked.

## Declaration

```objectivec
extern bool os_unfair_lock_trylock(os_unfair_lock_t lock);
```

## Parameters

- `lock`: A pointer to the unfair lock to be locked.

<a id="return-value"></a>

## Return Value

`true` if the lock was successfully locked, or `false` if the lock was already locked.

<a id="Discussion"></a>

## Discussion

If this function returns `false`, you must either proceed without having acquired the lock or call [os_unfair_lock_lock](os_unfair_lock_lock.md) directly. Do not attempt to call this function within a retry loop; [os_unfair_lock_lock](os_unfair_lock_lock.md) accomplishes the same task, without hiding the lock waiter from the system or preventing resolution of priority inversions.

## See Also

### Unfair Locking

- [os_unfair_lock](os_unfair_lock.md): A structure that contains the data for an unfair lock.
- [OS_UNFAIR_LOCK_INIT](os_unfair_lock_init.md): A value you use to initialize a new unfair lock.
- [os_unfair_lock_t](os_unfair_lock_t.md): A pointer to an unfair lock structure.
- [os_unfair_lock_lock](os_unfair_lock_lock.md): A low-level lock that allows waiters to block efficiently on contention.
- [os_unfair_lock_lock_with_flags](os_unfair_lock_lock_with_flags.md)
- [os_unfair_lock_unlock](os_unfair_lock_unlock.md): Unlocks an unfair lock.
- [os_unfair_lock_assert_owner](os_unfair_lock_assert_owner.md): Triggers an assertion if the calling thread doesn’t own the specified unfair lock.
- [os_unfair_lock_assert_not_owner](os_unfair_lock_assert_not_owner.md): Triggers an assertion if the calling thread owns the specified unfair lock.
- [os_unfair_lock_flags_t](os_unfair_lock_flags_t.md)
