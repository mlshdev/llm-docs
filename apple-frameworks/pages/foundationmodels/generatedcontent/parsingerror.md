> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent/parsingerror](https://developer.apple.com/documentation/foundationmodels/generatedcontent/parsingerror)

# GeneratedContent.ParsingError

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A failure that occurs when a string cannot be parsed into GeneratedContent.

## Declaration

```swift
struct ParsingError
```

## Topics

### Creating an instance

- [init(rawContent:underlyingError:debugDescription:)](parsingerror/init%28rawcontent_underlyingerror_debugdescription_%29.md): Creates a parsing failure value.

### Inspecting the instance

- [rawContent](parsingerror/rawcontent.md): The raw content that could not be parsed.
- [underlyingError](parsingerror/underlyingerror.md): The underlying error that caused the parsing failure, if any.
- [debugDescription](parsingerror/debugdescription.md): A debug description of what failed to parse.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating generated content

- [init(\_:)](init%28__%29.md): Creates generated content from another value.
- [init(\_:id:)](init%28__id_%29.md): Creates content that contains a single value with a custom generation identifier.
- [init(elements:id:)](init%28elements_id_%29.md): Creates content representing an array of elements you specify.
- [init(properties:id:)](init%28properties_id_%29.md): Creates generated content representing a structure with the properties you specify.
- [init(properties:id:uniquingKeysWith:)](init%28properties_id_uniquingkeyswith_%29.md): Creates generated content from key-value pairs, resolving duplicate keys with a combining closure.
- [init(json:)](init%28json_%29.md): Creates equivalent content from a JSON string.
- [init(kind:id:)](init%28kind_id_%29.md): Creates content with the specified kind and generation identifier.
