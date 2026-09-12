> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-1w21n/cost](https://developer.apple.com/documentation/coreml/mlcomputeplan-1w21n/cost)

# MLComputePlan.Cost

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

A struct containing information on the estimated cost of executing a layer/operation.

## Declaration

```swift
struct Cost
```

## Topics

### Accessing the weight

- [weight](cost/weight.md): The estimated workload of executing the operation over the total model evaluation. The value is between \[0.0, 1.0\].

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the estimated cost

- [estimatedCost(of:)](estimatedcost%28of_%29.md): Returns the estimated cost of executing a MLProgram operation.
