> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryerror-swift.struct/functionnotfound](https://developer.apple.com/documentation/metal/mtllibraryerror-swift.struct/functionnotfound)

# functionNotFound

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Metal couldn’t find the specified Metal function.

## Declaration

```swift
static var functionNotFound: MTLLibraryError.Code { get }
```

## See Also

### Errors

- [unsupported](unsupported.md): Metal couldn’t support the requested action.
- [internal](internal.md): The action caused an internal error.
- [compileFailure](compilefailure.md): The library or function failed to compile.
- [compileWarning](compilewarning.md): The library or function compiled successfully but generated warnings.
- [fileNotFound](filenotfound.md): Metal couldn’t find the Metal source file.
