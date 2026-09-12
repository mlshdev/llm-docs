> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/hasvalidnumerics](https://developer.apple.com/documentation/mlcompute/mlctensor/hasvalidnumerics)

# hasValidNumerics (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether a tensor contains NaN or INF values.

## Declaration

```swift
var hasValidNumerics: Bool { get }
```

## See Also

### Inspecting Tensors

- [tensorID](tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](data.md): Deprecated. The tensor data.
- [label](label.md): Deprecated. A string that identifes this tensor.
- [device](device.md): Deprecated. The device associated with this tensor.
- [optimizerData](optimizerdata.md): Deprecated. An array that contains optimizer buffers you specify when you create a tensor parameter.
- [optimizerDeviceData](optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [MLCTensorOptimizerDeviceData](../mlctensoroptimizerdevicedata.md): Deprecated. An encapsulation of the device memory associated with a tensor that an optimizer uses.

# hasValidNumerics (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether a tensor contains NaN or INF values.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasValidNumerics;
```

## See Also

### Inspecting Tensors

- [tensorID](tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](data.md): Deprecated. The tensor data.
- [label](label.md): Deprecated. A string that identifes this tensor.
- [device](device.md): Deprecated. The device associated with this tensor.
- [optimizerData](optimizerdata.md): Deprecated. An array that contains optimizer buffers you specify when you create a tensor parameter.
- [optimizerDeviceData](optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [MLCTensorOptimizerDeviceData](../mlctensoroptimizerdevicedata.md): Deprecated. An encapsulation of the device memory associated with a tensor that an optimizer uses.
