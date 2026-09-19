> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/skeletalposeset/contains(_:)

# contains(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Checks if the set contains a pose with the given name.

## Declaration

```swift
func contains(_ poseID: SkeletalPose.ID) -> Bool
```

## Parameters

- `poseID`: The name of the pose to look up

<a id="return-value"></a>

## Return Value

`true` a pose with matching name is contained in the set.
