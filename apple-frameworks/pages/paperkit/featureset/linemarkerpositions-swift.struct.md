> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/linemarkerpositions-swift.struct](https://developer.apple.com/documentation/paperkit/featureset/linemarkerpositions-swift.struct)

# FeatureSet.LineMarkerPositions

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The arrow marker positions for the ends of a line.

## Declaration

```swift
struct LineMarkerPositions
```

## Topics

### Choosing marker positions

- [plain](linemarkerpositions-swift.struct/plain.md): Neither end of a line has markers.
- [single](linemarkerpositions-swift.struct/single.md): Either the start/end of a line has a marker.
- [double](linemarkerpositions-swift.struct/double.md): Both the start and end of a line has a marker.
- [all](linemarkerpositions-swift.struct/all.md): All possible combinations of marker positions.

### Initializers

- [init(rawValue:)](linemarkerpositions-swift.struct/init%28rawvalue_%29.md): Creates a new set of marker positions from the given raw value.

### Instance Properties

- [rawValue](linemarkerpositions-swift.struct/rawvalue.md): The raw bitmask that represents this set of marker positions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Describing feature types

- [FeatureSet.Feature](feature.md): The features that PaperKit markup supports.
- [FeatureSet.ContentVersion](contentversion-swift.enum.md)
