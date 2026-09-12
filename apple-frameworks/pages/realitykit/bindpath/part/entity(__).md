> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindpath/part/entity(_:)](https://developer.apple.com/documentation/realitykit/bindpath/part/entity(_:))

# BindPath.Part.entity(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A path component for a nested entity.

## Declaration

```swift
case entity(String)
```

<a id="discussion"></a>

## Discussion

This path component indicates that another component follows, which either contains or identifies the property of the entity that animates.

## See Also

### Choosing the path component

- [BindPath.Part.anchorEntity(\_:)](anchorentity%28__%29.md): A path component for the scene’s anchor entity.
- [BindPath.Part.jointTransforms](jointtransforms.md): A path component to animate joint transforms.
- [BindPath.Part.parameter(\_:)](parameter%28__%29.md): A path component to animate a named parameter.
- [BindPath.Part.scene(\_:)](scene%28__%29.md): A path component for a nested scene.
- [BindPath.Part.transform](transform.md): A path component to animate a transform.
