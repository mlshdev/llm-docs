> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/parametricimmersiveassetinfo](https://developer.apple.com/documentation/immersivemediasupport/parametricimmersiveassetinfo)

# ParametricImmersiveAssetInfo

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

An object that helps convert the original wide field of view video asset to parametric immersive asset.

## Declaration

```swift
class ParametricImmersiveAssetInfo
```

## Topics

### Structures

- [ParametricImmersiveAssetInfo.Error](parametricimmersiveassetinfo/error.md): An error that occurs during the conversion process of the parametric immersive asset.

### Initializers

- [init(asset:computeFormatDescription:)](parametricimmersiveassetinfo/init%28asset_computeformatdescription_%29.md): Creates an instance using the passed asset and computes the format description for converting the asset to parametric immersive asset, if requested. Use `ParametricImmersiveAssetInfo.isParametricImmersive` to check whether the asset is already parametric immersive.

### Instance Properties

- [requiredFormatDescription](parametricimmersiveassetinfo/requiredformatdescription.md): A result format descriptor for overriding a mutable video track that’s used to convert the asset to parametric immersive asset. Use `replaceFormatDescription` to replace the format description on the `AVMutableMovieTrack`.
- [conversionResult](parametricimmersiveassetinfo/conversionresult.md): The result object of the parametric immersive format conversion.
- [isAssetConvertible](parametricimmersiveassetinfo/isassetconvertible.md): A result Boolean value that indicates whether the asset can be converted to parametric immersive. If opt-out `computeFormatDescription` in the initializer, this Boolean indicates whether the asset is convertible.

### Type Methods

- [isParametricImmersive(asset:)](parametricimmersiveassetinfo/isparametricimmersive%28asset_%29.md): Checks asynchronously whether the asset is already in the parametric immersive format.
