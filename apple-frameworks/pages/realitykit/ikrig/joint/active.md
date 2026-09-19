> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikrig/joint/active

# active

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A boolean value that sets whether the solver rotates the joint.

## Declaration

```swift
var active: Bool
```

<a id="discussion"></a>

## Discussion

Leaf hierarchies that do not need to be directly constrained can be deactivated to reduce the compute cost of the solver.
