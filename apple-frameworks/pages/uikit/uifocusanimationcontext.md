> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusanimationcontext](https://developer.apple.com/documentation/uikit/uifocusanimationcontext)

# UIFocusAnimationContext (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Information about focusing animations being performed by the system.

## Declaration

```swift
@MainActor protocol UIFocusAnimationContext : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You don’t adopt this protocol in your custom classes. When a focus update occurs and the system provides you with a [UIFocusAnimationCoordinator](uifocusanimationcoordinator.md) object, you can use that object to specify custom focus-related animations. When the time comes for the system to execute your animations, it delivers an object that adopts this protocol to your animation block. The context object contains information about the system animations that you can use to configure the behavior of your own animations. For example, you might configure your animations to be exactly half the duration of the system animations.

## Topics

### Getting the animation attributes

- [duration](uifocusanimationcontext/duration.md): The duration (measured in seconds) of the focus animation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Adding animations to focus updates

- [addCoordinatedFocusingAnimations(\_:completion:)](uifocusanimationcoordinator/addcoordinatedfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for adding focus to an item.
- [addCoordinatedUnfocusingAnimations(\_:completion:)](uifocusanimationcoordinator/addcoordinatedunfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for removing focus from an item.
- [addCoordinatedAnimations(\_:completion:)](uifocusanimationcoordinator/addcoordinatedanimations%28__completion_%29.md): Specifies the animations to coordinate with the active focus animation.

# UIFocusAnimationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Information about focusing animations being performed by the system.

## Declaration

```objectivec
@protocol UIFocusAnimationContext <NSObject>
```

<a id="overview"></a>

## Overview

You don’t adopt this protocol in your custom classes. When a focus update occurs and the system provides you with a [UIFocusAnimationCoordinator](uifocusanimationcoordinator.md) object, you can use that object to specify custom focus-related animations. When the time comes for the system to execute your animations, it delivers an object that adopts this protocol to your animation block. The context object contains information about the system animations that you can use to configure the behavior of your own animations. For example, you might configure your animations to be exactly half the duration of the system animations.

## Topics

### Getting the animation attributes

- [duration](uifocusanimationcontext/duration.md): The duration (measured in seconds) of the focus animation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Adding animations to focus updates

- [addCoordinatedFocusingAnimations:completion:](uifocusanimationcoordinator/addcoordinatedfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for adding focus to an item.
- [addCoordinatedUnfocusingAnimations:completion:](uifocusanimationcoordinator/addcoordinatedunfocusinganimations%28__completion_%29.md): Runs the specified set of animations together with the system animations for removing focus from an item.
- [addCoordinatedAnimations:completion:](uifocusanimationcoordinator/addcoordinatedanimations%28__completion_%29.md): Specifies the animations to coordinate with the active focus animation.
