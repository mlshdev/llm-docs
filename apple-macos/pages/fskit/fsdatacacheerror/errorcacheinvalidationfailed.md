> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/errorcacheinvalidationfailed](https://developer.apple.com/documentation/fskit/fsdatacacheerror/errorcacheinvalidationfailed)

# errorCacheInvalidationFailed

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

Failed to invalidate (clear) cached data.

## Declaration

```swift
static var errorCacheInvalidationFailed: FSDataCacheError.Code { get }
```

## See Also

### Error codes

- [FSDataCacheError.Code](code.md): Error codes specific to data cache operations.
- [errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.
