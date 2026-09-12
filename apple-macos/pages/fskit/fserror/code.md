> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fserror/code](https://developer.apple.com/documentation/fskit/fserror/code)

# FSError.Code (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A code that indicates a specific FSKit error.

## Declaration

```swift
enum Code
```

## Topics

### Identifying errors

- [FSError.Code.invalidDirectoryCookie](code/invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSError.Code.moduleLoadFailed](code/moduleloadfailed.md): The module failed to load.
- [FSError.Code.resourceDamaged](code/resourcedamaged.md): The resource is damaged.
- [FSError.Code.resourceUnrecognized](code/resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSError.Code.resourceUnusable](code/resourceunusable.md): FSKit recognizes the resource, but the resource isn’t usable.
- [FSError.Code.statusOperationInProgress](code/statusoperationinprogress.md): An operation is in progress.
- [FSError.Code.statusOperationPaused](code/statusoperationpaused.md): An operation is paused.

### Working with raw values

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors and logging

- [fs_errorForCocoaError(\_:)](../fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError(\_:)](../fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError(\_:)](../fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSError](../fserror.md): An error encountered when performing an FSKit operation.
- [FSKitErrorDomain](../fskiterrordomain.md): An error domain for FSKit errors.
- [FSDataCacheError](../fsdatacacheerror.md): An error encountered when performing an FSKit data caching operation.

# FSErrorCode (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A code that indicates a specific FSKit error.

## Declaration

```objectivec
enum FSErrorCode : NSInteger;
```

## Topics

### Identifying errors

- [FSErrorInvalidDirectoryCookie](code/invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSErrorModuleLoadFailed](code/moduleloadfailed.md): The module failed to load.
- [FSErrorResourceDamaged](code/resourcedamaged.md): The resource is damaged.
- [FSErrorResourceUnrecognized](code/resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSErrorResourceUnusable](code/resourceunusable.md): FSKit recognizes the resource, but the resource isn’t usable.
- [FSErrorStatusOperationInProgress](code/statusoperationinprogress.md): An operation is in progress.
- [FSErrorStatusOperationPaused](code/statusoperationpaused.md): An operation is paused.

## See Also

### Errors and logging

- [fs_errorForCocoaError](../fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError](../fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError](../fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSKitErrorDomain](../fskiterrordomain.md): An error domain for FSKit errors.
