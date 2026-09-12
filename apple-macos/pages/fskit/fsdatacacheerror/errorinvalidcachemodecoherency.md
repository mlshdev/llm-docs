> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/errorinvalidcachemodecoherency](https://developer.apple.com/documentation/fskit/fsdatacacheerror/errorinvalidcachemodecoherency)

# errorInvalidCacheModeCoherency

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

The requested cache mode and coherency type combination is invalid.

## Declaration

```swift
static var errorInvalidCacheModeCoherency: FSDataCacheError.Code { get }
```

## See Also

### Error codes

- [FSDataCacheError.Code](code.md): Error codes specific to data cache operations.
- [errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.
