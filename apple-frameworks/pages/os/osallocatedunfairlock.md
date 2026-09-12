> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock](https://developer.apple.com/documentation/os/osallocatedunfairlock)

# OSAllocatedUnfairLock

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A structure that creates an unfair lock.

## Declaration

```swift
@frozen struct OSAllocatedUnfairLock<State>
```

<a id="overview"></a>

## Overview

Unfair locks are low-level locks that block efficiently on contention. They’re useful for protecting code that loads stored resources. However, it’s unsafe to use [os_unfair_lock](os_unfair_lock.md) from Swift because it’s a value type and, therefore, doesn’t have a stable memory address. That means when you call [os_unfair_lock_lock](os_unfair_lock_lock.md) or [os_unfair_lock_unlock](os_unfair_lock_unlock.md) and pass a lock object using the `&` operator, the system may lock or unlock the wrong object.

Instead, use [OSAllocatedUnfairLock](osallocatedunfairlock.md), which avoids that pitfall because it doesn’t function as a value type, despite being a structure. All copied instances of an [OSAllocatedUnfairLock](osallocatedunfairlock.md) control the same underlying lock allocation.

> **Important**

>  If you’ve existing Swift code that uses [os_unfair_lock](os_unfair_lock.md), change it to use [OSAllocatedUnfairLock](osallocatedunfairlock.md) to ensure correct locking behavior.

To create a lock that protects operation state, create an enumeration that contains the possible states, then create a lock object, passing the initial state. Here’s an example of what that looks like for an asset load operation:

```swift
enum MyState {
    case idle
    case loading
    case complete(MyAsset)
    case error(Error)
}
let protectedState = OSAllocatedUnfairLock(initialState: MyState.idle)
```

Storing the state inside the lock helps track what the lock is protecting, and provides a way to safely access the state. To begin using the lock, call `withLock(_:)` or `withLockIfAvailable(_:)`, passing a closure that contains the code for the lock to protect, like in the following example:

```swift
func myLoadMethod() {
    protectedState.withLock { state in
        state = .loading
    }
    var (resource, error) = loadMyResources()
    if resource != nil {
        protectedState.withLock { state in
            state = .complete(resource)
        }
    } else {
        protectedState.withLock { state in
            state = .error(error!)
        }
    }
}
```

To protect an operation with an externally defined state or no state, create a lock object without specifying an initial state. Nonscoped locking is more flexible, but offers no assistance in tracking the state of the operation the lock protects. To use a nonscoped lock, use `withLock(_:)` or `withLockIfAvailable(_:)`.

```swift
let myLock = OSAllocatedUnfairLock()
myLock.withLock {
    // Code that needs protection.
}
```

You can also use [OSAllocatedUnfairLock](osallocatedunfairlock.md) with the more traditional lock/unlock approach by calling [lock()](osallocatedunfairlock/lock%28%29.md) before executing code that needs protection, and [unlock()](osallocatedunfairlock/unlock%28%29.md) upon completion, like this:

```swift
myLock.lock()
// Code that needs protection.
myLock.unlock()
```

When using this approach, you must call [unlock()](osallocatedunfairlock/unlock%28%29.md) from the same thread you use to call [lock()](osallocatedunfairlock/lock%28%29.md). Because of this, it’s unsafe to use this approach across an `await` suspension point. When using a lock with asynchronous code, lock using a closure or, even better, consider using an [Actor](https://developer.apple.com/documentation/swift/actor).

> **Warning**

>  [OSAllocatedUnfairLock](osallocatedunfairlock.md) isn’t a recursive lock. Attempting to lock an object more than once from the same thread without unlocking in between triggers a runtime exception.

## Topics

### Creating a lock object

- [init()](osallocatedunfairlock/init%28%29.md): Conforms when `State` is `()`. Creates a lock object that doesn’t protect state data.
- [init(initialState:)](osallocatedunfairlock/init%28initialstate_%29.md): Conforms when `State` conforms to `Sendable`. Creates a lock object that maintains and protects state data.

### Using locks

- [lock()](osallocatedunfairlock/lock%28%29.md): Conforms when `State` is `()`. Acquires a lock.
- [lockIfAvailable()](osallocatedunfairlock/lockifavailable%28%29.md): Conforms when `State` is `()`. Attempts to acquire a lock.
- [unlock()](osallocatedunfairlock/unlock%28%29.md): Conforms when `State` is `()`. Ends the lock.

### Determining lock ownership

- [OSAllocatedUnfairLock.Ownership](osallocatedunfairlock/ownership.md): An enumeration that represents the ownership status of an unfair lock.
- [precondition(\_:)](osallocatedunfairlock/precondition%28__%29.md): Asserts if the lock object fails to meet specified ownership requirements.

### Initializers

- [init(uncheckedState:)](osallocatedunfairlock/init%28uncheckedstate_%29.md)

### Instance Methods

- [lock(flags:)](osallocatedunfairlock/lock%28flags_%29.md): Conforms when `State` is `()`.
- [withLock(\_:)](osallocatedunfairlock/withlock%28__%29-1uy7m.md)
- [withLock(\_:)](osallocatedunfairlock/withlock%28__%29-hple.md): Conforms when `State` is `()`.
- [withLock(flags:\_:)](osallocatedunfairlock/withlock%28flags___%29-1ub4c.md)
- [withLock(flags:\_:)](osallocatedunfairlock/withlock%28flags___%29-u2xj.md): Conforms when `State` is `()`.
- [withLockIfAvailable(\_:)](osallocatedunfairlock/withlockifavailable%28__%29-1rp3w.md): Conforms when `State` is `()`.
- [withLockIfAvailable(\_:)](osallocatedunfairlock/withlockifavailable%28__%29-3kw0o.md)
- [withLockIfAvailableUnchecked(\_:)](osallocatedunfairlock/withlockifavailableunchecked%28__%29-15q0y.md)
- [withLockIfAvailableUnchecked(\_:)](osallocatedunfairlock/withlockifavailableunchecked%28__%29-6gji7.md): Conforms when `State` is `()`.
- [withLockUnchecked(\_:)](osallocatedunfairlock/withlockunchecked%28__%29-7qywq.md)
- [withLockUnchecked(\_:)](osallocatedunfairlock/withlockunchecked%28__%29-9v03m.md): Conforms when `State` is `()`.
- [withLockUnchecked(flags:\_:)](osallocatedunfairlock/withlockunchecked%28flags___%29-8cv64.md)
- [withLockUnchecked(flags:\_:)](osallocatedunfairlock/withlockunchecked%28flags___%29-9iq8s.md): Conforms when `State` is `()`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift Wrappers

- [OSAllocatedUnfairLockFlags](osallocatedunfairlockflags.md)
