> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchiveerror-swift.struct/invalidfile](https://developer.apple.com/documentation/metal/mtlbinaryarchiveerror-swift.struct/invalidfile)

# invalidFile

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.

## Declaration

```swift
static var invalidFile: MTLBinaryArchiveError.Code { get }
```

## See Also

### Error codes

- [none](none.md): An error code that represents the absence of any problems.
- [compilationFailure](compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [unexpectedElement](unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [internalError](internalerror.md): An error code that indicates the Metal framework has an internal problem.
- [MTLBinaryArchiveError.Code](code.md): Error codes when creating binary archives of compiled shader code.
