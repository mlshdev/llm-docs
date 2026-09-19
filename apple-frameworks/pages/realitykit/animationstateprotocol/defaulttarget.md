> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationstateprotocol/defaulttarget

# defaultTarget

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The default unanimated value of the target.

## Declaration

```swift
var defaultTarget: Self.ValueType? { get }
```

<a id="discussion"></a>

## Discussion

The default target is the snapshot value of the animation target at the time the animation first plays. The system takes a snapshot of the animation target’s value before starting the new animation. This is controlled by setting different handoff behaviors when the animation is played.

If no snapshot was taken, `defaultTarget` will be the unanimated value when playback uses `separateAnimatedValue: true`.

Setting `separatedAnimatedValue: true` directs the animation system to maintain the unanimated value.

Otherwise, if there is no snapshot, and the unanimated value is not maintained, `defaultTarget` will be 0 or identity depending on the target’s type.
