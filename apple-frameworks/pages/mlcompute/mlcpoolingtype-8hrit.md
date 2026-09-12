> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingtype-8hrit](https://developer.apple.com/documentation/mlcompute/mlcpoolingtype-8hrit)

# MLCPoolingType

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A pooling function type for a pooling layer.

## Declaration

```objectivec
enum MLCPoolingType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCPoolingTypeMax](mlcpoolingtype-8hrit/mlcpoolingtypemax.md)
- [MLCPoolingTypeL2Norm](mlcpoolingtype-8hrit/mlcpoolingtypel2norm.md)
- [MLCPoolingTypeAverage](mlcpoolingtype-8hrit/mlcpoolingtypeaverage.md)
- [MLCPoolingTypeCount](mlcpoolingtype-8hrit/mlcpoolingtypecount.md)
- [MLCPoolingTypeDebugDescription](mlcpoolingtypedebugdescription.md): A textual description of the pooling type, suitable for debugging.

## See Also

### Creating Pooling Layers

- [layerWithDescriptor:](mlcpoolinglayer/init%28descriptor_%29.md): Deprecated. Creates a pooling layer with the descriptor you specify.
- [MLCPoolingDescriptor](mlcpoolingdescriptor.md): Deprecated. A configuration object you use to create a pooling layer.
