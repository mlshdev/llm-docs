> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersdropout](https://developer.apple.com/documentation/accelerate/bnnslayerparametersdropout)

# BNNSLayerParametersDropout (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a dropout layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersDropout
```

## Topics

### Initializers

- [init(i_desc:o_desc:rate:seed:control:)](bnnslayerparametersdropout/init%28i_desc_o_desc_rate_seed_control_%29.md): Deprecated. Returns a new dropout layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersdropout/init%28%29.md): Deprecated. Returns a new dropout layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparametersdropout/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersdropout/o_desc.md): Deprecated. The descriptor of the output.
- [rate](bnnslayerparametersdropout/rate.md): Deprecated. The probability that the layer drops out an element or a group of elements.
- [seed](bnnslayerparametersdropout/seed.md): Deprecated. The seed for the random number generator which is ignored if zero.
- [control](bnnslayerparametersdropout/control.md): Deprecated. An 8-bit bit mask that indicates the dimension of the grouping of the dropout decision.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Dropout layers

- [BNNS.DropoutLayer](bnns/dropoutlayer.md): Deprecated. A layer object that wraps a dropout filter and manages its deinitialization.
- [BNNSFilterCreateLayerDropout(\_:\_:)](bnnsfiltercreatelayerdropout%28____%29.md): Deprecated. Returns a new dropout layer.

# BNNSLayerParametersDropout (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a dropout layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersDropout;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparametersdropout/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersdropout/o_desc.md): Deprecated. The descriptor of the output.
- [rate](bnnslayerparametersdropout/rate.md): Deprecated. The probability that the layer drops out an element or a group of elements.
- [seed](bnnslayerparametersdropout/seed.md): Deprecated. The seed for the random number generator which is ignored if zero.
- [control](bnnslayerparametersdropout/control.md): Deprecated. An 8-bit bit mask that indicates the dimension of the grouping of the dropout decision.

## See Also

### Dropout layers

- [BNNSFilterCreateLayerDropout](bnnsfiltercreatelayerdropout%28____%29.md): Deprecated. Returns a new dropout layer.
