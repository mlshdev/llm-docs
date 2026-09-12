> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/mutex](https://developer.apple.com/documentation/synchronization/mutex)

# Mutex

**Framework:** Synchronization  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A synchronization primitive that protects shared mutable state via mutual exclusion.

## Declaration

```swift
@frozen struct Mutex<Value> where Value : ~Copyable
```

<a id="overview"></a>

## Overview

The `Mutex` type offers non-recursive exclusive access to the state it is protecting by blocking threads attempting to acquire the lock. Only one execution context at a time has access to the value stored within the `Mutex` allowing for exclusive access.

An example use of `Mutex` in a class used simultaneously by many threads protecting a `Dictionary` value:

```swift
class Manager {
  let cache = Mutex<[Key: Resource]>([:])

  func saveResource(_ resource: Resource, as key: Key) {
    cache.withLock {
      $0[key] = resource
    }
  }
}
```

## Topics

### Initializers

- [init(\_:)](mutex/init%28__%29.md): Initializes a value of this mutex with the given initial state.

### Instance Methods

- [withLock(\_:)](mutex/withlock%28__%29.md): Calls the given closure after acquiring the lock and then releases ownership.
- [withLockIfAvailable(\_:)](mutex/withlockifavailable%28__%29.md): Attempts to acquire the lock and then calls the given closure if successful.

## Relationships

### Conforms To

- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)
