> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock/lock(whencondition:)](https://developer.apple.com/documentation/foundation/nsconditionlock/lock(whencondition:))

# lock(whenCondition:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock.

## Declaration

```swift
func lock(whenCondition condition: Int)
```

## Parameters

- `condition`: The condition to match on.

<a id="Discussion"></a>

## Discussion

The receiver’s condition must be equal to `condition` before the locking operation will succeed. This method blocks the thread’s execution until the lock can be acquired.

## See Also

### Acquiring and Releasing a Lock

- [lock(before:)](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lock(whenCondition:before:)](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [try()](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLock(whenCondition:)](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlock(withCondition:)](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.

# lockWhenCondition: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock.

## Declaration

```objectivec
- (void) lockWhenCondition:(NSInteger) condition;
```

## Parameters

- `condition`: The condition to match on.

<a id="Discussion"></a>

## Discussion

The receiver’s condition must be equal to `condition` before the locking operation will succeed. This method blocks the thread’s execution until the lock can be acquired.

## See Also

### Acquiring and Releasing a Lock

- [lockBeforeDate:](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lockWhenCondition:beforeDate:](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [tryLock](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLockWhenCondition:](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlockWithCondition:](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.
