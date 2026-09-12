> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/flags-swift.struct](https://developer.apple.com/documentation/system/stat/flags-swift.struct)

# Stat.Flags

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Flags representing those passed to `fstatat()`.

## Declaration

```swift
@frozen struct Flags
```

## Topics

### Initializers

- [init(rawValue:)](flags-swift.struct/init%28rawvalue_%29.md): Creates a strongly-typed `Stat.Flags` from raw C flags.

### Instance Properties

- [rawValue](flags-swift.struct/rawvalue.md): The raw C flags.

### Type Properties

- [resolveBeneath](flags-swift.struct/resolvebeneath.md): If the path does not reside in the hierarchy beneath the starting directory, return an error.
- [symlinkNoFollow](flags-swift.struct/symlinknofollow.md): If the path ends with a symbolic link, return information about the link itself.
- [symlinkNoFollowAny](flags-swift.struct/symlinknofollowany.md): If the path ends with a symbolic link, return information about the link itself. If *any* symbolic link is encountered during path resolution, return an error.

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
