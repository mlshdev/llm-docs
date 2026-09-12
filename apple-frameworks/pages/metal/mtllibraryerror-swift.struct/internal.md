> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryerror-swift.struct/internal](https://developer.apple.com/documentation/metal/mtllibraryerror-swift.struct/internal)

# internal

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The action caused an internal error.

## Declaration

```swift
static var `internal`: MTLLibraryError.Code { get }
```

## See Also

### Errors

- [unsupported](unsupported.md): Metal couldn’t support the requested action.
- [compileFailure](compilefailure.md): The library or function failed to compile.
- [compileWarning](compilewarning.md): The library or function compiled successfully but generated warnings.
- [fileNotFound](filenotfound.md): Metal couldn’t find the Metal source file.
- [functionNotFound](functionnotfound.md): Metal couldn’t find the specified Metal function.
