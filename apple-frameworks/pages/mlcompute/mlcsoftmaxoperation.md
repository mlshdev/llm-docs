> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsoftmaxoperation](https://developer.apple.com/documentation/mlcompute/mlcsoftmaxoperation)

# MLCSoftmaxOperation (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A softmax operation.

## Declaration

```swift
enum MLCSoftmaxOperation
```

## Topics

### Enumeration Cases

- [MLCSoftmaxOperation.softmax](mlcsoftmaxoperation/softmax.md): Deprecated.
- [MLCSoftmaxOperation.logSoftmax](mlcsoftmaxoperation/logsoftmax.md): Deprecated.
- [debugDescription](mlcsoftmaxoperation/debugdescription.md): A textual description of the softmax operation, suitable for debugging.

### Initializers

- [init(rawValue:)](mlcsoftmaxoperation/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Softmax Layers

- [init(operation:)](mlcsoftmaxlayer/init%28operation_%29.md): Deprecated. Creates a softmax layer with the operation you specify.
- [init(operation:dimension:)](mlcsoftmaxlayer/init%28operation_dimension_%29.md): Deprecated. Creates a softmax layer with the operation and dimension you specify.

# MLCSoftmaxOperation (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A softmax operation.

## Declaration

```objectivec
enum MLCSoftmaxOperation : int32_t;
```

## Topics

### Enumeration Cases

- [MLCSoftmaxOperationSoftmax](mlcsoftmaxoperation/softmax.md): Deprecated.
- [MLCSoftmaxOperationLogSoftmax](mlcsoftmaxoperation/logsoftmax.md): Deprecated.
- [MLCSoftmaxOperationDebugDescription](mlcsoftmaxoperation/debugdescription.md): A textual description of the softmax operation, suitable for debugging.

## See Also

### Creating Softmax Layers

- [layerWithOperation:](mlcsoftmaxlayer/init%28operation_%29.md): Deprecated. Creates a softmax layer with the operation you specify.
- [layerWithOperation:dimension:](mlcsoftmaxlayer/init%28operation_dimension_%29.md): Deprecated. Creates a softmax layer with the operation and dimension you specify.
