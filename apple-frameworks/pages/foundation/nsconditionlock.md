> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock](https://developer.apple.com/documentation/foundation/nsconditionlock)

# NSConditionLock (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A lock that can be associated with specific, user-defined conditions.

## Declaration

```swift
class NSConditionLock
```

<a id="overview"></a>

## Overview

Using an [NSConditionLock](nsconditionlock.md) object, you can ensure that a thread can acquire a lock only if a certain condition is met. Once it has acquired the lock and executed the critical section of code, the thread can relinquish the lock and set the associated condition to something new. The conditions themselves are arbitrary: you define them as needed for your application.

## Topics

### Initializing an NSConditionLock Object

- [init(condition:)](nsconditionlock/init%28condition_%29.md): Initializes a newly allocated `NSConditionLock` object and sets its condition.

### Accessing the Condition

- [condition](nsconditionlock/condition.md): The condition associated with the receiver.

### Acquiring and Releasing a Lock

- [lock(before:)](nsconditionlock/lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lock(whenCondition:)](nsconditionlock/lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lock(whenCondition:before:)](nsconditionlock/lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [try()](nsconditionlock/try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLock(whenCondition:)](nsconditionlock/trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlock(withCondition:)](nsconditionlock/unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.

### Identifying the Condition Lock

- [name](nsconditionlock/name.md): The name associated with the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSLocking](nslocking.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Threads and Locking

- [Thread](thread.md): A thread of execution.
- [NSLocking](nslocking.md): The elementary methods adopted by classes that define lock objects.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.

# NSConditionLock (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A lock that can be associated with specific, user-defined conditions.

## Declaration

```objectivec
@interface NSConditionLock : NSObject
```

<a id="overview"></a>

## Overview

Using an [NSConditionLock](nsconditionlock.md) object, you can ensure that a thread can acquire a lock only if a certain condition is met. Once it has acquired the lock and executed the critical section of code, the thread can relinquish the lock and set the associated condition to something new. The conditions themselves are arbitrary: you define them as needed for your application.

## Topics

### Initializing an NSConditionLock Object

- [initWithCondition:](nsconditionlock/init%28condition_%29.md): Initializes a newly allocated `NSConditionLock` object and sets its condition.

### Accessing the Condition

- [condition](nsconditionlock/condition.md): The condition associated with the receiver.

### Acquiring and Releasing a Lock

- [lockBeforeDate:](nsconditionlock/lock%28before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [lockWhenCondition:](nsconditionlock/lock%28whencondition_%29.md): Attempts to acquire a lock.
- [lockWhenCondition:beforeDate:](nsconditionlock/lock%28whencondition_before_%29.md): Attempts to acquire a lock before a specified moment in time.
- [tryLock](nsconditionlock/try%28%29.md): Attempts to acquire a lock without regard to the receiver’s condition.
- [tryLockWhenCondition:](nsconditionlock/trylock%28whencondition_%29.md): Attempts to acquire a lock if the receiver’s condition is equal to the specified condition.
- [unlockWithCondition:](nsconditionlock/unlock%28withcondition_%29.md): Relinquishes the lock and sets the receiver’s condition.

### Identifying the Condition Lock

- [name](nsconditionlock/name.md): The name associated with the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSLocking](nslocking.md)

## See Also

### Threads and Locking

- [NSThread](thread.md): A thread of execution.
- [NSLocking](nslocking.md): The elementary methods adopted by classes that define lock objects.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.
