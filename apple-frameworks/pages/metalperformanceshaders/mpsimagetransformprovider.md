> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagetransformprovider](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagetransformprovider)

# MPSImageTransformProvider (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A general interface for objects that provide image resampling.

## Declaration

```swift
protocol MPSImageTransformProvider : NSSecureCoding, NSObjectProtocol
```

## Topics

### Instance Methods

- [transform(forSourceImage:handle:)](mpsimagetransformprovider/transform%28forsourceimage_handle_%29.md)

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Resampling Nodes

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md): A representation of a bilinear resampling filter.
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md): A representation of a Lanczos resampling filter.
- [MPSNNScaleNode](mpsnnscalenode.md): Abstract node representing an image resampling filter.

# MPSImageTransformProvider (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A general interface for objects that provide image resampling.

## Declaration

```objectivec
@protocol MPSImageTransformProvider <NSSecureCoding, NSObject>
```

## Topics

### Instance Methods

- [transformForSourceImage:handle:](mpsimagetransformprovider/transform%28forsourceimage_handle_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Resampling Nodes

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md): A representation of a bilinear resampling filter.
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md): A representation of a Lanczos resampling filter.
- [MPSNNScaleNode](mpsnnscalenode.md): Abstract node representing an image resampling filter.
