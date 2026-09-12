> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocking/lock()](https://developer.apple.com/documentation/foundation/nslocking/lock())

# lock() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.

## Declaration

```swift
func lock()
```

<a id="Discussion"></a>

## Discussion

An application protects a critical section of code by requiring a thread to acquire a lock before executing the code. Once the critical section is completed, the thread relinquishes the lock by invoking [unlock()](unlock%28%29.md).

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Working with Locks

- [unlock()](unlock%28%29.md): Relinquishes a previously acquired lock.

# lock (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.

## Declaration

```objectivec
- (void) lock;
```

<a id="Discussion"></a>

## Discussion

An application protects a critical section of code by requiring a thread to acquire a lock before executing the code. Once the critical section is completed, the thread relinquishes the lock by invoking [unlock](unlock%28%29.md).

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Working with Locks

- [unlock](unlock%28%29.md): Relinquishes a previously acquired lock.
