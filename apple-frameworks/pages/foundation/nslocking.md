> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocking](https://developer.apple.com/documentation/foundation/nslocking)

# NSLocking (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The elementary methods adopted by classes that define lock objects.

## Declaration

```swift
protocol NSLocking
```

<a id="overview"></a>

## Overview

A lock object is used to coordinate the actions of multiple threads of execution within a single application. By using a lock object, an application can protect critical sections of code from being executed simultaneously by separate threads, thus protecting shared data and other shared resources from corruption.

## Topics

### Working with Locks

- [lock()](nslocking/lock%28%29.md): Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.
- [unlock()](nslocking/unlock%28%29.md): Relinquishes a previously acquired lock.

### Instance Methods

- [withLock(\_:)](nslocking/withlock%28__%29.md)

## Relationships

### Conforming Types

- [NSCondition](nscondition.md)
- [NSConditionLock](nsconditionlock.md)
- [NSLock](nslock.md)
- [NSRecursiveLock](nsrecursivelock.md)

## See Also

### Threads and Locking

- [Thread](thread.md): A thread of execution.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.

# NSLocking (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The elementary methods adopted by classes that define lock objects.

## Declaration

```objectivec
@protocol NSLocking
```

<a id="overview"></a>

## Overview

A lock object is used to coordinate the actions of multiple threads of execution within a single application. By using a lock object, an application can protect critical sections of code from being executed simultaneously by separate threads, thus protecting shared data and other shared resources from corruption.

## Topics

### Working with Locks

- [lock](nslocking/lock%28%29.md): Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.
- [unlock](nslocking/unlock%28%29.md): Relinquishes a previously acquired lock.

## Relationships

### Conforming Types

- [NSCondition](nscondition.md)
- [NSConditionLock](nsconditionlock.md)
- [NSLock](nslock.md)
- [NSRecursiveLock](nsrecursivelock.md)

## See Also

### Threads and Locking

- [NSThread](thread.md): A thread of execution.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.
