> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/features](https://developer.apple.com/documentation/paperkit/featureset/features)

# features

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The supported features.

## Declaration

```swift
var features: Set<FeatureSet.Feature>
```

<a id="discussion"></a>

## Discussion

Default is all features.

## See Also

### Configuring features

- [shapes](shapes.md): The supported shape types.
- [inks](inks.md): The supported ink types.
- [contentVersion](contentversion-swift.property.md): The PaperKit version the feature set supports.
- [lineMarkerPositions](linemarkerpositions-swift.property.md): The allowed ends of line for arrows.
- [colorMaximumLinearExposure](colormaximumlinearexposure.md): The maximum exposure to allow for choosing colors.
