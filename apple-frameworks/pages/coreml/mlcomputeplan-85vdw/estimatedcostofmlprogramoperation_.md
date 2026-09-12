> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-85vdw/estimatedcostofmlprogramoperation:](https://developer.apple.com/documentation/coreml/mlcomputeplan-85vdw/estimatedcostofmlprogramoperation:)

# estimatedCostOfMLProgramOperation:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Returns the estimated cost of executing an ML Program operation.

## Declaration

```objectivec
- (MLComputePlanCost *) estimatedCostOfMLProgramOperation:(MLModelStructureProgramOperation *) operation;
```

## Parameters

- `operation`: An ML Program operation.

<a id="return-value"></a>

## Return Value

The estimated cost of executing the operation or nil if the cost couldn’t be estimated.

## See Also

### Getting the estimated cost

- [MLComputePlanCost](../mlcomputeplancost.md): A class that represents the estimated cost of executing a layer or operation.
