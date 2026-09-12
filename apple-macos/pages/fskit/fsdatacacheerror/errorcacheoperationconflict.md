> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/errorcacheoperationconflict](https://developer.apple.com/documentation/fskit/fsdatacacheerror/errorcacheoperationconflict)

# errorCacheOperationConflict

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

A conflicting cache operation is in progress.

## Declaration

```swift
static var errorCacheOperationConflict: FSDataCacheError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs when multiple cache operations on the same item conflict, such as attempting to change cache mode while I/O is active.

## See Also

### Error codes

- [FSDataCacheError.Code](code.md): Error codes specific to data cache operations.
- [errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [errorInvalidCacheTransition](errorinvalidcachetransition.md): The cache transition is not allowed.
- [errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
