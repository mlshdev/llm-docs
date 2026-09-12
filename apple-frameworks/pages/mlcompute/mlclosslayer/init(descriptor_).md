> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclosslayer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlclosslayer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a loss layer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor lossDescriptor: MLCLossDescriptor)
```

## Parameters

- `lossDescriptor`: An object you use to configure the loss layer.

## See Also

### Creating Loss Layers with Descriptors

- [init(descriptor:weights:)](init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossDescriptor](../mlclossdescriptor.md): Deprecated. A configuration object you use to create a loss layer.
- [MLCLossType](../mlclosstype.md): Deprecated. A loss function.

# layerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a loss layer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCLossDescriptor *) lossDescriptor;
```

## Parameters

- `lossDescriptor`: An object you use to configure the loss layer.

## See Also

### Creating Loss Layers with Descriptors

- [layerWithDescriptor:weights:](init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossDescriptor](../mlclossdescriptor.md): Deprecated. A configuration object you use to create a loss layer.
- [MLCLossType](../mlclosstype.md): Deprecated. A loss function.
