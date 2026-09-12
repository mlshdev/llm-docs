> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/addingoptions](https://developer.apple.com/documentation/foundation/nsfileversion/addingoptions)

# NSFileVersion.AddingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for adding a new file version.

## Declaration

```swift
struct AddingOptions
```

## Topics

### Constants

- [byMoving](addingoptions/bymoving.md)

### Initializers

- [init(rawValue:)](addingoptions/init%28rawvalue_%29.md)

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

- [NSFileVersion.ReplacingOptions](replacingoptions.md): Options for replacing a file version.

# NSFileVersionAddingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for adding a new file version.

## Declaration

```objectivec
enum NSFileVersionAddingOptions : NSUInteger;
```

## Topics

### Constants

- [NSFileVersionAddingByMoving](addingoptions/bymoving.md)

## See Also

### Constants

- [NSFileVersionReplacingOptions](replacingoptions.md): Options for replacing a file version.
