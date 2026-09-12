> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock/trylock(whencondition:)](https://developer.apple.com/documentation/foundation/nsconditionlock/trylock(whencondition:))

# tryLock(whenCondition:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.

## Declaration

```swift
func tryLock(whenCondition condition: Int) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock could be acquired, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

As part of its implementation, this method invokes [lock(whenCondition:before:)](lock%28whencondition_before_%29.md). This method returns immediately.

## See Also

### Acquiring and Releasing a Lock

- [lock(before:)](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lock(whenCondition:)](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lock(whenCondition:before:)](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [try()](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [unlock(withCondition:)](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.

# tryLockWhenCondition: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.

## Declaration

```objectivec
- (BOOL) tryLockWhenCondition:(NSInteger) condition;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock could be acquired, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

As part of its implementation, this method invokes [lockWhenCondition:beforeDate:](lock%28whencondition_before_%29.md). This method returns immediately.

## See Also

### Acquiring and Releasing a Lock

- [lockBeforeDate:](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lockWhenCondition:](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lockWhenCondition:beforeDate:](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [tryLock](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [unlockWithCondition:](unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.
