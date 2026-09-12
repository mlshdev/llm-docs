> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/parametricimmersiveassetinfo/error/errortype-swift.enum](https://developer.apple.com/documentation/immersivemediasupport/parametricimmersiveassetinfo/error/errortype-swift.enum)

# ParametricImmersiveAssetInfo.Error.ErrorType

**Framework:** Immersive Media Support  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A type of an error that may occur when converting the original wide field of view video asset to a parametric immersive asset.

## Declaration

```swift
enum ErrorType
```

<a id="overview"></a>

## Overview

If an error is thrown, continue playing the original AVAsset.

## Topics

### Enumeration Cases

- [ParametricImmersiveAssetInfo.Error.ErrorType.unsupportedAsset](errortype-swift.enum/unsupportedasset.md): Indicates that the asset can’t be converted due to a currently unsupported camera model or capture mode.
- [ParametricImmersiveAssetInfo.Error.ErrorType.isAlreadyConverted](errortype-swift.enum/isalreadyconverted.md): Indicates that the asset was previously converted to parametric immersive format.
- [ParametricImmersiveAssetInfo.Error.ErrorType.unconvertibleAsset](errortype-swift.enum/unconvertibleasset.md): Indicates that the asset can’t be converted because it’s missing the required metadata.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
