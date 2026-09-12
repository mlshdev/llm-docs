> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock/break()](https://developer.apple.com/documentation/foundation/nsdistributedlock/break())

# break() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Forces the lock to be relinquished.

## Declaration

```swift
func `break`()
```

<a id="Discussion"></a>

## Discussion

This method always succeeds unless the lock has been damaged. If another process has already unlocked or broken the lock, this method has no effect. You should generally use [unlock()](unlock%28%29.md) rather than [break()](break%28%29.md) to relinquish a lock.

> **Warning**

>  Because `breakLock` can release another process’s lock, it should be used with great caution.

Even if you break a lock, there’s no guarantee that you will then be able to acquire the lock—another process might get it before your [try()](try%28%29.md) is invoked.

Raises an `NSGenericException` if the lock could not be removed.

## See Also

### Relinquishing a Lock

- [unlock()](unlock%28%29.md): Relinquishes the receiver.

# breakLock (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Forces the lock to be relinquished.

## Declaration

```objectivec
- (void) breakLock;
```

<a id="Discussion"></a>

## Discussion

This method always succeeds unless the lock has been damaged. If another process has already unlocked or broken the lock, this method has no effect. You should generally use [unlock](unlock%28%29.md) rather than [breakLock](break%28%29.md) to relinquish a lock.

> **Warning**

>  Because `breakLock` can release another process’s lock, it should be used with great caution.

Even if you break a lock, there’s no guarantee that you will then be able to acquire the lock—another process might get it before your [tryLock](try%28%29.md) is invoked.

Raises an `NSGenericException` if the lock could not be removed.

## See Also

### Relinquishing a Lock

- [unlock](unlock%28%29.md): Relinquishes the receiver.
