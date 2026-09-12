> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fs_errorforcocoaerror(_:)](https://developer.apple.com/documentation/fskit/fs_errorforcocoaerror(_:))

# fs_errorForCocoaError(\_:) (Swift)

**Framework:** FSKit  
**Kind:** Function  
**Availability:** macOS 15.4+

Creates an error object for the given Cocoa error code.

## Declaration

```swift
func fs_errorForCocoaError(_ errorCode: Int32) -> any Error
```

## See Also

### Errors and logging

- [fs_errorForMachError(\_:)](fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError(\_:)](fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSError](fserror.md): An error encountered when performing an FSKit operation.
- [FSError.Code](fserror/code.md): A code that indicates a specific FSKit error.
- [FSKitErrorDomain](fskiterrordomain.md): An error domain for FSKit errors.
- [FSDataCacheError](fsdatacacheerror.md): An error encountered when performing an FSKit data caching operation.

# fs_errorForCocoaError (Objective-C)

**Framework:** FSKit  
**Kind:** Function  
**Availability:** macOS 15.4+

Creates an error object for the given Cocoa error code.

## Declaration

```objectivec
extern NSError *fs_errorForCocoaError(int errorCode);
```

## See Also

### Errors and logging

- [fs_errorForMachError](fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError](fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSErrorCode](fserror/code.md): A code that indicates a specific FSKit error.
- [FSKitErrorDomain](fskiterrordomain.md): An error domain for FSKit errors.
