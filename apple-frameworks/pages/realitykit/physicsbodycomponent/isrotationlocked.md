> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsbodycomponent/isrotationlocked](https://developer.apple.com/documentation/realitykit/physicsbodycomponent/isrotationlocked)

# isRotationLocked

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A tuple of Boolean values that you use to lock rotation of the physics body around any of the three axes.

## Declaration

```swift
var isRotationLocked: (x: Bool, y: Bool, z: Bool)
```

<a id="discussion"></a>

## Discussion

For any one of the three Booleans in the tuple that you set to `true`, rotation is restricted on the axis represented by that item. For example, if you set the `x` item to true, then the body can’t rotate around the x-axis. By default, rotation isn’t restricted.

## See Also

### Locking movement

- [isTranslationLocked](istranslationlocked.md): A tuple of Boolean values that you use to lock the position of the physics body along any of the three axes.
