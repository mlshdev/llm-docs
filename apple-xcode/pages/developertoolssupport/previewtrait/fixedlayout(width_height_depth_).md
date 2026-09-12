> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewtrait/fixedlayout(width:height:depth:)](https://developer.apple.com/documentation/developertoolssupport/previewtrait/fixedlayout(width:height:depth:))

# fixedLayout(width:height:depth:)

**Framework:** DeveloperToolsSupport  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Centers the preview in a fixed-size, 3D container.

## Declaration

```swift
@MainActor static func fixedLayout(width: CGFloat, height: CGFloat, depth: CGFloat) -> PreviewTrait<T>
```

<a id="discussion"></a>

## Discussion

This is the same as [PreviewLayout.fixed3D(width:height:depth:)](../previewlayout/fixed3d%28width_height_depth_%29.md).

## See Also

### Getting a layout

- [defaultLayout](defaultlayout.md): Conforms when `T` is `Preview.ViewTraits`. Center the preview in a container the size of the device on which the preview is running.
- [fixedLayout(width:height:)](fixedlayout%28width_height_%29.md): Conforms when `T` is `Preview.ViewTraits`. Center the preview in a fixed size container with the given dimensions.
- [sizeThatFitsLayout](sizethatfitslayout.md): Conforms when `T` is `Preview.ViewTraits`. Fit the container to the size of the preview when offered the size of the device that the preview is running on.
