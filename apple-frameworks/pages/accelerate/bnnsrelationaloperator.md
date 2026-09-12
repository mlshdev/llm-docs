> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsrelationaloperator](https://developer.apple.com/documentation/accelerate/bnnsrelationaloperator)

# BNNSRelationalOperator (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe relational operations.

## Declaration

```swift
struct BNNSRelationalOperator
```

## Topics

### Relational Operators

- [BNNSRelationalOperatorEqual](bnnsrelationaloperatorequal.md): The operator that indicates the equal-to relationship.
- [BNNSRelationalOperatorGreater](bnnsrelationaloperatorgreater.md): The operator that indicates the greater-than relationship.
- [BNNSRelationalOperatorGreaterEqual](bnnsrelationaloperatorgreaterequal.md): The operator that indicates the greater-than or equal-to relationship.
- [BNNSRelationalOperatorLess](bnnsrelationaloperatorless.md): The operator that indicates the less-than relationship.
- [BNNSRelationalOperatorLessEqual](bnnsrelationaloperatorlessequal.md): The operator that indicates the less-than or equal-to relationship.
- [BNNSRelationalOperatorNotEqual](bnnsrelationaloperatornotequal.md): The operator that indicates the not-equal relationship.

### Logical Operators

- [BNNSRelationalOperatorLogicalAND](bnnsrelationaloperatorlogicaland.md): The operator that indicates the logical AND relationship.
- [BNNSRelationalOperatorLogicalNAND](bnnsrelationaloperatorlogicalnand.md): The operator that indicates the logical NAND relationship.
- [BNNSRelationalOperatorLogicalNOR](bnnsrelationaloperatorlogicalnor.md): The operator that indicates the logical NOR relationship.
- [BNNSRelationalOperatorLogicalNOT](bnnsrelationaloperatorlogicalnot.md): The operator that indicates the logical NOT relationship.
- [BNNSRelationalOperatorLogicalOR](bnnsrelationaloperatorlogicalor.md): The operator that indicates the logical OR relationship.
- [BNNSRelationalOperatorLogicalXOR](bnnsrelationaloperatorlogicalxor.md): The operator that indicates the logical XOR relationship.

### Raw Values

- [init(\_:)](bnnsrelationaloperator/init%28__%29.md)
- [init(rawValue:)](bnnsrelationaloperator/init%28rawvalue_%29.md)
- [rawValue](bnnsrelationaloperator/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Tensor comparison layers

- [compare(\_:\_:using:output:)](bnns/compare%28____using_output_%29.md): Deprecated. Performs an elementwise comparison of two array descriptors using the specified relational operator.
- [BNNSCompareTensor(\_:\_:\_:\_:)](bnnscomparetensor%28________%29.md): Deprecated. Returns a tensor of Boolean type by comparing or performing a logical operation between two inputs.

# BNNSRelationalOperator (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe relational operations.

## Declaration

```objectivec
typedef enum { ... } BNNSRelationalOperator;
```

## Topics

### Relational Operators

- [BNNSRelationalOperatorEqual](bnnsrelationaloperatorequal.md): The operator that indicates the equal-to relationship.
- [BNNSRelationalOperatorGreater](bnnsrelationaloperatorgreater.md): The operator that indicates the greater-than relationship.
- [BNNSRelationalOperatorGreaterEqual](bnnsrelationaloperatorgreaterequal.md): The operator that indicates the greater-than or equal-to relationship.
- [BNNSRelationalOperatorLess](bnnsrelationaloperatorless.md): The operator that indicates the less-than relationship.
- [BNNSRelationalOperatorLessEqual](bnnsrelationaloperatorlessequal.md): The operator that indicates the less-than or equal-to relationship.
- [BNNSRelationalOperatorNotEqual](bnnsrelationaloperatornotequal.md): The operator that indicates the not-equal relationship.

### Logical Operators

- [BNNSRelationalOperatorLogicalAND](bnnsrelationaloperatorlogicaland.md): The operator that indicates the logical AND relationship.
- [BNNSRelationalOperatorLogicalNAND](bnnsrelationaloperatorlogicalnand.md): The operator that indicates the logical NAND relationship.
- [BNNSRelationalOperatorLogicalNOR](bnnsrelationaloperatorlogicalnor.md): The operator that indicates the logical NOR relationship.
- [BNNSRelationalOperatorLogicalNOT](bnnsrelationaloperatorlogicalnot.md): The operator that indicates the logical NOT relationship.
- [BNNSRelationalOperatorLogicalOR](bnnsrelationaloperatorlogicalor.md): The operator that indicates the logical OR relationship.
- [BNNSRelationalOperatorLogicalXOR](bnnsrelationaloperatorlogicalxor.md): The operator that indicates the logical XOR relationship.

## See Also

### Tensor comparison layers

- [BNNSCompareTensor](bnnscomparetensor%28________%29.md): Deprecated. Returns a tensor of Boolean type by comparing or performing a logical operation between two inputs.
