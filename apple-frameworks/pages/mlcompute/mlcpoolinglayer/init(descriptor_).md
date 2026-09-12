> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolinglayer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcpoolinglayer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a pooling layer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor: MLCPoolingDescriptor)
```

## Parameters

- `descriptor`: An object you use to configure the pooling layer.

## See Also

### Creating Pooling Layers

- [MLCPoolingDescriptor](../mlcpoolingdescriptor.md): Deprecated. A configuration object you use to create a pooling layer.
- [MLCPoolingType](../mlcpoolingtype-wb8j.md): Deprecated. A pooling function type for a pooling layer.

# layerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a pooling layer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCPoolingDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An object you use to configure the pooling layer.

## See Also

### Creating Pooling Layers

- [MLCPoolingDescriptor](../mlcpoolingdescriptor.md): Deprecated. A configuration object you use to create a pooling layer.
- [MLCPoolingType](../mlcpoolingtype-8hrit.md): A pooling function type for a pooling layer.
