> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/pipeoptions](https://developer.apple.com/documentation/system/filedescriptor/pipeoptions)

# FileDescriptor.PipeOptions

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options that specify behavior for a newly-created pipe.

## Declaration

```swift
@frozen struct PipeOptions
```

## Topics

### Initializers

- [init(rawValue:)](pipeoptions/init%28rawvalue_%29.md): Create a strongly-typed options value from raw C options.

### Instance Properties

- [rawValue](pipeoptions/rawvalue.md): The raw C options.

### Type Properties

- [closeOnExec](pipeoptions/closeonexec.md): Indicates that executing a program closes the file.
- [closeOnFork](pipeoptions/closeonfork.md): Indicates that forking a program closes the file.
- [nonBlocking](pipeoptions/nonblocking.md): Indicates that all subsequent input and output operations on the pipe’s file descriptors will be nonblocking.

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
