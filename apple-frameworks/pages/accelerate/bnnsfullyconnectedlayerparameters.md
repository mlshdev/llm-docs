> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfullyconnectedlayerparameters](https://developer.apple.com/documentation/accelerate/bnnsfullyconnectedlayerparameters)

# BNNSFullyConnectedLayerParameters (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing fully connected layer parameters.

> Use [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md) instead.

## Declaration

```swift
struct BNNSFullyConnectedLayerParameters
```

## Topics

### Initializers

- [init()](bnnsfullyconnectedlayerparameters/init%28%29.md): Deprecated.
- [init(in_size:out_size:weights:bias:activation:)](bnnsfullyconnectedlayerparameters/init%28in_size_out_size_weights_bias_activation_%29.md): Deprecated. Returns a new fully connected layer parameters structure.
- [init(in_size:out_size:weights:)](bnnsfullyconnectedlayerparameters/init%28in_size_out_size_weights_%29.md): Deprecated.

### Instance Properties

- [activation](bnnsfullyconnectedlayerparameters/activation.md): Deprecated. The layer activation function.
- [bias](bnnsfullyconnectedlayerparameters/bias.md): Deprecated. Layer bias, one for each output component.
- [in_size](bnnsfullyconnectedlayerparameters/in_size.md): Deprecated. The size of the input vector.
- [out_size](bnnsfullyconnectedlayerparameters/out_size.md): Deprecated. The size of the output vector.
- [weights](bnnsfullyconnectedlayerparameters/weights.md): Deprecated. Matrix coefficients.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Fully connected layers

- [BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNS.FullyConnectedLayer](bnns/fullyconnectedlayer.md): Deprecated. A layer object that wraps a fully connected filter and manages its deinitialization.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected(\_:\_:)](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.

# BNNSFullyConnectedLayerParameters (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing fully connected layer parameters.

> Use [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md) instead.

## Declaration

```objectivec
typedef struct { ... } BNNSFullyConnectedLayerParameters;
```

## Topics

### Instance Properties

- [activation](bnnsfullyconnectedlayerparameters/activation.md): Deprecated. The layer activation function.
- [bias](bnnsfullyconnectedlayerparameters/bias.md): Deprecated. Layer bias, one for each output component.
- [in_size](bnnsfullyconnectedlayerparameters/in_size.md): Deprecated. The size of the input vector.
- [out_size](bnnsfullyconnectedlayerparameters/out_size.md): Deprecated. The size of the output vector.
- [weights](bnnsfullyconnectedlayerparameters/weights.md): Deprecated. Matrix coefficients.

## See Also

### Fully connected layers

- [BNNSFilterCreateFullyConnectedLayer](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.
