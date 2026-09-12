> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryerror-swift.struct/compilefailure](https://developer.apple.com/documentation/metal/mtllibraryerror-swift.struct/compilefailure)

# compileFailure

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The library or function failed to compile.

## Declaration

```swift
static var compileFailure: MTLLibraryError.Code { get }
```

## See Also

### Errors

- [unsupported](unsupported.md): Metal couldn’t support the requested action.
- [internal](internal.md): The action caused an internal error.
- [compileWarning](compilewarning.md): The library or function compiled successfully but generated warnings.
- [fileNotFound](filenotfound.md): Metal couldn’t find the Metal source file.
- [functionNotFound](functionnotfound.md): Metal couldn’t find the specified Metal function.
