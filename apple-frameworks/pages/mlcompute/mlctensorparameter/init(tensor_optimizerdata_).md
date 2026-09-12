> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensorparameter/init(tensor:optimizerdata:)](https://developer.apple.com/documentation/mlcompute/mlctensorparameter/init(tensor:optimizerdata:))

# init(tensor:optimizerData:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor parameter with the tensor and optimizer data you specify.

## Declaration

```swift
convenience init(tensor: MLCTensor, optimizerData: [MLCTensorData]?)
```

## Parameters

- `tensor`: The underlying tensor.
- `optimizerData`: The optimizer data.

## See Also

### Creating Tensor Parameters

- [init(tensor:)](init%28tensor_%29.md): Deprecated. Creates a tensor parameter with the tensor you specify.

# parameterWithTensor:optimizerData: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor parameter with the tensor and optimizer data you specify.

## Declaration

```objectivec
+ (instancetype) parameterWithTensor:(MLCTensor *) tensor optimizerData:(NSArray<MLCTensorData *> *) optimizerData;
```

## Parameters

- `tensor`: The underlying tensor.
- `optimizerData`: The optimizer data.

## See Also

### Creating Tensor Parameters

- [parameterWithTensor:](init%28tensor_%29.md): Deprecated. Creates a tensor parameter with the tensor you specify.
