> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldynamiclibraryerror-swift.struct/dependencyloadfailure](https://developer.apple.com/documentation/metal/mtldynamiclibraryerror-swift.struct/dependencyloadfailure)

# dependencyLoadFailure

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An error code that indicates a dynamic library couldn’t link to other dynamic libraries.

## Declaration

```swift
static var dependencyLoadFailure: MTLDynamicLibraryError.Code { get }
```

## See Also

### Error codes

- [none](none.md): An error code that represents the absence of any problems.
- [invalidFile](invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [compilationFailure](compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [unresolvedInstallName](unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [unsupported](unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.
- [MTLDynamicLibraryError.Code](code.md): Error codes that Metal can generate when creating dynamic libraries.
