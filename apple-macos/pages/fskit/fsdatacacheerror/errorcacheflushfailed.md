> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/errorcacheflushfailed](https://developer.apple.com/documentation/fskit/fsdatacacheerror/errorcacheflushfailed)

# errorCacheFlushFailed

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

Failed to flush dirty cached data to storage.

## Declaration

```swift
static var errorCacheFlushFailed: FSDataCacheError.Code { get }
```

## See Also

### Error codes

- [FSDataCacheError.Code](code.md): Error codes specific to data cache operations.
- [errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.
