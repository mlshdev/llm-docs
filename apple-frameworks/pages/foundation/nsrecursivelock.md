> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrecursivelock](https://developer.apple.com/documentation/foundation/nsrecursivelock)

# NSRecursiveLock (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A lock that may be acquired multiple times by the same thread without causing a deadlock.

## Declaration

```swift
class NSRecursiveLock
```

<a id="overview"></a>

## Overview

[NSRecursiveLock](nsrecursivelock.md) defines a lock that may be acquired multiple times by the same thread without causing a deadlock, a situation where a thread is permanently blocked waiting for itself to relinquish a lock. While the locking thread has one or more locks, all other threads are prevented from accessing the code protected by the lock.

## Topics

### Acquiring a Lock

- [lock(before:)](nsrecursivelock/lock%28before_%29.md): Attempts to acquire a lock before a given date.
- [try()](nsrecursivelock/try%28%29.md): Attempts to acquire a lock, and immediately returns a Boolean value that indicates whether the attempt was successful.

### Naming the Lock

- [name](nsrecursivelock/name.md): The name associated with the receiver.

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
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.

# NSRecursiveLock (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A lock that may be acquired multiple times by the same thread without causing a deadlock.

## Declaration

```objectivec
@interface NSRecursiveLock : NSObject
```

<a id="overview"></a>

## Overview

[NSRecursiveLock](nsrecursivelock.md) defines a lock that may be acquired multiple times by the same thread without causing a deadlock, a situation where a thread is permanently blocked waiting for itself to relinquish a lock. While the locking thread has one or more locks, all other threads are prevented from accessing the code protected by the lock.

## Topics

### Acquiring a Lock

- [lockBeforeDate:](nsrecursivelock/lock%28before_%29.md): Attempts to acquire a lock before a given date.
- [tryLock](nsrecursivelock/try%28%29.md): Attempts to acquire a lock, and immediately returns a Boolean value that indicates whether the attempt was successful.

### Naming the Lock

- [name](nsrecursivelock/name.md): The name associated with the receiver.

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
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.
