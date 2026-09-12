> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointereffect-swift.enum](https://developer.apple.com/documentation/uikit/uipointereffect-swift.enum)

# UIPointerEffect

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS

An effect that alters a view’s appearance when a pointer enters the current region.

## Declaration

```swift
enum UIPointerEffect
```

<a id="overview"></a>

## Overview

`UIPointerEffect` automatically attempts to determine the appropriate effect for the given preview. Use one of its enumeration cases to request a specific system-provided effect.

## Topics

### Accessing the preview

- [preview](uipointereffect-swift.enum/preview.md): A preview of the view used during an interaction’s animations.

### Creating a default effect

- [UIPointerEffect.automatic(\_:)](uipointereffect-swift.enum/automatic%28__%29.md): A pointer content effect with the given preview’s view.

### Creating a specific effect

- [UIPointerEffect.highlight(\_:)](uipointereffect-swift.enum/highlight%28__%29.md): An effect where the pointer slides under the given view and morphs into the view’s shape.
- [UIPointerEffect.hover(\_:preferredTintMode:prefersShadow:prefersScaledContent:)](uipointereffect-swift.enum/hover%28__preferredtintmode_prefersshadow_prefersscaledcontent_%29.md): An effect where visual changes apply to the view and the pointer retains its default shape.
- [UIPointerEffect.lift(\_:)](uipointereffect-swift.enum/lift%28__%29.md): An effect where the pointer slides under the given view and disappears as the view scales up and gains a shadow.

### Enumerations

- [UIPointerEffect.TintMode](uipointereffect-swift.enum/tintmode.md): An effect that defines how to apply a tint to a view during a pointer interaction.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIHoverEffect](uihovereffect-40091.md)

## See Also

### Pointer styles

- [UIPointerStyle](uipointerstyle.md): An object that defines the pointer shape and effect.
- [UIPointerShape](uipointershape-swift.enum.md): An object that defines the shape of custom pointers.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.
