> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsinterpolationmethod](https://developer.apple.com/documentation/accelerate/bnnsinterpolationmethod)

# BNNSInterpolationMethod (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe interpolation methods.

## Declaration

```swift
struct BNNSInterpolationMethod
```

## Topics

### Interpolation Methods

- [rawValue](bnnsinterpolationmethod/rawvalue.md)
- [init(\_:)](bnnsinterpolationmethod/init%28__%29.md)
- [init(rawValue:)](bnnsinterpolationmethod/init%28rawvalue_%29.md)
- [BNNSInterpolationMethodLinear](bnnsinterpolationmethodlinear.md): Interpolation that is linear or bilinear depending on the number of resized dimensions.
- [BNNSInterpolationMethodNearest](bnnsinterpolationmethodnearest.md): Nearest-neighbor interpolation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Resize layers

- [BNNS.ResizeLayer](bnns/resizelayer.md): Deprecated. A layer object that wraps a resize filter and manages its deinitialization.
- [BNNSLayerParametersResize](bnnslayerparametersresize.md): Deprecated. A structure that contains the parameters of a resize layer.
- [BNNSFilterCreateLayerResize(\_:\_:)](bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.

# BNNSInterpolationMethod (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe interpolation methods.

## Declaration

```objectivec
typedef enum { ... } BNNSInterpolationMethod;
```

## Topics

### Interpolation Methods

- [BNNSInterpolationMethodLinear](bnnsinterpolationmethodlinear.md): Interpolation that is linear or bilinear depending on the number of resized dimensions.
- [BNNSInterpolationMethodNearest](bnnsinterpolationmethodnearest.md): Nearest-neighbor interpolation.

## See Also

### Resize layers

- [BNNSLayerParametersResize](bnnslayerparametersresize.md): Deprecated. A structure that contains the parameters of a resize layer.
- [BNNSFilterCreateLayerResize](bnnsfiltercreatelayerresize%28____%29.md): Deprecated. Returns a new resize layer.
