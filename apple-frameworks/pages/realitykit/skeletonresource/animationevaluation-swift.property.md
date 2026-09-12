> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/animationevaluation-swift.property](https://developer.apple.com/documentation/realitykit/skeletonresource/animationevaluation-swift.property)

# animationEvaluation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Animation-evaluation data baked into this resource at construction time.

## Declaration

```swift
final let animationEvaluation: SkeletonResource.AnimationEvaluation
```

<a id="discussion"></a>

## Discussion

Fixed at construction and immutable for the lifetime of the resource — every reader observes the same value the initializer received.

## See Also

### Configuring animation evaluation

- [SkeletonResource.AnimationEvaluation](animationevaluation-swift.struct.md): A bundle of additional animation-related skeletal data the runtime consumes when evaluating animations against this skeleton.
- [SkeletonResource.BlendMask](blendmask.md): Describes a single blend mask for selective animation control.
