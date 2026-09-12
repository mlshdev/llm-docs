> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/replacingoptions](https://developer.apple.com/documentation/foundation/nsfileversion/replacingoptions)

# NSFileVersion.ReplacingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for replacing a file version.

## Declaration

```swift
struct ReplacingOptions
```

## Topics

### Replacing options

- [byMoving](replacingoptions/bymoving.md): An option to perform replacing by moving a file.

### Initializers

- [init(rawValue:)](replacingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSFileVersion.AddingOptions](addingoptions.md): Options for adding a new file version.

# NSFileVersionReplacingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for replacing a file version.

## Declaration

```objectivec
enum NSFileVersionReplacingOptions : NSUInteger;
```

## Topics

### Replacing options

- [NSFileVersionReplacingByMoving](replacingoptions/bymoving.md): An option to perform replacing by moving a file.

## See Also

### Constants

- [NSFileVersionAddingOptions](addingoptions.md): Options for adding a new file version.
