> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsemaphore](https://developer.apple.com/documentation/dispatch/dispatchsemaphore)

# DispatchSemaphore

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.

## Declaration

```swift
class DispatchSemaphore
```

<a id="overview"></a>

## Overview

A dispatch semaphore is an efficient implementation of a traditional counting semaphore. Dispatch semaphores call down to the kernel only when the calling thread needs to be blocked. If the calling semaphore does not need to block, no kernel call is made.

You increment a semaphore count by calling the [signal()](dispatchsemaphore/signal%28%29.md) method, and decrement a semaphore count by calling [wait()](dispatchsemaphore/wait%28%29.md) or one of its variants that specifies a timeout.

## Topics

### Creating a Semaphore

- [init(value:)](dispatchsemaphore/init%28value_%29.md): Creates new counting semaphore with an initial value.

### Signaling the Semaphore

- [signal()](dispatchsemaphore/signal%28%29.md): Signals (increments) a semaphore.

### Blocking on the Semaphore

- [wait()](dispatchsemaphore/wait%28%29.md): Waits for, or decrements, a semaphore.
- [wait(timeout:)](dispatchsemaphore/wait%28timeout_%29.md): Waits for, or decrements, a semaphore.
- [wait(wallTimeout:)](dispatchsemaphore/wait%28walltimeout_%29.md): Waits for, or decrements, a semaphore.

## Relationships

### Inherits From

- [DispatchObject](dispatchobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Task Synchronization

- [Dispatch Semaphore](dispatch-semaphore.md): An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.
- [Dispatch Barrier](dispatch-barrier.md): A synchronization point for tasks executing in a concurrent dispatch queue.
