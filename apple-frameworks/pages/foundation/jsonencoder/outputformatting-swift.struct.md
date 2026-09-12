> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/outputformatting-swift.struct](https://developer.apple.com/documentation/foundation/jsonencoder/outputformatting-swift.struct)

# JSONEncoder.OutputFormatting

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The output formatting options that determine the readability, size, and element order of an encoded JSON object.

## Declaration

```swift
struct OutputFormatting
```

## Topics

### Formatting Output

- [prettyPrinted](outputformatting-swift.struct/prettyprinted.md): The output formatting option that uses ample white space and indentation to make output easy to read.
- [sortedKeys](outputformatting-swift.struct/sortedkeys.md): The output formatting option that sorts keys in lexicographic order.
- [withoutEscapingSlashes](outputformatting-swift.struct/withoutescapingslashes.md): The output formatting option specifies that the output doesn’t prefix slash characters with escape characters.

### Creating Options

- [init(rawValue:)](outputformatting-swift.struct/init%28rawvalue_%29.md): Creates an OutputFormatting value with the given raw value.
- [rawValue](outputformatting-swift.struct/rawvalue.md): The format’s default value.
- [init()](init%28%29.md): Creates a new, reusable JSON encoder with the default formatting settings and encoding strategies.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Customizing Encoding

- [outputFormatting](outputformatting-swift.property.md): A value that determines the readability, size, and element order of the encoded JSON object.
- [keyEncodingStrategy](keyencodingstrategy-swift.property.md): A value that determines how to encode a type’s coding keys as JSON keys.
- [JSONEncoder.KeyEncodingStrategy](keyencodingstrategy-swift.enum.md): The values that determine how to encode a type’s coding keys as JSON keys.
- [userInfo](userinfo.md): A dictionary you use to customize the encoding process by providing contextual information.
