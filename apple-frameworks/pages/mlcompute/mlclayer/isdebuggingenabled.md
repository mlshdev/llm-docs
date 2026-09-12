> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayer/isdebuggingenabled](https://developer.apple.com/documentation/mlcompute/mlclayer/isdebuggingenabled)

# isDebuggingEnabled (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.

## Declaration

```swift
var isDebuggingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `true`, the layer makes the result tensor and gradient tensors available for reading. The default value is `false`.

> **Important**

>  If you set `isDebuggingEnabled` to `true`, make sure to also include [debugLayers](../mlcgraphcompilationoptions/debuglayers.md) in the `options` parameter when compiling the graph. Otherwise the layer ignores this property.

## See Also

### Inspecting a Layer

- [layerID](layerid.md): Deprecated. A unique number that identifies each layer.
- [label](label.md): Deprecated. A string that helps identify this layer.
- [deviceType](devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
- [supportsDataType(\_:on:)](supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

# isDebuggingEnabled (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL isDebuggingEnabled;
```

<a id="Discussion"></a>

## Discussion

If `true`, the layer makes the result tensor and gradient tensors available for reading. The default value is `false`.

> **Important**

>  If you set `isDebuggingEnabled` to `true`, make sure to also include [MLCGraphCompilationOptionsDebugLayers](../mlcgraphcompilationoptions/debuglayers.md) in the `options` parameter when compiling the graph. Otherwise the layer ignores this property.

## See Also

### Inspecting a Layer

- [layerID](layerid.md): Deprecated. A unique number that identifies each layer.
- [label](label.md): Deprecated. A string that helps identify this layer.
- [deviceType](devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
- [supportsDataType:onDevice:](supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.
