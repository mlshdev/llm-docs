> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatelayerfullyconnected(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayerfullyconnected(_:_:))

# BNNSFilterCreateLayerFullyConnected(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new fully connected layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterCreateLayerFullyConnected(_ layer_params: UnsafePointer<BNNSLayerParametersFullyConnected>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use a fully connected layer to construct each output feature from a linear combination of all input features. Fully connected layers compute the matrix-vector product of a weights matrix and the input vector.

<a id="Applying-a-Fully-Connected-Filter-With-a-2D-Weights-Matrix"></a>

### Applying a Fully Connected Filter With a 2D Weights Matrix

In the case where your input data is a vector and your weights data is a matrix, provide the weights as an *m x n* row-major matrix where *m* is the number of fully connected results, and *n* is the number of items in the input.

For example, the following code defines a column matrix input that contains four values, a 3 x 4 weights matrix, and a three-element vector that receives the result:

```swift
let input: [Float] = [1,
                      2,
                      3,
                      4]

let weightsData: [Float] = [10, 20, 30, 40,
                            100, 200, 300, 400,
                            1000, 2000, 3000, 4000]

let n = 3

var output = [Float](repeating: .nan,
                     count: n)
```

Use the following code to create and apply the fully connected layer:

```swift
let flags = BNNSNDArrayFlags(0)

weightsData.withUnsafeBufferPointer { weightsPtr in
    let inDescription = BNNSNDArrayDescriptor(flags: flags,
                                              layout: BNNSDataLayoutVector,
                                              size: (4, 0, 0, 0, 0, 0, 0, 0),
                                              stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                              data: nil,
                                              data_type: .float,
                                              table_data: nil,
                                              table_data_type: .float,
                                              data_scale: 0,
                                              data_bias: 0)
    
    let outDescription = BNNSNDArrayDescriptor(flags: flags,
                                               layout: BNNSDataLayoutVector,
                                               size: (3, 0, 0, 0, 0, 0, 0, 0),
                                               stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                               data: nil,
                                               data_type: .float,
                                               table_data: nil,
                                               table_data_type: .float,
                                               data_scale: 0,
                                               data_bias: 0)
    
    let weightsDescription = BNNSNDArrayDescriptor(flags: flags,
                                                   layout: BNNSDataLayoutRowMajorMatrix,
                                                   size: (4, 3, 0, 0, 0, 0, 0, 0),
                                                   stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                   data: UnsafeMutableRawPointer(mutating: weightsPtr.baseAddress),
                                                   data_type: .float,
                                                   table_data: nil,
                                                   table_data_type: .float,
                                                   data_scale: 0,
                                                   data_bias: 0)

    var layerParameters = BNNSLayerParametersFullyConnected(i_desc: inDescription,
                                                            w_desc: weightsDescription,
                                                            o_desc: outDescription,
                                                            bias: BNNSNDArrayDescriptor(),
                                                            activation: .identity)
    
    let filter = BNNSFilterCreateLayerFullyConnected(&layerParameters,
                                                     nil)
    defer {
        BNNSFilterDestroy(filter)
    }
    
    BNNSFilterApply(filter,
                    input,
                    &output)
}
```

On return, `output` contains the following values:

```swift
[300.0,      // 1 * 10 + 2 * 20 + 3 * 30 + 4 * 40
 3000.0,     // 1 * 100 + 2 * 200 + 3 * 300 + 4 * 400
 30000.0]    // 1 * 1000 + 2 * 2000 + 3 * 3000 + 4 * 4000
```

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNS.FullyConnectedLayer](bnns/fullyconnectedlayer.md): Deprecated. A layer object that wraps a fully connected filter and manages its deinitialization.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.

# BNNSFilterCreateLayerFullyConnected (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new fully connected layer.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateLayerFullyConnected(const BNNSLayerParametersFullyConnected *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use a fully connected layer to construct each output feature from a linear combination of all input features. Fully connected layers compute the matrix-vector product of a weights matrix and the input vector.

<a id="Applying-a-Fully-Connected-Filter-With-a-2D-Weights-Matrix"></a>

### Applying a Fully Connected Filter With a 2D Weights Matrix

In the case where your input data is a vector and your weights data is a matrix, provide the weights as an *m x n* row-major matrix where *m* is the number of fully connected results, and *n* is the number of items in the input.

For example, the following code defines a column matrix input that contains four values, a 3 x 4 weights matrix, and a three-element vector that receives the result:

```swift
let input: [Float] = [1,
                      2,
                      3,
                      4]

let weightsData: [Float] = [10, 20, 30, 40,
                            100, 200, 300, 400,
                            1000, 2000, 3000, 4000]

let n = 3

var output = [Float](repeating: .nan,
                     count: n)
```

Use the following code to create and apply the fully connected layer:

```swift
let flags = BNNSNDArrayFlags(0)

weightsData.withUnsafeBufferPointer { weightsPtr in
    let inDescription = BNNSNDArrayDescriptor(flags: flags,
                                              layout: BNNSDataLayoutVector,
                                              size: (4, 0, 0, 0, 0, 0, 0, 0),
                                              stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                              data: nil,
                                              data_type: .float,
                                              table_data: nil,
                                              table_data_type: .float,
                                              data_scale: 0,
                                              data_bias: 0)
    
    let outDescription = BNNSNDArrayDescriptor(flags: flags,
                                               layout: BNNSDataLayoutVector,
                                               size: (3, 0, 0, 0, 0, 0, 0, 0),
                                               stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                               data: nil,
                                               data_type: .float,
                                               table_data: nil,
                                               table_data_type: .float,
                                               data_scale: 0,
                                               data_bias: 0)
    
    let weightsDescription = BNNSNDArrayDescriptor(flags: flags,
                                                   layout: BNNSDataLayoutRowMajorMatrix,
                                                   size: (4, 3, 0, 0, 0, 0, 0, 0),
                                                   stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                   data: UnsafeMutableRawPointer(mutating: weightsPtr.baseAddress),
                                                   data_type: .float,
                                                   table_data: nil,
                                                   table_data_type: .float,
                                                   data_scale: 0,
                                                   data_bias: 0)

    var layerParameters = BNNSLayerParametersFullyConnected(i_desc: inDescription,
                                                            w_desc: weightsDescription,
                                                            o_desc: outDescription,
                                                            bias: BNNSNDArrayDescriptor(),
                                                            activation: .identity)
    
    let filter = BNNSFilterCreateLayerFullyConnected(&layerParameters,
                                                     nil)
    defer {
        BNNSFilterDestroy(filter)
    }
    
    BNNSFilterApply(filter,
                    input,
                    &output)
}
```

On return, `output` contains the following values:

```swift
[300.0,      // 1 * 10 + 2 * 20 + 3 * 30 + 4 * 40
 3000.0,     // 1 * 100 + 2 * 200 + 3 * 300 + 4 * 400
 30000.0]    // 1 * 1000 + 2 * 2000 + 3 * 3000 + 4 * 4000
```

## See Also

### Fully connected layers

- [BNNSFullyConnectedLayerParameters](bnnsfullyconnectedlayerparameters.md): Deprecated. A structure containing fully connected layer parameters.
- [BNNSFilterCreateFullyConnectedLayer](bnnsfiltercreatefullyconnectedlayer%28________%29.md): Deprecated. Returns a fully connected filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md): Deprecated. A structure that contains the parameters of a fully connected layer.
