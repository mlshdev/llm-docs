> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fskiterrordomain](https://developer.apple.com/documentation/fskit/fskiterrordomain)

# FSKitErrorDomain (Swift)

**Framework:** FSKit  
**Kind:** Global Variable  
**Availability:** macOS 15.4+

An error domain for FSKit errors.

## Declaration

```swift
let FSKitErrorDomain: String
```

<a id="discussion"></a>

## Discussion

See [NSError](https://developer.apple.com/documentation/foundation/nserror) for more information on error domains.

## See Also

### Errors and logging

- [fs_errorForCocoaError(\_:)](fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError(\_:)](fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError(\_:)](fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSError](fserror.md): An error encountered when performing an FSKit operation.
- [FSError.Code](fserror/code.md): A code that indicates a specific FSKit error.
- [FSDataCacheError](fsdatacacheerror.md): An error encountered when performing an FSKit data caching operation.

# FSKitErrorDomain (Objective-C)

**Framework:** FSKit  
**Kind:** Global Variable  
**Availability:** macOS 15.4+

An error domain for FSKit errors.

## Declaration

```objectivec
extern NSErrorDomain const FSKitErrorDomain;
```

<a id="discussion"></a>

## Discussion

See [NSError](https://developer.apple.com/documentation/foundation/nserror) for more information on error domains.

## See Also

### Errors and logging

- [fs_errorForCocoaError](fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError](fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError](fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSErrorCode](fserror/code.md): A code that indicates a specific FSKit error.
