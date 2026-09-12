> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/compare(_:_:using:output:)](https://developer.apple.com/documentation/accelerate/bnns/compare(_:_:using:output:))

# compare(\_:\_:using:output:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Performs an elementwise comparison of two array descriptors using the specified relational operator.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func compare(_ inputA: BNNSNDArrayDescriptor, _ inputB: BNNSNDArrayDescriptor, using relationalOperator: BNNS.RelationalOperator, output: BNNSNDArrayDescriptor) throws
```

## Parameters

- `inputA`: The descriptor of the first input.
- `inputB`: The descriptor of the second input.
- `relationalOperator`: The operator for comparison.
- `output`: The descriptor of the output.

## Topics

### Specifying a Relational Operator

- [BNNS.RelationalOperator](relationaloperator.md): Deprecated. Constants that describe relational operations.

## See Also

### Tensor comparison layers

- [BNNSRelationalOperator](../bnnsrelationaloperator.md): Constants that describe relational operations.
- [BNNSCompareTensor(\_:\_:\_:\_:)](../bnnscomparetensor%28________%29.md): Deprecated. Returns a tensor of Boolean type by comparing or performing a logical operation between two inputs.
