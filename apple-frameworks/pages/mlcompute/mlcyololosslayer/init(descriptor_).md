> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcyololosslayer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcyololosslayer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a YOLO loss layer with the descriptor you specify.

## Declaration

```swift
convenience init(descriptor lossDescriptor: MLCYOLOLossDescriptor)
```

## Parameters

- `lossDescriptor`: An object used to configure the YOLO loss layer.

## See Also

### Creating YOLO Loss Layers

- [MLCYOLOLossDescriptor](../mlcyololossdescriptor.md): Deprecated. The configuration object you use to create the YOLO loss layer.

# layerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a YOLO loss layer with the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCYOLOLossDescriptor *) lossDescriptor;
```

## Parameters

- `lossDescriptor`: An object used to configure the YOLO loss layer.

## See Also

### Creating YOLO Loss Layers

- [MLCYOLOLossDescriptor](../mlcyololossdescriptor.md): Deprecated. The configuration object you use to create the YOLO loss layer.
