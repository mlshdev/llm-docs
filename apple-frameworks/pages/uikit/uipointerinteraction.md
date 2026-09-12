> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteraction](https://developer.apple.com/documentation/uikit/uipointerinteraction)

# UIPointerInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An interaction that enables support for effects on a view or customizes the pointer’s appearance within a region of an app.

## Declaration

```swift
@MainActor class UIPointerInteraction
```

<a id="overview"></a>

## Overview

If you use a [UIButton](uibutton.md) as an interface object, use the button’s [isPointerInteractionEnabled](uibutton/ispointerinteractionenabled.md) and [pointerStyleProvider](uibutton/pointerstyleprovider-1d4d2.md) to customize the proposed effect before constructing your own custom pointer effect using a [UIPointerInteraction](uipointerinteraction.md).

> **Note**

>  In iPadOS, the visual interactions when using mouse or trackpad input versus Apple Pencil input are slightly different: For example, pointer styles such as the system pointer aren’t visible while using Apple Pencil. However, both input devices support effect-based pointers, but have a slightly different visual appearance depending on which device is in use.

## Topics

### Create pointer interactions

- [init(delegate:)](uipointerinteraction/init%28delegate_%29.md): Initializes a pointer interaction object with a specified delegate object.

### Manage pointer interactions

- [delegate](uipointerinteraction/delegate.md): An object that responds to pointer movements.
- [UIPointerInteractionDelegate](uipointerinteractiondelegate.md): An interface for handling pointer movements within the interaction’s view.

### Activate pointer interactions

- [isEnabled](uipointerinteraction/isenabled.md): A Boolean value that indicates whether the pointer interaction is an enabled state.

### Trigger a pointer update

- [invalidate()](uipointerinteraction/invalidate%28%29.md): Causes the interaction to update the pointer in response to an event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Essentials

- [UIPointerInteractionDelegate](uipointerinteractiondelegate.md): An interface for handling pointer movements within the interaction’s view.
- [Integrating pointer interactions into your iPad app](integrating-pointer-interactions-into-your-ipad-app.md): Support touch interactions in your iPad app by adding pointer interactions to your views.
- [Enhancing your iPad app with pointer interactions](enhancing-your-ipad-app-with-pointer-interactions.md): Provide a great user experience with pointing devices, by incorporating pointer content effects and shape customizations.

# UIPointerInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An interaction that enables support for effects on a view or customizes the pointer’s appearance within a region of an app.

## Declaration

```objectivec
@interface UIPointerInteraction : NSObject
```

<a id="overview"></a>

## Overview

If you use a [UIButton](uibutton.md) as an interface object, use the button’s [pointerInteractionEnabled](uibutton/ispointerinteractionenabled.md) and [pointerStyleProvider](uibutton/pointerstyleprovider-1d4d2.md) to customize the proposed effect before constructing your own custom pointer effect using a [UIPointerInteraction](uipointerinteraction.md).

> **Note**

>  In iPadOS, the visual interactions when using mouse or trackpad input versus Apple Pencil input are slightly different: For example, pointer styles such as the system pointer aren’t visible while using Apple Pencil. However, both input devices support effect-based pointers, but have a slightly different visual appearance depending on which device is in use.

## Topics

### Create pointer interactions

- [initWithDelegate:](uipointerinteraction/init%28delegate_%29.md): Initializes a pointer interaction object with a specified delegate object.

### Manage pointer interactions

- [delegate](uipointerinteraction/delegate.md): An object that responds to pointer movements.
- [UIPointerInteractionDelegate](uipointerinteractiondelegate.md): An interface for handling pointer movements within the interaction’s view.

### Activate pointer interactions

- [enabled](uipointerinteraction/isenabled.md): A Boolean value that indicates whether the pointer interaction is an enabled state.

### Trigger a pointer update

- [invalidate](uipointerinteraction/invalidate%28%29.md): Causes the interaction to update the pointer in response to an event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Essentials

- [UIPointerInteractionDelegate](uipointerinteractiondelegate.md): An interface for handling pointer movements within the interaction’s view.
- [Integrating pointer interactions into your iPad app](integrating-pointer-interactions-into-your-ipad-app.md): Support touch interactions in your iPad app by adding pointer interactions to your views.
- [Enhancing your iPad app with pointer interactions](enhancing-your-ipad-app-with-pointer-interactions.md): Provide a great user experience with pointing devices, by incorporating pointer content effects and shape customizations.
