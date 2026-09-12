> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihoverstyle](https://developer.apple.com/documentation/uikit/uihoverstyle)

# UIHoverStyle (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The hover style to apply to a view, including an effect and a shape to use for displaying that effect.

## Declaration

```swift
@MainActor class UIHoverStyle
```

## Topics

### Creating a hover style

- [init(effect:shape:)](uihoverstyle/init%28effect_shape_%29.md): Creates a hover style with the provided effect and shape.
- [init(shape:)](uihoverstyle/init%28shape_%29.md): Creates a hover style with the provided shape and an automatic hover effect.

### Specifying a hover shape

- [shape](uihoverstyle/shape-21npk.md): The shape to use for the hover effect.
- [UIShape](uishape-swift.struct.md): An abstract representation of a shape.

### Specifying a hover effect

- [effect](uihoverstyle/effect-4vdoj.md): The effect to apply to the view with this style.
- [UIHoverAutomaticEffect](uihoverautomaticeffect-swift.struct.md): A system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.
- [UIHoverHighlightEffect](uihoverhighlighteffect-swift.struct.md): An effect that applies a highlight to the view on hover.
- [UIHoverLiftEffect](uihoverlifteffect-swift.struct.md): An effect that can visually lift the view on hover where appropriate.
- [UIHoverEffect](uihovereffect-40091.md): A hover effect that can apply to a view through a hover style.

### Managing the state of the hover effect

- [isEnabled](uihoverstyle/isenabled.md): A Boolean value that determines whether the hover effect is active.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPointerStyle](uipointerstyle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the hover appearance

- [hoverStyle](uiview/hoverstyle.md): The hover style for the view.
- [UIHoverEffectLayer](uihovereffectlayer.md): A layer type that can be used to apply a hover effect to its sublayers.

# UIHoverStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The hover style to apply to a view, including an effect and a shape to use for displaying that effect.

## Declaration

```objectivec
@interface UIHoverStyle : NSObject
```

## Topics

### Creating a hover style

- [styleWithShape:](uihoverstyle/stylewithshape_.md): Creates a hover style with the provided shape.
- [styleWithEffect:shape:](uihoverstyle/stylewitheffect_shape_.md): Creates a hover style with the provided effect and shape.
- [automaticStyle](uihoverstyle/automaticstyle.md): Creates an automatic hover style.

### Specifying a hover shape

- [shape](uihoverstyle/shape-55cmq.md): The shape to use for the hover effect.
- [UIShape](uishape-c.class.md): An abstract representation of a shape.

### Specifying a hover effect

- [effect](uihoverstyle/effect-12r83.md): The effect to apply to the view with this style.
- [UIHoverAutomaticEffect](uihoverautomaticeffect-c.class.md): A system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.
- [UIHoverHighlightEffect](uihoverhighlighteffect-c.class.md): An effect that applies a highlight to the view on hover.
- [UIHoverLiftEffect](uihoverlifteffect-c.class.md): An effect that can visually lift the view on hover where appropriate.
- [UIHoverEffect](uihovereffect-ukid.md): A hover effect that can apply to a view through a hover style.

### Managing the state of the hover effect

- [enabled](uihoverstyle/isenabled.md): A Boolean value that determines whether the hover effect is active.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPointerStyle](uipointerstyle.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Managing the hover appearance

- [hoverStyle](uiview/hoverstyle.md): The hover style for the view.
- [UIHoverEffectLayer](uihovereffectlayer.md): A layer type that can be used to apply a hover effect to its sublayers.
