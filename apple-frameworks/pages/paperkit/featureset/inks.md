> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/featureset/inks

# inks

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The supported ink types.

## Declaration

```swift
var inks: Set<PKInkingTool.InkType>
```

<a id="discussion"></a>

## Discussion

Defaults to all inks.

## See Also

### Configuring features

- [features](features.md): The supported features.
- [shapes](shapes.md): The supported shape types.
- [contentVersion](contentversion-swift.property.md): The PaperKit version the feature set supports.
- [lineMarkerPositions](linemarkerpositions-swift.property.md): The allowed ends of line for arrows.
- [colorMaximumLinearExposure](colormaximumlinearexposure.md): The maximum exposure to allow for choosing colors.
