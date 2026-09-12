> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/unlock()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/unlock())

# unlock() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Relinquishes a previously acquired lock.

> Use a queue style context and -performBlockAndWait: instead

## Declaration

```swift
func unlock()
```

## See Also

### Deprecated instance methods

- [init(concurrencyType:)](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [init()](init%28%29.md): Deprecated.
- [lock()](lock%28%29.md): Deprecated. Attempts to acquire a lock on the context.
- [tryLock()](trylock%28%29.md): Deprecated. Attempts to acquire a lock.

# unlock (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Relinquishes a previously acquired lock.

> Use a queue style context and -performBlockAndWait: instead

## Declaration

```objectivec
- (void) unlock;
```

## See Also

### Deprecated instance methods

- [initWithConcurrencyType:](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [init](init%28%29.md): Deprecated.
- [lock](lock%28%29.md): Deprecated. Attempts to acquire a lock on the context.
- [tryLock](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
