> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/layoutrotationunarylayout

# LayoutRotationUnaryLayout

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A layout that rotates the space containing a view.

## Declaration

```swift
nonisolated struct LayoutRotationUnaryLayout
```

<a id="overview"></a>

## Overview

`View/layoutRotation3D(_:)` returns a view modified with this type. You don’t create it directly.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ViewModifier](viewmodifier.md)

## See Also

### Setting a layout direction

- [layoutDirectionBehavior(\_:)](view/layoutdirectionbehavior%28__%29.md): Sets the behavior of this view for different layout directions.
- [LayoutDirectionBehavior](layoutdirectionbehavior.md): A description of what should happen when the layout direction changes.
- [layoutDirection](environmentvalues/layoutdirection.md): The layout direction associated with the current environment.
- [LayoutDirection](layoutdirection.md): A direction in which SwiftUI can lay out content.
