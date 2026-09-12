> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/dropoutlayer](https://developer.apple.com/documentation/accelerate/bnns/dropoutlayer)

# BNNS.DropoutLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a dropout filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class DropoutLayer
```

## Topics

### Creating a Dropout Layer

- [init(input:output:rate:seed:control:filterParameters:)](dropoutlayer/init%28input_output_rate_seed_control_filterparameters_%29.md): Deprecated. Returns a new dropout layer.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Dropout layers

- [BNNSLayerParametersDropout](../bnnslayerparametersdropout.md): Deprecated. A structure that contains the parameters of a dropout layer.
- [BNNSFilterCreateLayerDropout(\_:\_:)](../bnnsfiltercreatelayerdropout%28____%29.md): Deprecated. Returns a new dropout layer.
