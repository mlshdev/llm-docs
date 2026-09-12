> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/typedisplayrepresentation](https://developer.apple.com/documentation/appintents/typedisplayrepresentation)

# TypeDisplayRepresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that describes the user interface presentation of a custom type.

## Declaration

```swift
struct TypeDisplayRepresentation
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

## Topics

### Initializers

- [init(name:numericFormat:)](typedisplayrepresentation/init%28name_numericformat_%29.md)
- [init(name:numericFormat:synonyms:)](typedisplayrepresentation/init%28name_numericformat_synonyms_%29.md)

### Instance Properties

- [name](typedisplayrepresentation/name.md): The singular type name, e.g. “Book”.
- [numericFormat](typedisplayrepresentation/numericformat.md): A string representing a count for the type, e.g. “2 books”.
- [synonyms](typedisplayrepresentation/synonyms.md): A list of localized phrases that are synonyms of this particular type display representation

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data representations

- [DisplayRepresentation](displayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [DisplayRepresentable](displayrepresentable.md): An interface for providing a dynamic visual representation of a specific type and instances of that type.
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md): An interface for providing the visual representation for an instance of a specific type.
- [TypeDisplayRepresentable](typedisplayrepresentable.md): An interface for providing the visual representation of a specific type.
- [StaticDisplayRepresentable](staticdisplayrepresentable.md): An interface for providing a static visual representation of a specific type.
- [CaseDisplayRepresentable](casedisplayrepresentable.md): An interface for providing the visual representation for an iterable collection of values.
