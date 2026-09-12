> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchiveerror-swift.struct/internalerror](https://developer.apple.com/documentation/metal/mtlbinaryarchiveerror-swift.struct/internalerror)

# internalError

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An error code that indicates the Metal framework has an internal problem.

## Declaration

```swift
static var internalError: MTLBinaryArchiveError.Code { get }
```

<a id="discussion"></a>

## Discussion

You can report the scenario that generated this error code with [Feedback Assistant](https://feedbackassistant.apple.com).

## See Also

### Error codes

- [none](none.md): An error code that represents the absence of any problems.
- [invalidFile](invalidfile.md): An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.
- [compilationFailure](compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [unexpectedElement](unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [MTLBinaryArchiveError.Code](code.md): Error codes when creating binary archives of compiled shader code.
