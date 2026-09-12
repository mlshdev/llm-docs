> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sparseparameters/init(type:ratio:targetsystem:)](https://developer.apple.com/documentation/accelerate/bnns/sparseparameters/init(type:ratio:targetsystem:))

# init(type:ratio:targetSystem:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new sparse parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(type: BNNS.SparsityType = .unstructured, ratio: (numerator: UInt32, denominator: UInt32), targetSystem: BNNSTargetSystem)
```
