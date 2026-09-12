> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayer/supportsdatatype(_:on:)](https://developer.apple.com/documentation/mlcompute/mlclayer/supportsdatatype(_:on:))

# supportsDataType(\_:on:) (Swift)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

## Declaration

```swift
class func supportsDataType(_ dataType: MLCDataType, on device: MLCDevice) -> Bool
```

## Parameters

- `dataType`: The data type of a possible input tensor to the layer.
- `device`: The device to use to determine layer support.

<a id="return-value"></a>

## Return Value

`true` if the specified data type and device are supported.

## See Also

### Inspecting a Layer

- [layerID](layerid.md): Deprecated. A unique number that identifies each layer.
- [label](label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [deviceType](devicetype.md): Deprecated. A device type that indicates where the system executes the layer.

# supportsDataType:onDevice: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

## Declaration

```objectivec
+ (BOOL) supportsDataType:(MLCDataType) dataType onDevice:(MLCDevice *) device;
```

## Parameters

- `dataType`: The data type of a possible input tensor to the layer.
- `device`: The device to use to determine layer support.

<a id="return-value"></a>

## Return Value

`true` if the specified data type and device are supported.

## See Also

### Inspecting a Layer

- [layerID](layerid.md): Deprecated. A unique number that identifies each layer.
- [label](label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [deviceType](devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
