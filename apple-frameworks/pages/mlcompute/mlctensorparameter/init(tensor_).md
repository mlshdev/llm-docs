> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensorparameter/init(tensor:)](https://developer.apple.com/documentation/mlcompute/mlctensorparameter/init(tensor:))

# init(tensor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor parameter with the tensor you specify.

## Declaration

```swift
convenience init(tensor: MLCTensor)
```

## Parameters

- `tensor`: The underlying tensor.

## See Also

### Creating Tensor Parameters

- [init(tensor:optimizerData:)](init%28tensor_optimizerdata_%29.md): Deprecated. Creates a tensor parameter with the tensor and optimizer data you specify.

# parameterWithTensor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor parameter with the tensor you specify.

## Declaration

```objectivec
+ (instancetype) parameterWithTensor:(MLCTensor *) tensor;
```

## Parameters

- `tensor`: The underlying tensor.

## See Also

### Creating Tensor Parameters

- [parameterWithTensor:optimizerData:](init%28tensor_optimizerdata_%29.md): Deprecated. Creates a tensor parameter with the tensor and optimizer data you specify.
