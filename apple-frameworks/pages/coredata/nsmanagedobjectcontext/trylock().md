> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/trylock()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/trylock())

# tryLock() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Attempts to acquire a lock.

> Use a queue style context and -performBlock: instead

## Declaration

```swift
func tryLock() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a lock was acquired, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method returns immediately after the attempt to acquire a lock.

## See Also

### Deprecated instance methods

- [init(concurrencyType:)](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [init()](init%28%29.md): Deprecated.
- [lock()](lock%28%29.md): Deprecated. Attempts to acquire a lock on the context.
- [unlock()](unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.

# tryLock (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Attempts to acquire a lock.

> Use a queue style context and -performBlock: instead

## Declaration

```objectivec
- (BOOL) tryLock;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a lock was acquired, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method returns immediately after the attempt to acquire a lock.

## See Also

### Deprecated instance methods

- [initWithConcurrencyType:](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [init](init%28%29.md): Deprecated.
- [lock](lock%28%29.md): Deprecated. Attempts to acquire a lock on the context.
- [unlock](unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.
