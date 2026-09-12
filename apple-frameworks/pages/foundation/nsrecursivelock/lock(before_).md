> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrecursivelock/lock(before:)](https://developer.apple.com/documentation/foundation/nsrecursivelock/lock(before:))

# lock(before:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock before a given date.

## Declaration

```swift
func lock(before limit: Date) -> Bool
```

## Parameters

- `limit`: The time before which the lock should be acquired.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock is acquired before `limit`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The thread is blocked until the receiver acquires the lock or `limit` is reached.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Acquiring a Lock

- [try()](try%28%29.md): Attempts to acquire a lock, and immediately returns a Boolean value that indicates whether the attempt was successful.

# lockBeforeDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock before a given date.

## Declaration

```objectivec
- (BOOL) lockBeforeDate:(NSDate *) limit;
```

## Parameters

- `limit`: The time before which the lock should be acquired.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock is acquired before `limit`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The thread is blocked until the receiver acquires the lock or `limit` is reached.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Acquiring a Lock

- [tryLock](try%28%29.md): Attempts to acquire a lock, and immediately returns a Boolean value that indicates whether the attempt was successful.
