> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationstate/defaultsourcejoints(index:count:transforms:)

# defaultSourceJoints(index:count:transforms:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Retrieves a subset of default source joints, and stores them in the output transform array.

## Declaration

```swift
func defaultSourceJoints(index: Int, count: Int, transforms: inout [Transform]) -> Bool
```

<a id="discussion"></a>

## Discussion

See [defaultSource](../animationstateprotocol/defaultsource.md) for more about the default source value.
