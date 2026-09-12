> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryerror-swift.struct](https://developer.apple.com/documentation/metal/mtllibraryerror-swift.struct)

# MTLLibraryError

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Metal errors related to libraries.

## Declaration

```swift
struct MTLLibraryError
```

## Topics

### Errors

- [unsupported](mtllibraryerror-swift.struct/unsupported.md): Metal couldn’t support the requested action.
- [internal](mtllibraryerror-swift.struct/internal.md): The action caused an internal error.
- [compileFailure](mtllibraryerror-swift.struct/compilefailure.md): The library or function failed to compile.
- [compileWarning](mtllibraryerror-swift.struct/compilewarning.md): The library or function compiled successfully but generated warnings.
- [fileNotFound](mtllibraryerror-swift.struct/filenotfound.md): Metal couldn’t find the Metal source file.
- [functionNotFound](mtllibraryerror-swift.struct/functionnotfound.md): Metal couldn’t find the specified Metal function.

### Error domain

- [errorDomain](mtllibraryerror-swift.struct/errordomain.md): The error domain used by Metal when returning library or function creation errors.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [MTLLibraryError.Code](mtllibraryerror-swift.struct/code.md): Error codes for Metal library errors.
- [MTLLibraryErrorDomain](mtllibraryerrordomain.md): The error domain for Metal libraries.
