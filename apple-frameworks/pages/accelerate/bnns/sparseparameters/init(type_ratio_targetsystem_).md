> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/sparseparameters/init(type:ratio:targetsystem:)

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
