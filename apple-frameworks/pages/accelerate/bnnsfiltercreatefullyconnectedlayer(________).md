> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatefullyconnectedlayer(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatefullyconnectedlayer(_:_:_:_:))

# BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a fully connected filter, initialized with input, output, layer, and filter parameters.

> Use [BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefullyconnectedlayer%28________%29.md) instead.

## Declaration

```swift
func BNNSFilterCreateFullyConnectedLayer(_ in_desc: UnsafePointer<BNNSVectorDescriptor>, _ out_desc: UnsafePointer<BNNSVectorDescriptor>, _ layer_params: UnsafePointer<BNNSFullyConnectedLayerParameters>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `in_desc`: Pointer to a `BNNSVectorDescriptor` struct describing the input
- `out_desc`: Pointer to a `BNNSVectorDescriptor` struct describing the output
- `layer_params`: Pointer to a `BNNSFullyConnectedLayerParameters` struct describing the layer parameters
- `filter_params`: Pointer to a `BNNSFilterParameters` struct describing the filter parameters

<a id="return-value"></a>

## Return Value

A BNNSFilter object representing a fully connected filter configured with the specified  parameters

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNS.FullyConnectedLayer](bnns/fullyconnectedlayer.md): Deprecated. A layer object that wraps a fully connected filter and manages its deinitialization.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected(\_:\_:)](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.

# BNNSFilterCreateFullyConnectedLayer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a fully connected filter, initialized with input, output, layer, and filter parameters.

> Use [BNNSFilterCreateFullyConnectedLayer](bnnsfiltercreatefullyconnectedlayer%28________%29.md) instead.

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateFullyConnectedLayer(const BNNSVectorDescriptor *in_desc, const BNNSVectorDescriptor *out_desc, const BNNSFullyConnectedLayerParameters *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `in_desc`: Pointer to a `BNNSVectorDescriptor` struct describing the input
- `out_desc`: Pointer to a `BNNSVectorDescriptor` struct describing the output
- `layer_params`: Pointer to a `BNNSFullyConnectedLayerParameters` struct describing the layer parameters
- `filter_params`: Pointer to a `BNNSFilterParameters` struct describing the filter parameters

<a id="return-value"></a>

## Return Value

A BNNSFilter object representing a fully connected filter configured with the specified  parameters

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
- [BNNSFilterCreateLayerFullyConnected](bnnsfiltercreatelayerfullyconnected%28____%29.md): Deprecated. Returns a new fully connected layer.
