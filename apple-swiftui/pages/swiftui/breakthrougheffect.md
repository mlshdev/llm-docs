> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/breakthrougheffect

# BreakthroughEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

The way a presentation shows through content in front of it.

## Declaration

```swift
struct BreakthroughEffect
```

<a id="overview"></a>

## Overview

In a volumetric scene, 3D models and other app content can end up between the person using your app and a sheet or popover. Breakthrough keeps the presentation legible anyway. Pass a value of this type to [presentationBreakthroughEffect(\_:)](view/presentationbreakthrougheffect%28__%29.md) to choose how strongly it comes through:

```swift
Button("Show Details") {
    isShowingDetails = true
}
.popover(isPresented: $isShowingDetails) {
    DetailsView()
        .presentationBreakthroughEffect(.prominent)
}
```

Most system presentations already break through, so use this only when the default is too strong or too faint against your content. Only popovers can turn the effect off with [none](breakthrougheffect/none.md); passing that value for a sheet has no effect.

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
