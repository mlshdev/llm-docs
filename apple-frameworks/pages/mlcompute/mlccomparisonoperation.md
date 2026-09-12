> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlccomparisonoperation](https://developer.apple.com/documentation/mlcompute/mlccomparisonoperation)

# MLCComparisonOperation (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A comparison operation.

## Declaration

```swift
enum MLCComparisonOperation
```

## Topics

### Enumeration Cases

- [MLCComparisonOperation.equal](mlccomparisonoperation/equal.md): Deprecated.
- [MLCComparisonOperation.greater](mlccomparisonoperation/greater.md): Deprecated.
- [MLCComparisonOperation.greaterOrEqual](mlccomparisonoperation/greaterorequal.md): Deprecated.
- [MLCComparisonOperation.less](mlccomparisonoperation/less.md): Deprecated.
- [MLCComparisonOperation.lessOrEqual](mlccomparisonoperation/lessorequal.md): Deprecated.
- [MLCComparisonOperation.logicalAND](mlccomparisonoperation/logicaland.md): Deprecated.
- [MLCComparisonOperation.logicalNAND](mlccomparisonoperation/logicalnand.md): Deprecated.
- [MLCComparisonOperation.logicalNOR](mlccomparisonoperation/logicalnor.md): Deprecated.
- [MLCComparisonOperation.logicalNOT](mlccomparisonoperation/logicalnot.md): Deprecated.
- [MLCComparisonOperation.logicalOR](mlccomparisonoperation/logicalor.md): Deprecated.
- [MLCComparisonOperation.logicalXOR](mlccomparisonoperation/logicalxor.md): Deprecated.
- [MLCComparisonOperation.notEqual](mlccomparisonoperation/notequal.md): Deprecated.
- [debugDescription](mlccomparisonoperation/debugdescription.md): A textual description of the comparison operation, suitable for debugging.

### Initializers

- [init(rawValue:)](mlccomparisonoperation/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Comparison Layers

- [init(operation:)](mlccomparisonlayer/init%28operation_%29.md): Deprecated. Creates a comparison layer with the operation you specify.

# MLCComparisonOperation (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A comparison operation.

## Declaration

```objectivec
enum MLCComparisonOperation : int32_t;
```

## Topics

### Enumeration Cases

- [MLCComparisonOperationEqual](mlccomparisonoperation/equal.md): Deprecated.
- [MLCComparisonOperationGreater](mlccomparisonoperation/greater.md): Deprecated.
- [MLCComparisonOperationGreaterOrEqual](mlccomparisonoperation/greaterorequal.md): Deprecated.
- [MLCComparisonOperationLess](mlccomparisonoperation/less.md): Deprecated.
- [MLCComparisonOperationLessOrEqual](mlccomparisonoperation/lessorequal.md): Deprecated.
- [MLCComparisonOperationLogicalAND](mlccomparisonoperation/logicaland.md): Deprecated.
- [MLCComparisonOperationLogicalNAND](mlccomparisonoperation/logicalnand.md): Deprecated.
- [MLCComparisonOperationLogicalNOR](mlccomparisonoperation/logicalnor.md): Deprecated.
- [MLCComparisonOperationLogicalNOT](mlccomparisonoperation/logicalnot.md): Deprecated.
- [MLCComparisonOperationLogicalOR](mlccomparisonoperation/logicalor.md): Deprecated.
- [MLCComparisonOperationLogicalXOR](mlccomparisonoperation/logicalxor.md): Deprecated.
- [MLCComparisonOperationNotEqual](mlccomparisonoperation/notequal.md): Deprecated.
- [MLCComparisonOperationDebugDescription](mlccomparisonoperation/debugdescription.md): A textual description of the comparison operation, suitable for debugging.
- [MLCComparisonOperationCount](mlccomparisonoperation/mlccomparisonoperationcount.md): A number that represents the operation count.

## See Also

### Creating Comparison Layers

- [layerWithOperation:](mlccomparisonlayer/init%28operation_%29.md): Deprecated. Creates a comparison layer with the operation you specify.
