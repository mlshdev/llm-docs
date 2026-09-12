> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldynamiclibraryerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtldynamiclibraryerror-swift.struct/code)

# MTLDynamicLibraryError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Error codes that Metal can generate when creating dynamic libraries.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MTLDynamicLibraryError.Code.none](code/none.md): An error code that represents the absence of any problems.
- [MTLDynamicLibraryError.Code.invalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [MTLDynamicLibraryError.Code.compilationFailure](code/compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [MTLDynamicLibraryError.Code.unresolvedInstallName](code/unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [MTLDynamicLibraryError.Code.dependencyLoadFailure](code/dependencyloadfailure.md): An error code that indicates a dynamic library couldn’t link to other dynamic libraries.
- [MTLDynamicLibraryError.Code.unsupported](code/unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.
- [MTLDynamicLibraryError.Code.none](code/none.md): An error code that represents the absence of any problems.
- [MTLDynamicLibraryError.Code.invalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [MTLDynamicLibraryError.Code.compilationFailure](code/compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [MTLDynamicLibraryError.Code.unresolvedInstallName](code/unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [MTLDynamicLibraryError.Code.dependencyLoadFailure](code/dependencyloadfailure.md): An error code that indicates a dynamic library couldn’t link to other dynamic libraries.
- [MTLDynamicLibraryError.Code.unsupported](code/unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.

### Initializers

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

### Error codes

- [none](none.md): An error code that represents the absence of any problems.
- [invalidFile](invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [compilationFailure](compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [unresolvedInstallName](unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [dependencyLoadFailure](dependencyloadfailure.md): An error code that indicates a dynamic library couldn’t link to other dynamic libraries.
- [unsupported](unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.

# MTLDynamicLibraryError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Error codes that Metal can generate when creating dynamic libraries.

## Declaration

```objectivec
enum MTLDynamicLibraryError : NSUInteger;
```

## Topics

### Error codes

- [MTLDynamicLibraryErrorNone](code/none.md): An error code that represents the absence of any problems.
- [MTLDynamicLibraryErrorInvalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [MTLDynamicLibraryErrorCompilationFailure](code/compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [MTLDynamicLibraryErrorUnresolvedInstallName](code/unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [MTLDynamicLibraryErrorDependencyLoadFailure](code/dependencyloadfailure.md): An error code that indicates a dynamic library couldn’t link to other dynamic libraries.
- [MTLDynamicLibraryErrorUnsupported](code/unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.
- [MTLDynamicLibraryErrorNone](code/none.md): An error code that represents the absence of any problems.
- [MTLDynamicLibraryErrorInvalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [MTLDynamicLibraryErrorCompilationFailure](code/compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [MTLDynamicLibraryErrorUnresolvedInstallName](code/unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [MTLDynamicLibraryErrorDependencyLoadFailure](code/dependencyloadfailure.md): An error code that indicates a dynamic library couldn’t link to other dynamic libraries.
- [MTLDynamicLibraryErrorUnsupported](code/unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.
