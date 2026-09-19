> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtllibraryerror-swift.struct/unsupported

# unsupported

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Metal couldn’t support the requested action.

## Declaration

```swift
static var unsupported: MTLLibraryError.Code { get }
```

<a id="discussion"></a>

## Discussion

For example, the requested library file has improper formatting, or the requested library isn’t accessible.

## See Also

### Errors

- [internal](internal.md): The action caused an internal error.
- [compileFailure](compilefailure.md): The library or function failed to compile.
- [compileWarning](compilewarning.md): The library or function compiled successfully but generated warnings.
- [fileNotFound](filenotfound.md): Metal couldn’t find the Metal source file.
- [functionNotFound](functionnotfound.md): Metal couldn’t find the specified Metal function.
