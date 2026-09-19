> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikrig/constraint/ikpositiondemand/influencedepthmaxjointcount

# influenceDepthMaxJointCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The number of joints to be influenced by this demand.

## Declaration

```swift
var influenceDepthMaxJointCount: Int
```

<a id="discussion"></a>

## Discussion

The count starts from the constrained joint and continues up the chain to the skeleton’s root.

> **Note**

> A depth of `0` disables the constraint, while negative values are treated as `Int.max`
