> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/mutex/withlock(_:)](https://developer.apple.com/documentation/synchronization/mutex/withlock(_:))

# withLock(\_:)

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Calls the given closure after acquiring the lock and then releases ownership.

## Declaration

```swift
borrowing func withLock<Result, E>(_ body: (inout sending Value) throws(E) -> sending Result) throws(E) -> sending Result where E : Error, Result : ~Copyable
```

## Parameters

- `body`: A closure with a parameter of `Value` that has exclusive access to the value being stored within this mutex. This closure is considered the critical section as it will only be executed once the calling thread has acquired the lock.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure parameter.

<a id="discussion"></a>

## Discussion

This method is equivalent to the following sequence of code:

```swift
mutex.lock()
defer {
  mutex.unlock()
}
return try body(&value)
```

> **Warning**

> Recursive calls to `withLock` within the closure parameter has behavior that is platform dependent. Some platforms may choose to panic the process, deadlock, or leave this behavior unspecified. This will never reacquire the lock however.
