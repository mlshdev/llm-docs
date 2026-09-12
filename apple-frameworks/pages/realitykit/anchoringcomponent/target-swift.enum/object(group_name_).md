> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/target-swift.enum/object(group:name:)](https://developer.apple.com/documentation/realitykit/anchoringcomponent/target-swift.enum/object(group:name:))

# AnchoringComponent.Target.object(group:name:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 26.0+

An anchor point attached to the object specified by a group and a name in AR Resources.

## Declaration

```swift
case object(group: String, name: String)
```

<a id="discussion"></a>

## Discussion

> **Note**

> macOS, visionOS and tvOS apps don’t track this type of anchor.

## See Also

### Image and object anchor targets

- [AnchoringComponent.Target.image(group:name:)](image%28group_name_%29.md): An anchor point attached to the image specified by a group and a name in AR Resources.
- [AnchoringComponent.Target.referenceImage(from:)](referenceimage%28from_%29.md): An anchor point attached to the image specified by an image anchoring source.
- [AnchoringComponent.Target.referenceObject(from:)](referenceobject%28from_%29.md): An anchor point attached to an object that matches the reference of an object anchor.
