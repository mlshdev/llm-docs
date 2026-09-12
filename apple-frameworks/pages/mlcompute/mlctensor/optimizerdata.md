> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/optimizerdata](https://developer.apple.com/documentation/mlcompute/mlctensor/optimizerdata)

# optimizerData (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains optimizer buffers you specify when you create a tensor parameter.

## Declaration

```swift
var optimizerData: [MLCTensorData] { get }
```

<a id="Discussion"></a>

## Discussion

These are the host-side momentum and velocity-optimizer buffers you can query and initialize.

## See Also

### Inspecting Tensors

- [tensorID](tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](data.md): Deprecated. The tensor data.
- [label](label.md): Deprecated. A string that identifes this tensor.
- [device](device.md): Deprecated. The device associated with this tensor.
- [optimizerDeviceData](optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [hasValidNumerics](hasvalidnumerics.md): Deprecated. A Boolean that indicates whether a tensor contains NaN or INF values.
- [MLCTensorOptimizerDeviceData](../mlctensoroptimizerdevicedata.md): Deprecated. An encapsulation of the device memory associated with a tensor that an optimizer uses.

# optimizerData (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains optimizer buffers you specify when you create a tensor parameter.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MLCTensorData *> * optimizerData;
```

<a id="Discussion"></a>

## Discussion

These are the host-side momentum and velocity-optimizer buffers you can query and initialize.

## See Also

### Inspecting Tensors

- [tensorID](tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](data.md): Deprecated. The tensor data.
- [label](label.md): Deprecated. A string that identifes this tensor.
- [device](device.md): Deprecated. The device associated with this tensor.
- [optimizerDeviceData](optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [hasValidNumerics](hasvalidnumerics.md): Deprecated. A Boolean that indicates whether a tensor contains NaN or INF values.
- [MLCTensorOptimizerDeviceData](../mlctensoroptimizerdevicedata.md): Deprecated. An encapsulation of the device memory associated with a tensor that an optimizer uses.
