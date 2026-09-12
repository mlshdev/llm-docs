> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-1w21n/estimatedcost(of:)](https://developer.apple.com/documentation/coreml/mlcomputeplan-1w21n/estimatedcost(of:))

# estimatedCost(of:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Returns the estimated cost of executing a MLProgram operation.

## Declaration

```swift
func estimatedCost(of operation: MLModelStructure.Program.Operation) -> MLComputePlan.Cost?
```

## Parameters

- `operation`: A MLProgram operation

<a id="return-value"></a>

## Return Value

The estimated cost of executing the operation.

## Mentioned In

- [Analyzing a Core ML model’s performance in Xcode](../analyzing-a-core-ml-model-s-performance-in-xcode.md)

## See Also

### Getting the estimated cost

- [MLComputePlan.Cost](cost.md): A struct containing information on the estimated cost of executing a layer/operation.
