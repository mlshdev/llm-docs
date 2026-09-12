> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock/lock(whencondition:before:)](https://developer.apple.com/documentation/foundation/nsconditionlock/lock(whencondition:before:))

# lock(whenCondition:before:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock before a specified moment in time.

## Declaration

```swift
func lock(whenCondition condition: Int, before limit: Date) -> Bool
```

## Parameters

- `condition`: The condition to match on.
- `limit`: The date by which the lock must be acquired or the attempt will time out.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock is acquired within the time limit, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver’s condition must be equal to `condition` before the locking operation will succeed. This method blocks the thread’s execution until the lock can be acquired or `limit` is reached.

## See Also

### Acquiring and Releasing a Lock

- [lock(before:)](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lock(whenCondition:)](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [try()](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLock(whenCondition:)](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlock(withCondition:)](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.

# lockWhenCondition:beforeDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock before a specified moment in time.

## Declaration

```objectivec
- (BOOL) lockWhenCondition:(NSInteger) condition beforeDate:(NSDate *) limit;
```

## Parameters

- `condition`: The condition to match on.
- `limit`: The date by which the lock must be acquired or the attempt will time out.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock is acquired within the time limit, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver’s condition must be equal to `condition` before the locking operation will succeed. This method blocks the thread’s execution until the lock can be acquired or `limit` is reached.

## See Also

### Acquiring and Releasing a Lock

- [lockBeforeDate:](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lockWhenCondition:](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [tryLock](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLockWhenCondition:](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlockWithCondition:](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.
