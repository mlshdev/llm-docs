> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror/code/errorinvalidcachetransition](https://developer.apple.com/documentation/fskit/fsdatacacheerror/code/errorinvalidcachetransition)

# FSDataCacheError.Code.errorInvalidCacheTransition (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

The cache transition is not allowed.

## Declaration

```swift
case errorInvalidCacheTransition
```

<a id="discussion"></a>

## Discussion

This error occurs when attempting an invalid transition, such as using an upgrade method for a downgrade operation, or vice versa.

## See Also

### Error codes

- [FSDataCacheError.Code.errorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSDataCacheError.Code.errorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSDataCacheError.Code.errorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [FSDataCacheError.Code.errorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.

# FSErrorInvalidCacheTransition (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The cache transition is not allowed.

## Declaration

```objectivec
FSErrorInvalidCacheTransition
```

<a id="discussion"></a>

## Discussion

This error occurs when attempting an invalid transition, such as using an upgrade method for a downgrade operation, or vice versa.

## See Also

### Error codes

- [FSErrorInvalidCacheModeCoherency](errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [FSErrorCacheFlushFailed](errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [FSErrorCacheInvalidationFailed](errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [FSErrorCacheOperationConflict](errorcacheoperationconflict.md): A conflicting cache operation is in progress.
