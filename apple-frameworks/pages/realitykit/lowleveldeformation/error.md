> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/error](https://developer.apple.com/documentation/realitykit/lowleveldeformation/error)

# LowLevelDeformation.Error

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The error type thrown by every throwing method and initializer.

## Declaration

```swift
struct Error
```

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Encoding deformation work

- [encode(into:)](encode%28into_%29.md): Encodes the configured deformation passes into the given command encoder.
- [LowLevelDeformation.Pipeline](pipeline.md): A compiled compute pipeline for a specific combination of mesh layouts and deformer stages.
