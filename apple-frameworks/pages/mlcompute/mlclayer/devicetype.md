> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayer/devicetype](https://developer.apple.com/documentation/mlcompute/mlclayer/devicetype)

# deviceType (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

A device type that indicates where the system executes the layer.

## Declaration

```swift
var deviceType: MLCDeviceType { get }
```

<a id="Discussion"></a>

## Discussion

The system uses the [MLCDevice](../mlcdevice.md) you provide to [compile(options:device:)](../mlctraininggraph/compile%28options_device_%29.md) to execute the layers in the graph.

If you select [MLCDeviceType.ane](../mlcdevicetype/ane.md), it is possible that some layers may not execute on the [MLCDeviceType.ane](../mlcdevicetype/ane.md), but instead on the CPU or GPU.

## See Also

### Inspecting a Layer

- [layerID](layerid.md): Deprecated. A unique number that identifies each layer.
- [label](label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [supportsDataType(\_:on:)](supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

# deviceType (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

A device type that indicates where the system executes the layer.

## Declaration

```objectivec
@property (nonatomic, readonly) MLCDeviceType deviceType;
```

<a id="Discussion"></a>

## Discussion

The system uses the [MLCDevice](../mlcdevice.md) you provide to [compileWithOptions:device:](../mlctraininggraph/compile%28options_device_%29.md) to execute the layers in the graph.

If you select [MLCDeviceTypeANE](../mlcdevicetype/ane.md), it is possible that some layers may not execute on the [MLCDeviceTypeANE](../mlcdevicetype/ane.md), but instead on the CPU or GPU.

## See Also

### Inspecting a Layer

- [layerID](layerid.md): Deprecated. A unique number that identifies each layer.
- [label](label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [supportsDataType:onDevice:](supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.
