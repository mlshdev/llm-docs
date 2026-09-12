> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/parametricimmersiveassetinfo/error](https://developer.apple.com/documentation/immersivemediasupport/parametricimmersiveassetinfo/error)

# ParametricImmersiveAssetInfo.Error

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

An error that occurs during the conversion process of the parametric immersive asset.

## Declaration

```swift
struct Error
```

## Topics

### Instance Properties

- [errorDescription](error/errordescription.md): A description of what went wrong, for debugging purposes.
- [errorType](error/errortype-swift.property.md): An error type that describes this error.

### Enumerations

- [ParametricImmersiveAssetInfo.Error.ErrorType](error/errortype-swift.enum.md): A type of an error that may occur when converting the original wide field of view video asset to a parametric immersive asset.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
