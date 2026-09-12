> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/target-swift.enum/referenceobject(from:)](https://developer.apple.com/documentation/realitykit/anchoringcomponent/target-swift.enum/referenceobject(from:))

# AnchoringComponent.Target.referenceObject(from:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An anchor point attached to an object that matches the reference of an object anchor.

## Declaration

```swift
case referenceObject(from: AnchoringComponent.ObjectAnchoringSource)
```

<a id="discussion"></a>

## Discussion

> **Note**

> macOS and tvOS apps don’t track this type of anchor.

## See Also

### Image and object anchor targets

- [AnchoringComponent.Target.image(group:name:)](image%28group_name_%29.md): An anchor point attached to the image specified by a group and a name in AR Resources.
- [AnchoringComponent.Target.referenceImage(from:)](referenceimage%28from_%29.md): An anchor point attached to the image specified by an image anchoring source.
- [AnchoringComponent.Target.object(group:name:)](object%28group_name_%29.md): An anchor point attached to the object specified by a group and a name in AR Resources.
