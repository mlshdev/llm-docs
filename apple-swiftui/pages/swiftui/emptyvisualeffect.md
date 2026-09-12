> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/emptyvisualeffect](https://developer.apple.com/documentation/swiftui/emptyvisualeffect)

# EmptyVisualEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The base visual effect that you apply additional effect to.

## Declaration

```swift
struct EmptyVisualEffect
```

<a id="overview"></a>

## Overview

`EmptyVisualEffect` does not change the appearance of the view that it is applied to.

## Topics

### Creating an empty visual effect

- [init()](emptyvisualeffect/init%28%29.md): Creates a new empty visual effect.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisualEffect](visualeffect.md)

## See Also

### Applying effects based on geometry

- [visualEffect(\_:)](view/visualeffect%28__%29.md): Applies effects to this view, while providing access to layout information through a geometry proxy.
- [visualEffect3D(\_:)](view/visualeffect3d%28__%29.md): Applies effects to this view, while providing access to layout information through a 3D geometry proxy.
- [VisualEffect](visualeffect.md): Visual Effects change the visual appearance of a view without changing its ancestors or descendents.
