> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcyololosslayer](https://developer.apple.com/documentation/mlcompute/mlcyololosslayer)

# MLCYOLOLossLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that estimates loss for the YOLO algorithm.

## Declaration

```swift
class MLCYOLOLossLayer
```

## Topics

### Creating YOLO Loss Layers

- [init(descriptor:)](mlcyololosslayer/init%28descriptor_%29.md): Deprecated. Creates a YOLO loss layer with the descriptor you specify.
- [MLCYOLOLossDescriptor](mlcyololossdescriptor.md): Deprecated. The configuration object you use to create the YOLO loss layer.

### Inspecting YOLO Loss Layers

- [yoloLossDescriptor](mlcyololosslayer/yololossdescriptor.md): Deprecated. The configuration object you use to create the YOLO loss layer.

## Relationships

### Inherits From

- [MLCLossLayer](mlclosslayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Loss Layers

- [MLCLossLayer](mlclosslayer.md): Deprecated. A layer that estimates the inaccuracies of the model to reduce the loss on the next evaluation.

# MLCYOLOLossLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that estimates loss for the YOLO algorithm.

## Declaration

```objectivec
@interface MLCYOLOLossLayer : MLCLossLayer
```

## Topics

### Creating YOLO Loss Layers

- [layerWithDescriptor:](mlcyololosslayer/init%28descriptor_%29.md): Deprecated. Creates a YOLO loss layer with the descriptor you specify.
- [MLCYOLOLossDescriptor](mlcyololossdescriptor.md): Deprecated. The configuration object you use to create the YOLO loss layer.

### Inspecting YOLO Loss Layers

- [yoloLossDescriptor](mlcyololosslayer/yololossdescriptor.md): Deprecated. The configuration object you use to create the YOLO loss layer.

## Relationships

### Inherits From

- [MLCLossLayer](mlclosslayer.md)

## See Also

### Loss Layers

- [MLCLossLayer](mlclosslayer.md): Deprecated. A layer that estimates the inaccuracies of the model to reduce the loss on the next evaluation.
