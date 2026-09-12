> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchiveerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtlbinaryarchiveerror-swift.struct/code)

# MTLBinaryArchiveError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Error codes when creating binary archives of compiled shader code.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MTLBinaryArchiveError.Code.none](code/none.md): An error code that represents the absence of any problems.
- [MTLBinaryArchiveError.Code.invalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.
- [MTLBinaryArchiveError.Code.compilationFailure](code/compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [MTLBinaryArchiveError.Code.unexpectedElement](code/unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [MTLBinaryArchiveError.Code.internalError](code/internalerror.md): An error code that indicates the Metal framework has an internal problem.
- [MTLBinaryArchiveError.Code.none](code/none.md): An error code that represents the absence of any problems.
- [MTLBinaryArchiveError.Code.invalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.
- [MTLBinaryArchiveError.Code.compilationFailure](code/compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [MTLBinaryArchiveError.Code.unexpectedElement](code/unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [MTLBinaryArchiveError.Code.internalError](code/internalerror.md): An error code that indicates the Metal framework has an internal problem.

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
- [invalidFile](invalidfile.md): An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.
- [compilationFailure](compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [unexpectedElement](unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [internalError](internalerror.md): An error code that indicates the Metal framework has an internal problem.

# MTLBinaryArchiveError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Error codes when creating binary archives of compiled shader code.

## Declaration

```objectivec
enum MTLBinaryArchiveError : NSUInteger;
```

## Topics

### Error codes

- [MTLBinaryArchiveErrorNone](code/none.md): An error code that represents the absence of any problems.
- [MTLBinaryArchiveErrorInvalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.
- [MTLBinaryArchiveErrorCompilationFailure](code/compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [MTLBinaryArchiveErrorUnexpectedElement](code/unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [MTLBinaryArchiveErrorInternalError](code/internalerror.md): An error code that indicates the Metal framework has an internal problem.
- [MTLBinaryArchiveErrorNone](code/none.md): An error code that represents the absence of any problems.
- [MTLBinaryArchiveErrorInvalidFile](code/invalidfile.md): An error code that indicates an app is using an invalid reference to an archive file, typically related to a URL.
- [MTLBinaryArchiveErrorCompilationFailure](code/compilationfailure.md): An error code that indicates the archive’s inability to compile its contents, typically when serializing it to a URL.
- [MTLBinaryArchiveErrorUnexpectedElement](code/unexpectedelement.md): An error code that indicates a problem with a configuration, typically in a descriptor or an archive’s inability to add linked functions.
- [MTLBinaryArchiveErrorInternalError](code/internalerror.md): An error code that indicates the Metal framework has an internal problem.
