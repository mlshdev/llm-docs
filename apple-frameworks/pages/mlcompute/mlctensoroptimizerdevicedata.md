> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensoroptimizerdevicedata](https://developer.apple.com/documentation/mlcompute/mlctensoroptimizerdevicedata)

# MLCTensorOptimizerDeviceData (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An encapsulation of the device memory associated with a tensor that an optimizer uses.

## Declaration

```swift
class MLCTensorOptimizerDeviceData
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Inspecting Tensors

- [tensorID](mlctensor/tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](mlctensor/descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](mlctensor/data.md): Deprecated. The tensor data.
- [label](mlctensor/label.md): Deprecated. A string that identifes this tensor.
- [device](mlctensor/device.md): Deprecated. The device associated with this tensor.
- [optimizerData](mlctensor/optimizerdata.md): Deprecated. An array that contains optimizer buffers you specify when you create a tensor parameter.
- [optimizerDeviceData](mlctensor/optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [hasValidNumerics](mlctensor/hasvalidnumerics.md): Deprecated. A Boolean that indicates whether a tensor contains NaN or INF values.

# MLCTensorOptimizerDeviceData (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An encapsulation of the device memory associated with a tensor that an optimizer uses.

## Declaration

```objectivec
@interface MLCTensorOptimizerDeviceData : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Inspecting Tensors

- [tensorID](mlctensor/tensorid.md): Deprecated. A number that uniquely identifies the tensor, which the framework assigns when it creates a tensor.
- [descriptor](mlctensor/descriptor.md): Deprecated. The configuration object you use to create a tensor.
- [data](mlctensor/data.md): Deprecated. The tensor data.
- [label](mlctensor/label.md): Deprecated. A string that identifes this tensor.
- [device](mlctensor/device.md): Deprecated. The device associated with this tensor.
- [optimizerData](mlctensor/optimizerdata.md): Deprecated. An array that contains optimizer buffers you specify when you create a tensor parameter.
- [optimizerDeviceData](mlctensor/optimizerdevicedata.md): Deprecated. An array that contains the device optimizer buffers you specify.
- [hasValidNumerics](mlctensor/hasvalidnumerics.md): Deprecated. A Boolean that indicates whether a tensor contains NaN or INF values.
