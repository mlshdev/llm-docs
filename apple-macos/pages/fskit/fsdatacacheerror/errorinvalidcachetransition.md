> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/errorinvalidcachetransition](https://developer.apple.com/documentation/fskit/fsdatacacheerror/errorinvalidcachetransition)

# errorInvalidCacheTransition

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

The cache transition is not allowed.

## Declaration

```swift
static var errorInvalidCacheTransition: FSDataCacheError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs when attempting an invalid transition, such as using an upgrade method for a downgrade operation, or vice versa.

## See Also

### Error codes

- [FSDataCacheError.Code](code.md): Error codes specific to data cache operations.
- [errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.
