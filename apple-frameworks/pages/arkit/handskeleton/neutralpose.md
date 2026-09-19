> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/handskeleton/neutralpose

# neutralPose

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

A hand pose that you can use as a reference.

## Declaration

```swift
static var neutralPose: HandSkeleton { get }
```

<a id="Discussion"></a>

## Discussion

For example, you might use this property as part of visualizing all of the available joints in a skeleton.

## See Also

### Inspecting hand skeletons

- [allJoints](alljoints.md): All of the joints in a hand skeleton.
- [description](description.md): A textual representation of this Skeleton.
