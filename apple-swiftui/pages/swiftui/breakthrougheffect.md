> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/breakthrougheffect](https://developer.apple.com/documentation/swiftui/breakthrougheffect)

# BreakthroughEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

## Declaration

```swift
struct BreakthroughEffect
```

## Topics

### Type Properties

- [automatic](breakthrougheffect/automatic.md): The system will choose the best effect for the type of element and its position within the scene. This might result in no breakthrough effect.
- [none](breakthrougheffect/none.md): The element is clipped by occluding content. This is not supported when used to customize a sheet breakthrough effect.
- [prominent](breakthrougheffect/prominent.md): The element is prominently revealed through occluding content.
- [subtle](breakthrougheffect/subtle.md): The element is subtly blended over occluding content.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring passthrough

- [preferredSurroundingsEffect(\_:)](view/preferredsurroundingseffect%28__%29.md): Applies an effect to passthrough video.
- [SurroundingsEffect](surroundingseffect.md): Effects that the system can apply to passthrough video.
- [breakthroughEffect(\_:)](view/breakthrougheffect%28__%29.md): Ensures that the view is always visible to the user, even when other content is occluding it, like 3D models.
