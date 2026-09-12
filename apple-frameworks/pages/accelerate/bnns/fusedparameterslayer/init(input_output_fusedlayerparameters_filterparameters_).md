> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedparameterslayer/init(input:output:fusedlayerparameters:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/fusedparameterslayer/init(input:output:fusedlayerparameters:filterparameters:))

# init(input:output:fusedLayerParameters:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a new fused layer from an array of layer parameters.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, fusedLayerParameters: [any FusableLayerParameters], filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `fusedLayerParameters`: An array that contains the parameters of the fused layers.
- `filterParameters`: The runtime filter parameters.

## See Also

### Creating a Fused Parameters Layer

- [init(inputA:inputB:output:fusedLayerParameters:filterParameters:)](init%28inputa_inputb_output_fusedlayerparameters_filterparameters_%29.md): Deprecated. Creates a new fused layer from an array of layer parameters, where the first layer accepts two inputs.
- [init(inputA:inputB:inputC:output:fusedLayerParameters:filterParameters:)](init%28inputa_inputb_inputc_output_fusedlayerparameters_filterparameters_%29.md): Deprecated. Creates a new fused layer from an array of layer parameters, where the first layer accepts three inputs.
