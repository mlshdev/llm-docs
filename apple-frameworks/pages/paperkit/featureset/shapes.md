> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/shapes](https://developer.apple.com/documentation/paperkit/featureset/shapes)

# shapes

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The supported shape types.

## Declaration

```swift
var shapes: Set<ShapeConfiguration.Shape>
```

<a id="discussion"></a>

## Discussion

Default is all shapes. Set to an empty set to disable all shapes.

## See Also

### Configuring features

- [features](features.md): The supported features.
- [inks](inks.md): The supported ink types.
- [contentVersion](contentversion-swift.property.md): The PaperKit version the feature set supports.
- [lineMarkerPositions](linemarkerpositions-swift.property.md): The allowed ends of line for arrows.
- [colorMaximumLinearExposure](colormaximumlinearexposure.md): The maximum exposure to allow for choosing colors.
