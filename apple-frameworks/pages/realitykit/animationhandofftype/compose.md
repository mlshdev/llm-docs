> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationhandofftype/compose](https://developer.apple.com/documentation/realitykit/animationhandofftype/compose)

# compose

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Adds the new animation to existing animations, and immediately starts the new animation.

## Declaration

```swift
static var compose: AnimationHandoffType { get }
```

<a id="discussion"></a>

## Discussion

Use this handoff for additive animations. If the new animation isn’t additive, then `compose` adds the new animation and removes the existing animation.
