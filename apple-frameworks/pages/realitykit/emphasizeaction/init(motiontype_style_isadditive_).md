> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/emphasizeaction/init(motiontype:style:isadditive:)

# init(motionType:style:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new emphasize action.

## Declaration

```swift
init(motionType: EmphasizeAction.EmphasisMotionType, style: EmphasizeAction.EmphasisAnimationStyle = .basic, isAdditive: Bool = false)
```

## Parameters

- `motionType`: An option that implements animation effects.
- `style`: An option that implements different kinds of animation timing.
- `isAdditive`: A Boolean value that indicates whether the animation system additively blends the action’s output with the base value.
