> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclossdescriptor/init(type:reductiontype:)](https://developer.apple.com/documentation/mlcompute/mlclossdescriptor/init(type:reductiontype:))

# init(type:reductionType:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a loss descriptor with the loss function and reduction type you specify.

## Declaration

```swift
convenience init(type lossType: MLCLossType, reductionType: MLCReductionType)
```

## Parameters

- `lossType`: The loss function type.
- `reductionType`: The reduction operation type.

## See Also

### Creating Loss Descriptors

- [init(type:reductionType:weight:)](init%28type_reductiontype_weight_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, and weight you specify.
- [init(type:reductionType:weight:labelSmoothing:classCount:)](init%28type_reductiontype_weight_labelsmoothing_classcount_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes you specify.
- [init(type:reductionType:weight:labelSmoothing:classCount:epsilon:delta:)](init%28type_reductiontype_weight_labelsmoothing_classcount_epsilon_delta_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes, epsilon, and delta that you specify.

# descriptorWithType:reductionType: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a loss descriptor with the loss function and reduction type you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithType:(MLCLossType) lossType reductionType:(MLCReductionType) reductionType;
```

## Parameters

- `lossType`: The loss function type.
- `reductionType`: The reduction operation type.

## See Also

### Creating Loss Descriptors

- [descriptorWithType:reductionType:weight:](init%28type_reductiontype_weight_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, and weight you specify.
- [descriptorWithType:reductionType:weight:labelSmoothing:classCount:](init%28type_reductiontype_weight_labelsmoothing_classcount_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes you specify.
- [descriptorWithType:reductionType:weight:labelSmoothing:classCount:epsilon:delta:](init%28type_reductiontype_weight_labelsmoothing_classcount_epsilon_delta_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes, epsilon, and delta that you specify.
