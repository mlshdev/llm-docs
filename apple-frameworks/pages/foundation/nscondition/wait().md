> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscondition/wait()](https://developer.apple.com/documentation/foundation/nscondition/wait())

# wait() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until the condition is signaled.

## Declaration

```swift
func wait()
```

<a id="Discussion"></a>

## Discussion

You must lock the receiver prior to calling this method.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [lock()](../nslocking/lock%28%29.md): Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.

### Waiting for the Lock

- [wait(until:)](wait%28until_%29.md): Blocks the current thread until the condition is signaled or the specified time limit is reached.

# wait (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until the condition is signaled.

## Declaration

```objectivec
- (void) wait;
```

<a id="Discussion"></a>

## Discussion

You must lock the receiver prior to calling this method.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [lock](../nslocking/lock%28%29.md): Attempts to acquire a lock, blocking a thread’s execution until the lock can be acquired.

### Waiting for the Lock

- [waitUntilDate:](wait%28until_%29.md): Blocks the current thread until the condition is signaled or the specified time limit is reached.
