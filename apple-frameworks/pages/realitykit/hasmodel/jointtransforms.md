> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasmodel/jointtransforms](https://developer.apple.com/documentation/realitykit/hasmodel/jointtransforms)

# jointTransforms

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The relative joint transforms of the model entity.

## Declaration

```swift
@MainActor @preconcurrency var jointTransforms: [Transform] { get set }
```

<a id="discussion"></a>

## Discussion

Call `RealityKit/BodyTrackedEntity/jointNames` to determine the name and order of the joints.

> **Note**

> Active animations may override the joint transforms set using this property.

## See Also

### Managing joints

- [jointNames](jointnames.md): The names of all the joints in the model entity.
