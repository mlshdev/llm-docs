> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindpath/part/parameter(_:)](https://developer.apple.com/documentation/realitykit/bindpath/part/parameter(_:))

# BindPath.Part.parameter(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A path component to animate a named parameter.

## Declaration

```swift
case parameter(String)
```

<a id="discussion"></a>

## Discussion

This path component terminates an array of paths, and at the same time specifies a named scene or entity property that animates.

## See Also

### Choosing the path component

- [BindPath.Part.anchorEntity(\_:)](anchorentity%28__%29.md): A path component for the scene’s anchor entity.
- [BindPath.Part.entity(\_:)](entity%28__%29.md): A path component for a nested entity.
- [BindPath.Part.jointTransforms](jointtransforms.md): A path component to animate joint transforms.
- [BindPath.Part.scene(\_:)](scene%28__%29.md): A path component for a nested scene.
- [BindPath.Part.transform](transform.md): A path component to animate a transform.
