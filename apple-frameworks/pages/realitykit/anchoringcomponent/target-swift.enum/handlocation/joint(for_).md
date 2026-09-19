> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/target-swift.enum/handlocation/joint(for:)

# joint(for:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

The function that returns the `HandLocation` based on `HandJoint`.

## Declaration

```swift
static func joint(for joint: AnchoringComponent.Target.HandLocation.HandJoint) -> AnchoringComponent.Target.HandLocation
```

## Parameters

- `joint`: The joint to be targeted.

<a id="return-value"></a>

## Return Value

The `HandLocation` represents the hand joint.
