> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock](https://developer.apple.com/documentation/foundation/nsdistributedlock)

# NSDistributedLock (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.

## Declaration

```swift
class NSDistributedLock
```

<a id="overview"></a>

## Overview

The lock is implemented by an entry (such as a file or directory) in the file system. For multiple applications to use an [NSDistributedLock](nsdistributedlock.md) object to coordinate their activities, the lock must be writable on a file system accessible to all hosts on which the applications might be running.

Use the [try()](nsdistributedlock/try%28%29.md) method to attempt to acquire a lock. You should generally use the [unlock()](nsdistributedlock/unlock%28%29.md) method to release the lock rather than [break()](nsdistributedlock/break%28%29.md).

[NSDistributedLock](nsdistributedlock.md) doesn’t conform to the [NSLocking](nslocking.md) protocol, nor does it have a `lock` method. The protocol’s [lock()](nslocking/lock%28%29.md) method is intended to block the execution of the thread until successful. For an [NSDistributedLock](nsdistributedlock.md) object, this could mean polling the file system at some predetermined rate. A better solution is to provide the [try()](nsdistributedlock/try%28%29.md) method and let you determine the polling frequency that makes sense for your application.

## Topics

### Creating an NSDistributedLock

- [init(path:)](nsdistributedlock/init%28path_%29.md): Initializes an `NSDistributedLock` object to use as the lock the file-system entry specified by a given path.

### Acquiring a Lock

- [try()](nsdistributedlock/try%28%29.md): Attempts to acquire the receiver and immediately returns a Boolean value that indicates whether the attempt was successful.

### Relinquishing a Lock

- [break()](nsdistributedlock/break%28%29.md): Forces the lock to be relinquished.
- [unlock()](nsdistributedlock/unlock%28%29.md): Relinquishes the receiver.

### Getting Lock Information

- [lockDate](nsdistributedlock/lockdate.md): Returns the time the receiver was acquired by any of the `NSDistributedLock` objects using the same path.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Threads and Locking

- [Thread](thread.md): A thread of execution.
- [NSLocking](nslocking.md): The elementary methods adopted by classes that define lock objects.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.

# NSDistributedLock (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.

## Declaration

```objectivec
@interface NSDistributedLock : NSObject
```

<a id="overview"></a>

## Overview

The lock is implemented by an entry (such as a file or directory) in the file system. For multiple applications to use an [NSDistributedLock](nsdistributedlock.md) object to coordinate their activities, the lock must be writable on a file system accessible to all hosts on which the applications might be running.

Use the [tryLock](nsdistributedlock/try%28%29.md) method to attempt to acquire a lock. You should generally use the [unlock](nsdistributedlock/unlock%28%29.md) method to release the lock rather than [breakLock](nsdistributedlock/break%28%29.md).

[NSDistributedLock](nsdistributedlock.md) doesn’t conform to the [NSLocking](nslocking.md) protocol, nor does it have a `lock` method. The protocol’s [lock](nslocking/lock%28%29.md) method is intended to block the execution of the thread until successful. For an [NSDistributedLock](nsdistributedlock.md) object, this could mean polling the file system at some predetermined rate. A better solution is to provide the [tryLock](nsdistributedlock/try%28%29.md) method and let you determine the polling frequency that makes sense for your application.

## Topics

### Creating an NSDistributedLock

- [lockWithPath:](nsdistributedlock/lockwithpath_.md): Returns an `NSDistributedLock` object initialized to use as the locking object the file-system entry specified by a given path.
- [initWithPath:](nsdistributedlock/init%28path_%29.md): Initializes an `NSDistributedLock` object to use as the lock the file-system entry specified by a given path.

### Acquiring a Lock

- [tryLock](nsdistributedlock/try%28%29.md): Attempts to acquire the receiver and immediately returns a Boolean value that indicates whether the attempt was successful.

### Relinquishing a Lock

- [breakLock](nsdistributedlock/break%28%29.md): Forces the lock to be relinquished.
- [unlock](nsdistributedlock/unlock%28%29.md): Relinquishes the receiver.

### Getting Lock Information

- [lockDate](nsdistributedlock/lockdate.md): Returns the time the receiver was acquired by any of the `NSDistributedLock` objects using the same path.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Threads and Locking

- [NSThread](thread.md): A thread of execution.
- [NSLocking](nslocking.md): The elementary methods adopted by classes that define lock objects.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.
