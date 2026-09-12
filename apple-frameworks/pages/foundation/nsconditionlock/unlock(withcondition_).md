> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock/unlock(withcondition:)](https://developer.apple.com/documentation/foundation/nsconditionlock/unlock(withcondition:))

# unlock(withCondition:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Relinquishes the lock and sets the receiver’s condition.

## Declaration

```swift
func unlock(withCondition condition: Int)
```

## Parameters

- `condition`: The user-defined condition for the lock. The value of `condition` is user-defined; see the class description for more information.

## See Also

### Acquiring and Releasing a Lock

- [lock(before:)](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lock(whenCondition:)](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lock(whenCondition:before:)](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [try()](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLock(whenCondition:)](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.

# unlockWithCondition: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Relinquishes the lock and sets the receiver’s condition.

## Declaration

```objectivec
- (void) unlockWithCondition:(NSInteger) condition;
```

## Parameters

- `condition`: The user-defined condition for the lock. The value of `condition` is user-defined; see the class description for more information.

## See Also

### Acquiring and Releasing a Lock

- [lockBeforeDate:](lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lockWhenCondition:](lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lockWhenCondition:beforeDate:](lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [tryLock](try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLockWhenCondition:](trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
