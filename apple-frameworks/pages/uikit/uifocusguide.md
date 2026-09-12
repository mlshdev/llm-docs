> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusguide](https://developer.apple.com/documentation/uikit/uifocusguide)

# UIFocusGuide (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that exposes nonview areas as focusable.

## Declaration

```swift
@MainActor class UIFocusGuide
```

## Mentioned In

- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md)
- [Creating custom navigation interactions](creating-custom-navigation-interactions.md)

<a id="overview"></a>

## Overview

As a subclass of [UILayoutGuide](uilayoutguide.md), a focus guide is not a view and does not define a new view or participate in the view hierarchy at all, except as an Auto Layout guide. Unlike [UILayoutGuide](uilayoutguide.md), [UIFocusGuide](uifocusguide.md) represents an invisible, focusable region that can redirect focus movement to other views. The `UIFocus.h` header file, including its related classes and its protocol, creates a single high-level software interface for controlling focus in apps that use focus-based input. This programming interface also helps to control focus behavior on the screen.

## Topics

### Enabling focus

- [isEnabled](uifocusguide/isenabled.md): A Boolean value that indicates whether the guide is focusable.
- [preferredFocusEnvironments](uifocusguide/preferredfocusenvironments.md): An array of focus environments to which the guide directs focus, ordered by priority.
- [preferredFocusedView](uifocusguide/preferredfocusedview.md): Deprecated. The view that the focus will be redirected to if this guide is focused.

## Relationships

### Inherits From

- [UILayoutGuide](uilayoutguide.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)

## See Also

### Focus guides

- [Creating custom navigation interactions](creating-custom-navigation-interactions.md): Build nonstandard navigation interactions that move focus to the desired location.

# UIFocusGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that exposes nonview areas as focusable.

## Declaration

```objectivec
@interface UIFocusGuide : UILayoutGuide
```

## Mentioned In

- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md)
- [Creating custom navigation interactions](creating-custom-navigation-interactions.md)

<a id="overview"></a>

## Overview

As a subclass of [UILayoutGuide](uilayoutguide.md), a focus guide is not a view and does not define a new view or participate in the view hierarchy at all, except as an Auto Layout guide. Unlike [UILayoutGuide](uilayoutguide.md), [UIFocusGuide](uifocusguide.md) represents an invisible, focusable region that can redirect focus movement to other views. The `UIFocus.h` header file, including its related classes and its protocol, creates a single high-level software interface for controlling focus in apps that use focus-based input. This programming interface also helps to control focus behavior on the screen.

## Topics

### Enabling focus

- [enabled](uifocusguide/isenabled.md): A Boolean value that indicates whether the guide is focusable.
- [preferredFocusEnvironments](uifocusguide/preferredfocusenvironments.md): An array of focus environments to which the guide directs focus, ordered by priority.
- [preferredFocusedView](uifocusguide/preferredfocusedview.md): Deprecated. The view that the focus will be redirected to if this guide is focused.

## Relationships

### Inherits From

- [UILayoutGuide](uilayoutguide.md)

## See Also

### Focus guides

- [Creating custom navigation interactions](creating-custom-navigation-interactions.md): Build nonstandard navigation interactions that move focus to the desired location.
