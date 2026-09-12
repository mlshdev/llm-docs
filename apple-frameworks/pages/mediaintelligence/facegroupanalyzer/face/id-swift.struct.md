> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/face/id-swift.struct](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/face/id-swift.struct)

# FaceGroupAnalyzer.Face.ID

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A unique identifier for a detected face.

## Declaration

```swift
struct ID
```

## Topics

### Creating an ID

- [init(\_:)](id-swift.struct/init%28__%29.md): Creates an identifier from a string value.

### Initializers

- [init(rawValue:)](id-swift.struct/init%28rawvalue_%29.md): Creates an identifier from a raw string value.

### Instance Properties

- [rawValue](id-swift.struct/rawvalue.md): The raw string value of the identifier.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying a face

- [id](id-swift.property.md): A unique identifier for the face.
- [entityID](entityid.md): An identifier for the entity this face belongs to.
- [assetID](assetid.md): An identifier for the image asset that contains this face.
