> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/unlock()](https://developer.apple.com/documentation/scenekit/scntransaction/unlock())

# unlock() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Relinquishes a previously acquired transaction lock.

## Declaration

```swift
class func unlock()
```

<a id="Discussion"></a>

## Discussion

See the [lock()](lock%28%29.md) method for more details on transaction locking.

## See Also

### Managing Concurrency

- [lock()](lock%28%29.md): Attempts to acquire a recursive spinlock to ensure the validity of values you retrieve during the transaction.

# unlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Relinquishes a previously acquired transaction lock.

## Declaration

```objectivec
+ (void) unlock;
```

<a id="Discussion"></a>

## Discussion

See the [lock](lock%28%29.md) method for more details on transaction locking.

## See Also

### Managing Concurrency

- [lock](lock%28%29.md): Attempts to acquire a recursive spinlock to ensure the validity of values you retrieve during the transaction.
