> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/duplicateoptions](https://developer.apple.com/documentation/system/filedescriptor/duplicateoptions)

# FileDescriptor.DuplicateOptions

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options that specify behavior for a duplicated file descriptor.

## Declaration

```swift
@frozen struct DuplicateOptions
```

## Topics

### Initializers

- [init(rawValue:)](duplicateoptions/init%28rawvalue_%29.md): Create a strongly-typed options value from raw C options.

### Instance Properties

- [rawValue](duplicateoptions/rawvalue.md): The raw C options.

### Type Properties

- [closeOnExec](duplicateoptions/closeonexec.md): Indicates that executing a program closes the file.
- [closeOnFork](duplicateoptions/closeonfork.md): Indicates that forking a program closes the file.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
