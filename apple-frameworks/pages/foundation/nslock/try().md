> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslock/try()](https://developer.apple.com/documentation/foundation/nslock/try())

# try() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock and immediately returns a Boolean value that indicates whether the attempt was successful.

## Declaration

```swift
func `try`() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock was acquired, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Acquiring a Lock

- [lock(before:)](lock%28before_%29.md): Attempts to acquire a lock before a given time and returns a Boolean value indicating whether the attempt was successful.

# tryLock (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to acquire a lock and immediately returns a Boolean value that indicates whether the attempt was successful.

## Declaration

```objectivec
- (BOOL) tryLock;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the lock was acquired, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Acquiring a Lock

- [lockBeforeDate:](lock%28before_%29.md): Attempts to acquire a lock before a given time and returns a Boolean value indicating whether the attempt was successful.
