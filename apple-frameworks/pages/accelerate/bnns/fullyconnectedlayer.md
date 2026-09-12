> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fullyconnectedlayer](https://developer.apple.com/documentation/accelerate/bnns/fullyconnectedlayer)

# BNNS.FullyConnectedLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a fully connected filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class FullyConnectedLayer
```

## Topics

### Creating a Fully Connected Layer

- [init(input:output:weights:bias:activation:filterParameters:)](fullyconnectedlayer/init%28input_output_weights_bias_activation_filterparameters_%29.md): Deprecated. Returns a new fully connected layer.

### Type Methods

- [sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)](fullyconnectedlayer/sparsify%28batchsize_inputlayout_inputdenseshape_inputvalues_output_sparseparameters_workspace_filterparameters_%29.md): Deprecated. Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.

## Relationships

### Inherits From

- [BNNS.ConvolutionLayer](convolutionlayer.md)

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](../bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:)](../bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersFullyConnected](../bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected(\_:\_:)](../bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.
