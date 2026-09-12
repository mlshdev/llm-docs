> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch-semaphore](https://developer.apple.com/documentation/dispatch/dispatch-semaphore)

# Dispatch Semaphore (Swift)

**Framework:** Dispatch  
**Kind:** API Collection

An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.

<a id="overview"></a>

## Overview

A dispatch semaphore is an efficient implementation of a traditional counting semaphore. Dispatch semaphores call down to the kernel only when the calling thread needs to be blocked. If the calling semaphore does not need to block, no kernel call is made.

You increment a semaphore count by calling the [signal()](dispatchsemaphore/signal%28%29.md) method, and decrement a semaphore count by calling [dispatch_semaphore_wait](dispatch_semaphore_wait.md) or one of its variants that specifies a timeout.

## Topics

### Creating a Semaphore

- [init(value:)](dispatchsemaphore/init%28value_%29.md): Creates new counting semaphore with an initial value.
- [dispatch_semaphore_t](dispatch_semaphore_t.md): A dispatch semaphore object.

## See Also

### Task Synchronization

- [DispatchSemaphore](dispatchsemaphore.md): An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.
- [Dispatch Barrier](dispatch-barrier.md): A synchronization point for tasks executing in a concurrent dispatch queue.

# Dispatch Semaphore (Objective-C)

**Framework:** Dispatch  
**Kind:** API Collection

An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.

<a id="overview"></a>

## Overview

A dispatch semaphore is an efficient implementation of a traditional counting semaphore. Dispatch semaphores call down to the kernel only when the calling thread needs to be blocked. If the calling semaphore does not need to block, no kernel call is made.

You increment a semaphore count by calling the [signal()](dispatchsemaphore/signal%28%29.md) method, and decrement a semaphore count by calling [dispatch_semaphore_wait](dispatch_semaphore_wait.md) or one of its variants that specifies a timeout.

## Topics

### Creating a Semaphore

- [dispatch_semaphore_create](dispatchsemaphore/init%28value_%29.md): Creates new counting semaphore with an initial value.
- [dispatch_semaphore_t](dispatch_semaphore_t.md): A dispatch semaphore object.
- [OS_dispatch_semaphore](os_dispatch_semaphore.md)

### Signaling the Semaphore

- [dispatch_semaphore_signal](dispatch_semaphore_signal.md): Signals (increments) a semaphore.

### Blocking on the Semaphore

- [dispatch_semaphore_wait](dispatch_semaphore_wait.md): Waits for (decrements) a semaphore.

## See Also

### Task Synchronization

- [Dispatch Barrier](dispatch-barrier.md): A synchronization point for tasks executing in a concurrent dispatch queue.
