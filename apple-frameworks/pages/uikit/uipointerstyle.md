> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle](https://developer.apple.com/documentation/uikit/uipointerstyle)

# UIPointerStyle (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object that defines the pointer shape and effect.

## Declaration

```swift
@MainActor class UIPointerStyle
```

<a id="overview"></a>

## Overview

Whenever possible, match pointer styles to UIKit styles and make them consistent with the visual intent of similar views.

> **Note**

>  When supporting the use of Apple Pencil, effect-based styles, such as a pointer style created using [init(effect:shape:)](uipointerstyle/init%28effect_shape_%29.md) are fully supported, but shape-based pointer styles created using [init(shape:constrainedAxes:)](uipointerstyle/init%28shape_constrainedaxes_%29.md) aren’t.

For more information, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/inputs/pointing-devices/).

## Topics

### Creating a pointer style

- [init(effect:shape:)](uipointerstyle/init%28effect_shape_%29.md): Applies the provided content effect and pointer shape to the current region.
- [init(shape:constrainedAxes:)](uipointerstyle/init%28shape_constrainedaxes_%29.md): Morphs the pointer into the provided shape when hovering over the current region.
- [hidden()](uipointerstyle/hidden%28%29.md): Hides the pointer when it moves over the current region.
- [system()](uipointerstyle/system%28%29.md): Morphs the pointer into a default system-style pointer.

### Specifying pointer accessories

- [accessories](uipointerstyle/accessories.md): Accessories to display alongside the pointer.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.

## Relationships

### Inherits From

- [UIHoverStyle](uihoverstyle.md)

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

### Pointer styles

- [UIPointerShape](uipointershape-swift.enum.md): An object that defines the shape of custom pointers.
- [UIPointerEffect](uipointereffect-swift.enum.md): An effect that alters a view’s appearance when a pointer enters the current region.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.

# UIPointerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object that defines the pointer shape and effect.

## Declaration

```objectivec
@interface UIPointerStyle : UIHoverStyle
```

<a id="overview"></a>

## Overview

Whenever possible, match pointer styles to UIKit styles and make them consistent with the visual intent of similar views.

> **Note**

>  When supporting the use of Apple Pencil, effect-based styles, such as a pointer style created using [init(effect:shape:)](uipointerstyle/init%28effect_shape_%29.md) are fully supported, but shape-based pointer styles created using [init(shape:constrainedAxes:)](uipointerstyle/init%28shape_constrainedaxes_%29.md) aren’t.

For more information, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/inputs/pointing-devices/).

## Topics

### Creating a pointer style

- [styleWithEffect:shape:](uipointerstyle/stylewitheffect_shape_.md): Applies the provided content effect and pointer shape to the current region.
- [styleWithShape:constrainedAxes:](uipointerstyle/stylewithshape_constrainedaxes_.md): Morphs the pointer into the provided shape when it moves over the current region.
- [hiddenPointerStyle](uipointerstyle/hidden%28%29.md): Hides the pointer when it moves over the current region.
- [systemPointerStyle](uipointerstyle/system%28%29.md): Morphs the pointer into a default system-style pointer.

### Specifying pointer accessories

- [accessories](uipointerstyle/accessories.md): Accessories to display alongside the pointer.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.

## Relationships

### Inherits From

- [UIHoverStyle](uihoverstyle.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Pointer styles

- [UIPointerShape](uipointershape-c.class.md): An object that defines the shape of custom pointers.
- [UIPointerEffect](uipointereffect-c.class.md): An effect that alters a view’s appearance when a pointer enters the current region.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.
