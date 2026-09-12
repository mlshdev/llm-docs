> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocushaloeffect](https://developer.apple.com/documentation/uikit/uifocushaloeffect)

# UIFocusHaloEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A visual focus effect that draws a halo around the focus item.

## Declaration

```swift
class UIFocusHaloEffect
```

## Topics

### Creating a halo effect

- [init(roundedRect:cornerRadius:curve:)](uifocushaloeffect/init%28roundedrect_cornerradius_curve_%29.md): Creates a rounded halo effect using the specified corner radius and corner curve.
- [init(rect:)](uifocushaloeffect/init%28rect_%29.md): Creates a rectangular halo effect using the specified rectangle.
- [init(path:)](uifocushaloeffect/init%28path_%29.md): Creates a halo effect using the specified Bézier path.

### Configuring a halo effect

- [containerView](uifocushaloeffect/containerview.md): The container view to place the halo effect into.
- [referenceView](uifocushaloeffect/referenceview.md): The view to place the halo effect above.
- [position](uifocushaloeffect/position-swift.property.md): The position of the halo effect relative to its shape.
- [UIFocusHaloEffect.Position](uifocushaloeffect/position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.

## Relationships

### Inherits From

- [UIFocusEffect](uifocuseffect.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Focus effects

- [UIFocusEffect](uifocuseffect.md): The base class for defining a visual focus effect.
- [UIFocusHaloEffect.Position](uifocushaloeffect/position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.

# UIFocusHaloEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A visual focus effect that draws a halo around the focus item.

## Declaration

```objectivec
@interface UIFocusHaloEffect : UIFocusEffect
```

## Topics

### Creating a halo effect

- [effectWithRoundedRect:cornerRadius:curve:](uifocushaloeffect/init%28roundedrect_cornerradius_curve_%29.md): Creates a rounded halo effect using the specified corner radius and corner curve.
- [effectWithRect:](uifocushaloeffect/init%28rect_%29.md): Creates a rectangular halo effect using the specified rectangle.
- [effectWithPath:](uifocushaloeffect/init%28path_%29.md): Creates a halo effect using the specified Bézier path.

### Configuring a halo effect

- [containerView](uifocushaloeffect/containerview.md): The container view to place the halo effect into.
- [referenceView](uifocushaloeffect/referenceview.md): The view to place the halo effect above.
- [position](uifocushaloeffect/position-swift.property.md): The position of the halo effect relative to its shape.
- [UIFocusHaloEffectPosition](uifocushaloeffect/position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.

## Relationships

### Inherits From

- [UIFocusEffect](uifocuseffect.md)

## See Also

### Focus effects

- [UIFocusEffect](uifocuseffect.md): The base class for defining a visual focus effect.
- [UIFocusHaloEffectPosition](uifocushaloeffect/position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.
