> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset](https://developer.apple.com/documentation/paperkit/featureset)

# FeatureSet

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The features PaperKit supports in its UI and data models.

## Declaration

```swift
struct FeatureSet
```

## Topics

### Creating a feature set

- [version1](featureset/version1.md): A new feature set supporting all features in version 1.
- [latest](featureset/latest.md): A new feature set supporting all features.
- [empty](featureset/empty.md): A maximally empty feature set.

### Configuring features

- [features](featureset/features.md): The supported features.
- [shapes](featureset/shapes.md): The supported shape types.
- [inks](featureset/inks.md): The supported ink types.
- [contentVersion](featureset/contentversion-swift.property.md): The PaperKit version the feature set supports.
- [lineMarkerPositions](featureset/linemarkerpositions-swift.property.md): The allowed ends of line for arrows.
- [colorMaximumLinearExposure](featureset/colormaximumlinearexposure.md): The maximum exposure to allow for choosing colors.

### Checking features

- [contains(\_:)](featureset/contains%28__%29.md): Returns a Boolean value that indicates whether the given feature exists in the set.
- [isSubset(of:)](featureset/issubset%28of_%29.md): Returns a Boolean value that indicates whether this feature set is a subset of the given feature set.
- [insert(\_:)](featureset/insert%28__%29.md): Inserts the given feature in the set if it is not already present.
- [remove(\_:)](featureset/remove%28__%29.md): Removes the given feature.

### Describing feature types

- [FeatureSet.Feature](featureset/feature.md): The features that PaperKit markup supports.
- [FeatureSet.ContentVersion](featureset/contentversion-swift.enum.md)
- [FeatureSet.LineMarkerPositions](featureset/linemarkerpositions-swift.struct.md): The arrow marker positions for the ends of a line.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration

- [ShapeConfiguration](shapeconfiguration.md): A configuration that specifies the appearance of a shape.
- [RenderingOptions](renderingoptions.md): The rendering options for drawing paper data models.
- [MarkupAutoresizing](markupautoresizing.md): Automatic sizing behaviors for this markup.
