> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtllibraryerror-swift.struct/code)

# MTLLibraryError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Error codes for Metal library errors.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [MTLLibraryError.Code.unsupported](code/unsupported.md): Metal couldn’t support the requested action.
- [MTLLibraryError.Code.internal](code/internal.md): The action caused an internal error.
- [MTLLibraryError.Code.compileFailure](code/compilefailure.md): The library or function failed to compile.
- [MTLLibraryError.Code.compileWarning](code/compilewarning.md): The library or function compiled successfully but generated warnings.
- [MTLLibraryError.Code.fileNotFound](code/filenotfound.md): Metal couldn’t find the Metal source file.
- [MTLLibraryError.Code.functionNotFound](code/functionnotfound.md): Metal couldn’t find the specified Metal function.
- [MTLLibraryError.Code.unsupported](code/unsupported.md): Metal couldn’t support the requested action.
- [MTLLibraryError.Code.internal](code/internal.md): The action caused an internal error.
- [MTLLibraryError.Code.compileFailure](code/compilefailure.md): The library or function failed to compile.
- [MTLLibraryError.Code.compileWarning](code/compilewarning.md): The library or function compiled successfully but generated warnings.
- [MTLLibraryError.Code.fileNotFound](code/filenotfound.md): Metal couldn’t find the Metal source file.
- [MTLLibraryError.Code.functionNotFound](code/functionnotfound.md): Metal couldn’t find the specified Metal function.

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

### Errors

- [MTLLibraryError](../mtllibraryerror-swift.struct.md): Metal errors related to libraries.
- [MTLLibraryErrorDomain](../mtllibraryerrordomain.md): The error domain for Metal libraries.

# MTLLibraryError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Error codes for Metal library errors.

## Declaration

```objectivec
enum MTLLibraryError : NSUInteger;
```

## Topics

### Errors

- [MTLLibraryErrorUnsupported](code/unsupported.md): Metal couldn’t support the requested action.
- [MTLLibraryErrorInternal](code/internal.md): The action caused an internal error.
- [MTLLibraryErrorCompileFailure](code/compilefailure.md): The library or function failed to compile.
- [MTLLibraryErrorCompileWarning](code/compilewarning.md): The library or function compiled successfully but generated warnings.
- [MTLLibraryErrorFileNotFound](code/filenotfound.md): Metal couldn’t find the Metal source file.
- [MTLLibraryErrorFunctionNotFound](code/functionnotfound.md): Metal couldn’t find the specified Metal function.
- [MTLLibraryErrorUnsupported](code/unsupported.md): Metal couldn’t support the requested action.
- [MTLLibraryErrorInternal](code/internal.md): The action caused an internal error.
- [MTLLibraryErrorCompileFailure](code/compilefailure.md): The library or function failed to compile.
- [MTLLibraryErrorCompileWarning](code/compilewarning.md): The library or function compiled successfully but generated warnings.
- [MTLLibraryErrorFileNotFound](code/filenotfound.md): Metal couldn’t find the Metal source file.
- [MTLLibraryErrorFunctionNotFound](code/functionnotfound.md): Metal couldn’t find the specified Metal function.

## See Also

### Errors

- [MTLLibraryErrorDomain](../mtllibraryerrordomain.md): The error domain for Metal libraries.
