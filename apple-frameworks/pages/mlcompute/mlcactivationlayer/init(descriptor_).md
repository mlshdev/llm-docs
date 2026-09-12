> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationlayer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcactivationlayer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation layer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor: MLCActivationDescriptor)
```

## Parameters

- `descriptor`: An object you use to configure the activation layer.

## See Also

### Creating Activation Layers

- [Preconfigured Activation Layers](../preconfigured-activation-layers.md): Obtain a preconfigured activation layer with common behavior.
- [MLCActivationDescriptor](../mlcactivationdescriptor.md): Deprecated. A configuration object you use to create an activation layer.

# layerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation layer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCActivationDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An object you use to configure the activation layer.

## See Also

### Creating Activation Layers

- [Preconfigured Activation Layers](../preconfigured-activation-layers.md): Obtain a preconfigured activation layer with common behavior.
- [MLCActivationDescriptor](../mlcactivationdescriptor.md): Deprecated. A configuration object you use to create an activation layer.
