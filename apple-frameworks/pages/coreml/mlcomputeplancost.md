> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplancost](https://developer.apple.com/documentation/coreml/mlcomputeplancost)

# MLComputePlanCost

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A class that represents the estimated cost of executing a layer or operation.

## Declaration

```objectivec
@interface MLComputePlanCost : NSObject
```

## Topics

### Accessing the weight

- [weight](mlcomputeplancost/weight.md): The estimated workload of executing the operation over the total model execution. The value is between \[0.0, 1.0\].

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Compute plan

- [MLComputePlan](mlcomputeplan-85vdw.md): A class describing the plan for executing a model.
- [MLComputePlanDeviceUsage](mlcomputeplandeviceusage.md): The anticipated compute devices to use for executing a layer or operation.
