> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweightsset/contains(_:)](https://developer.apple.com/documentation/realitykit/blendshapeweightsset/contains(_:))

# contains(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Checks if the set contains a blend shape weights data instance with the given name.

## Declaration

```swift
func contains(_ blendShapeName: String) -> Bool
```

## Parameters

- `blendShapeName`: The name of the blend shape to look up.

<a id="return-value"></a>

## Return Value

`true` blend shape weights data associated with the matching name is contained in the set.
