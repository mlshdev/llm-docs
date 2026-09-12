> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/displayrepresentation](https://developer.apple.com/documentation/appintents/displayrepresentation)

# DisplayRepresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that describes the user interface presentation of a custom type.

## Declaration

```swift
struct DisplayRepresentation
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

## Topics

### Creating a representation

- [init(title:subtitle:image:)](displayrepresentation/init%28title_subtitle_image_%29.md)

### Displaying the content

- [title](displayrepresentation/title.md)
- [subtitle](displayrepresentation/subtitle.md)
- [image](displayrepresentation/image-swift.property.md)
- [DisplayRepresentation.Image](displayrepresentation/image-swift.struct.md)

### Initializers

- [init(title:subtitle:image:synonyms:)](displayrepresentation/init%28title_subtitle_image_synonyms_%29.md)
- [init(title:subtitle:synonyms:image:)](displayrepresentation/init%28title_subtitle_synonyms_image_%29.md): Creates a display representation whose image is produced lazily by the given closure.

### Instance Properties

- [synonyms](displayrepresentation/synonyms.md): A list of localized phrases that are synonyms of this particular display representation

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data representations

- [DisplayRepresentable](displayrepresentable.md): An interface for providing a dynamic visual representation of a specific type and instances of that type.
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md): An interface for providing the visual representation for an instance of a specific type.
- [TypeDisplayRepresentable](typedisplayrepresentable.md): An interface for providing the visual representation of a specific type.
- [TypeDisplayRepresentation](typedisplayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [StaticDisplayRepresentable](staticdisplayrepresentable.md): An interface for providing a static visual representation of a specific type.
- [CaseDisplayRepresentable](casedisplayrepresentable.md): An interface for providing the visual representation for an iterable collection of values.
