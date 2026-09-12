> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/code](https://developer.apple.com/documentation/fskit/fsdatacacheerror/code)

# FSDataCacheError.Code (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Error codes specific to data cache operations.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [FSDataCacheError.Code.errorInvalidCacheModeCoherency](code/errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSDataCacheError.Code.errorInvalidCacheTransition](code/errorinvalidcachetransition.md): The cache transition is not allowed.
- [FSDataCacheError.Code.errorCacheFlushFailed](code/errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSDataCacheError.Code.errorCacheInvalidationFailed](code/errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [FSDataCacheError.Code.errorCacheOperationConflict](code/errorcacheoperationconflict.md): A conflicting cache operation is in progress.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error codes

- [errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.

# FSDataCacheErrorCode (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Error codes specific to data cache operations.

## Declaration

```objectivec
enum FSDataCacheErrorCode : NSInteger;
```

## Topics

### Error codes

- [FSErrorInvalidCacheModeCoherency](code/errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSErrorInvalidCacheTransition](code/errorinvalidcachetransition.md): The cache transition is not allowed.
- [FSErrorCacheFlushFailed](code/errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSErrorCacheInvalidationFailed](code/errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [FSErrorCacheOperationConflict](code/errorcacheoperationconflict.md): A conflicting cache operation is in progress.
