> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fserror](https://developer.apple.com/documentation/fskit/fserror)

# FSError

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

An error encountered when performing an FSKit operation.

## Declaration

```swift
struct FSError
```

## Topics

### Identifying errors

- [invalidDirectoryCookie](fserror/invaliddirectorycookie.md)
- [moduleLoadFailed](fserror/moduleloadfailed.md)
- [resourceDamaged](fserror/resourcedamaged.md)
- [resourceUnrecognized](fserror/resourceunrecognized.md)
- [resourceUnusable](fserror/resourceunusable.md)
- [statusOperationInProgress](fserror/statusoperationinprogress.md)
- [statusOperationPaused](fserror/statusoperationpaused.md)

### Identifying the error domain

- [errorDomain](fserror/errordomain.md)

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
- [FSError.Code](fserror/code.md): A code that indicates a specific FSKit error.
- [FSKitErrorDomain](fskiterrordomain.md): An error domain for FSKit errors.
- [FSDataCacheError](fsdatacacheerror.md): An error encountered when performing an FSKit data caching operation.
