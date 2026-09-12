> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock/lock(before:)](https://developer.apple.com/documentation/foundation/nsconditionlock/lock(before:))

# lock(before:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock before a specified moment in time.

## Declaration

```swift
func lock(before limit: Date) -> Bool
```

## Parameters

- `limit`: The date by which the lock must be acquired or the attempt will time out.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock is acquired within the time limit, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The condition associated with the receiver isn’t taken into account in this operation. This method blocks the thread’s execution until the receiver acquires the lock or `limit` is reached.

## See Also

### Acquiring and Releasing a Lock

- [lock(whenCondition:)](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lock(whenCondition:before:)](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [try()](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLock(whenCondition:)](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlock(withCondition:)](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.

# lockBeforeDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock before a specified moment in time.

## Declaration

```objectivec
- (BOOL) lockBeforeDate:(NSDate *) limit;
```

## Parameters

- `limit`: The date by which the lock must be acquired or the attempt will time out.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock is acquired within the time limit, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The condition associated with the receiver isn’t taken into account in this operation. This method blocks the thread’s execution until the receiver acquires the lock or `limit` is reached.

## See Also

### Acquiring and Releasing a Lock

- [lockWhenCondition:](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lockWhenCondition:beforeDate:](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [tryLock](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLockWhenCondition:](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlockWithCondition:](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.
