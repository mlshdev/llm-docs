> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersfullyconnected](https://developer.apple.com/documentation/accelerate/bnnslayerparametersfullyconnected)

# BNNSLayerParametersFullyConnected (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a fully connected layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersFullyConnected
```

## Topics

### Initializers

- [init(i_desc:w_desc:o_desc:bias:activation:)](bnnslayerparametersfullyconnected/init%28i_desc_w_desc_o_desc_bias_activation_%29.md): Deprecated. Returns a new fully connected layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersfullyconnected/init%28%29.md): Deprecated. Returns a new fully connected layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparametersfullyconnected/i_desc.md): Deprecated. The descriptor of the input.
- [w_desc](bnnslayerparametersfullyconnected/w_desc.md): Deprecated. The descriptor of the weights.
- [o_desc](bnnslayerparametersfullyconnected/o_desc.md): Deprecated. The descriptor of the output.
- [bias](bnnslayerparametersfullyconnected/bias.md): Deprecated. The descriptor of the bias.
- [activation](bnnslayerparametersfullyconnected/activation.md): Deprecated. The activation function that the layer applies to the output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNS.FullyConnectedLayer](bnns/fullyconnectedlayer.md): Deprecated. A layer object that wraps a fully connected filter and manages its deinitialization.
- [BNNSFilterCreateLayerFullyConnected(\_:\_:)](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.

# BNNSLayerParametersFullyConnected (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a fully connected layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersFullyConnected;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparametersfullyconnected/i_desc.md): Deprecated. The descriptor of the input.
- [w_desc](bnnslayerparametersfullyconnected/w_desc.md): Deprecated. The descriptor of the weights.
- [o_desc](bnnslayerparametersfullyconnected/o_desc.md): Deprecated. The descriptor of the output.
- [bias](bnnslayerparametersfullyconnected/bias.md): Deprecated. The descriptor of the bias.
- [activation](bnnslayerparametersfullyconnected/activation.md): Deprecated. The activation function that the layer applies to the output.

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNSFilterCreateLayerFullyConnected](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.
