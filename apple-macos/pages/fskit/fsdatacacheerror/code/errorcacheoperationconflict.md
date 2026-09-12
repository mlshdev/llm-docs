> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/code/errorcacheoperationconflict](https://developer.apple.com/documentation/fskit/fsdatacacheerror/code/errorcacheoperationconflict)

# FSDataCacheError.Code.errorCacheOperationConflict (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

A conflicting cache operation is in progress.

## Declaration

```swift
case errorCacheOperationConflict
```

<a id="discussion"></a>

## Discussion

This error occurs when multiple cache operations on the same item conflict, such as attempting to change cache mode while I/O is active.

## See Also

### Error codes

- [FSDataCacheError.Code.errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSDataCacheError.Code.errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [FSDataCacheError.Code.errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSDataCacheError.Code.errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.

# FSErrorCacheOperationConflict (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

A conflicting cache operation is in progress.

## Declaration

```objectivec
FSErrorCacheOperationConflict
```

<a id="discussion"></a>

## Discussion

This error occurs when multiple cache operations on the same item conflict, such as attempting to change cache mode while I/O is active.

## See Also

### Error codes

- [FSErrorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSErrorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [FSErrorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSErrorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
