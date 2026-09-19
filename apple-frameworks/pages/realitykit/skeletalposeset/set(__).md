> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/skeletalposeset/set(_:)

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Updates a pose in the set based on its name. If pose with this ID does not exist, does nothing.

## Declaration

```swift
@discardableResult mutating func set(_ newValue: SkeletalPoseSet.Element) -> SkeletalPoseSet.Element?
```

## Parameters

- `newValue`: The pose to store.

<a id="return-value"></a>

## Return Value

The previous pose value, if named pose exists
