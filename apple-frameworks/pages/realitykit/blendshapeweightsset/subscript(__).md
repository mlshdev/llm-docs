> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweightsset/subscript(_:)](https://developer.apple.com/documentation/realitykit/blendshapeweightsset/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accessor for reading a blend shape weights data in the set.

## Declaration

```swift
subscript(blendShapeName: String) -> BlendShapeWeightsSet.Element? { get }
```

## Parameters

- `blendShapeName`: The name of the blend shape to be returned.

<a id="return-value"></a>

## Return Value

Blend shape weights data associated with the given name owned by this set, or nil if not found.
