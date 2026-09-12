> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweightsset/set(_:)](https://developer.apple.com/documentation/realitykit/blendshapeweightsset/set(_:))

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Updates a blend shape weights data instance in the set based on its name. If blend shape weights data with this ID does not exist, does nothing.

## Declaration

```swift
@discardableResult mutating func set(_ newValue: BlendShapeWeightsSet.Element) -> BlendShapeWeightsSet.Element?
```

## Parameters

- `newValue`: The blend shape weights data to store.

<a id="return-value"></a>

## Return Value

The previous pose value, if named pose exists. nil otherwise.
