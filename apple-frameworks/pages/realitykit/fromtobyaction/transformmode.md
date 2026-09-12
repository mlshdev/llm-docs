> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/transformmode](https://developer.apple.com/documentation/realitykit/fromtobyaction/transformmode)

# FromToByAction.TransformMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Options available to determine the space the bound entity should be relative to.

## Declaration

```swift
enum TransformMode
```

<a id="overview"></a>

## Overview

The [FromToByAction](../fromtobyaction.md) structure accepts this enumeration as an initializer argument when the [FromToByAction](../fromtobyaction.md) value is a [Transform](../transform.md) type.

## Topics

### Enumeration Cases

- [FromToByAction.TransformMode.local](transformmode/local.md): The provided transforms are relative to the transform of the bound entity.
- [FromToByAction.TransformMode.parent](transformmode/parent.md): The provided transforms are relative to the bound entities parent transform.
- [FromToByAction.TransformMode.relative(to:)](transformmode/relative%28to_%29.md): The provided transforms are relative to the resolved entities transform.
- [FromToByAction.TransformMode.scene](transformmode/scene.md): The provided transform is relative to the scene, in world space.

### Type Properties

- [default](transformmode/default.md): Default transform mode used by the specializations which use transform mode.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
