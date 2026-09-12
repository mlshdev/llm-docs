> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock/unlock()](https://developer.apple.com/documentation/foundation/nsdistributedlock/unlock())

# unlock() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Relinquishes the receiver.

## Declaration

```swift
func unlock()
```

<a id="Discussion"></a>

## Discussion

You should generally use the [unlock()](unlock%28%29.md) method rather than [break()](break%28%29.md) to release a lock.

An `NSGenericException` is raised if the receiver doesn’t already exist.

## See Also

### Relinquishing a Lock

- [break()](break%28%29.md): Forces the lock to be relinquished.

# unlock (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Relinquishes the receiver.

## Declaration

```objectivec
- (void) unlock;
```

<a id="Discussion"></a>

## Discussion

You should generally use the [unlock](unlock%28%29.md) method rather than [breakLock](break%28%29.md) to release a lock.

An `NSGenericException` is raised if the receiver doesn’t already exist.

## See Also

### Relinquishing a Lock

- [breakLock](break%28%29.md): Forces the lock to be relinquished.
