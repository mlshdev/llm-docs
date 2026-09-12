> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/geometricpin/offsetorientation](https://developer.apple.com/documentation/realitykit/geometricpin/offsetorientation)

# offsetOrientation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Offset from the pin’s base orientation.

## Declaration

```swift
var offsetOrientation: simd_quatf { get set }
```

<a id="discussion"></a>

## Discussion

If a pin has a generic name, this offset is relative to the pin’s owning entity’s orientation. If a pin is on a skeletal joint, this offset is relative to the skeletal joint’s current orientation. By default this offset is the identity rotation.
