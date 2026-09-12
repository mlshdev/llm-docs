> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayer/layerid](https://developer.apple.com/documentation/mlcompute/mlclayer/layerid)

# layerID (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A unique number that identifies each layer.

## Declaration

```swift
var layerID: Int { get }
```

<a id="Discussion"></a>

## Discussion

The framework assigns `layerID` during layer initialization.

## See Also

### Inspecting a Layer

- [label](label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [deviceType](devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
- [supportsDataType(\_:on:)](supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

# layerID (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A unique number that identifies each layer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger layerID;
```

<a id="Discussion"></a>

## Discussion

The framework assigns `layerID` during layer initialization.

## See Also

### Inspecting a Layer

- [label](label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [deviceType](devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
- [supportsDataType:onDevice:](supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.
