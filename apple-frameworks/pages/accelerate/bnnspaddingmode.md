> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspaddingmode](https://developer.apple.com/documentation/accelerate/bnnspaddingmode)

# BNNSPaddingMode (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define padding modes.

## Declaration

```swift
struct BNNSPaddingMode
```

## Topics

### Padding Modes

- [init(\_:)](bnnspaddingmode/init%28__%29.md)
- [init(rawValue:)](bnnspaddingmode/init%28rawvalue_%29.md)
- [rawValue](bnnspaddingmode/rawvalue.md)
- [BNNSPaddingModeConstant](bnnspaddingmodeconstant.md): A constant that indicates that a padding operation fills the padded area with a specified constant.
- [BNNSPaddingModeReflect](bnnspaddingmodereflect.md): A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
- [BNNSPaddingModeSymmetric](bnnspaddingmodesymmetric.md): A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Padding layers

- [BNNS.PaddingLayer](bnns/paddinglayer.md): Deprecated. A layer object that wraps a padding filter and manages its deinitialization.
- [BNNSLayerParametersPadding](bnnslayerparameterspadding.md): Deprecated. A structure that contains the parameters of a padding layer.
- [BNNSFilterCreateLayerPadding(\_:\_:)](bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.

# BNNSPaddingMode (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define padding modes.

## Declaration

```objectivec
typedef enum { ... } BNNSPaddingMode;
```

## Topics

### Padding Modes

- [BNNSPaddingModeConstant](bnnspaddingmodeconstant.md): A constant that indicates that a padding operation fills the padded area with a specified constant.
- [BNNSPaddingModeReflect](bnnspaddingmodereflect.md): A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
- [BNNSPaddingModeSymmetric](bnnspaddingmodesymmetric.md): A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.

## See Also

### Padding layers

- [BNNSLayerParametersPadding](bnnslayerparameterspadding.md): Deprecated. A structure that contains the parameters of a padding layer.
- [BNNSFilterCreateLayerPadding](bnnsfiltercreatelayerpadding%28____%29.md): Deprecated. Returns a new loss layer.
