> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsdatacacheerror/code/errorcacheinvalidationfailed

# FSDataCacheError.Code.errorCacheInvalidationFailed (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

Failed to invalidate (clear) cached data.

## Declaration

```swift
case errorCacheInvalidationFailed
```

## See Also

### Error codes

- [FSDataCacheError.Code.errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSDataCacheError.Code.errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [FSDataCacheError.Code.errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSDataCacheError.Code.errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.

# FSErrorCacheInvalidationFailed (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Failed to invalidate (clear) cached data.

## Declaration

```objectivec
FSErrorCacheInvalidationFailed
```

## See Also

### Error codes

- [FSErrorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSErrorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [FSErrorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSErrorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.
