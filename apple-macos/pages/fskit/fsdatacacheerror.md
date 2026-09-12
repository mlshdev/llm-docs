> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdatacacheerror](https://developer.apple.com/documentation/fskit/fsdatacacheerror)

# FSDataCacheError

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

An error encountered when performing an FSKit data caching operation.

## Declaration

```swift
struct FSDataCacheError
```

## Topics

### Error codes

- [FSDataCacheError.Code](fsdatacacheerror/code.md): Error codes specific to data cache operations.
- [errorInvalidCacheModeCoherency](fsdatacacheerror/errorinvalidcachemodecoherency.md): The requested cache mode and coherency type combination is invalid.
- [errorInvalidCacheTransition](fsdatacacheerror/errorinvalidcachetransition.md): The cache transition is not allowed.
- [errorCacheFlushFailed](fsdatacacheerror/errorcacheflushfailed.md): Failed to flush dirty cached data to storage.
- [errorCacheInvalidationFailed](fsdatacacheerror/errorcacheinvalidationfailed.md): Failed to invalidate (clear) cached data.
- [errorCacheOperationConflict](fsdatacacheerror/errorcacheoperationconflict.md): A conflicting cache operation is in progress.

### Identifying the error domain

- [errorDomain](fsdatacacheerror/errordomain.md): The domain of the data cache error.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors and logging

- [fs_errorForCocoaError(\_:)](fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError(\_:)](fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError(\_:)](fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSError](fserror.md): An error encountered when performing an FSKit operation.
- [FSError.Code](fserror/code.md): A code that indicates a specific FSKit error.
- [FSKitErrorDomain](fskiterrordomain.md): An error domain for FSKit errors.
