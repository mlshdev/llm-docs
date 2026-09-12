> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/transitioncontext](https://developer.apple.com/documentation/storekit/skoverlay/transitioncontext)

# SKOverlay.TransitionContext (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

## Declaration

```swift
class TransitionContext
```

<a id="overview"></a>

## Overview

For more information on animating UI changes while the system presents or dismisses an overlay, see [storeOverlayWillStartPresentation(\_:transitionContext:)](../skoverlaydelegate/storeoverlaywillstartpresentation%28__transitioncontext_%29.md) and [storeOverlayWillStartDismissal(\_:transitionContext:)](../skoverlaydelegate/storeoverlaywillstartdismissal%28__transitioncontext_%29.md).

## Topics

### Adding an Animation

- [addAnimation(\_:)](transitioncontext/addanimation%28__%29.md): Adds a closure you can use to animate view properties.
- [startFrame](transitioncontext/startframe.md): The size and location of the overlay before the transition.
- [endFrame](transitioncontext/endframe.md): The size and location of the overlay at the end of the transition.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlayWillStartPresentation(\_:transitionContext:)](../skoverlaydelegate/storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlayDidFinishPresentation(\_:transitionContext:)](../skoverlaydelegate/storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlayWillStartDismissal(\_:transitionContext:)](../skoverlaydelegate/storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlayDidFinishDismissal(\_:transitionContext:)](../skoverlaydelegate/storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.

# SKOverlayTransitionContext (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

## Declaration

```objectivec
@interface SKOverlayTransitionContext : NSObject
```

<a id="overview"></a>

## Overview

For more information on animating UI changes while the system presents or dismisses an overlay, see [storeOverlay:willStartPresentation:](../skoverlaydelegate/storeoverlaywillstartpresentation%28__transitioncontext_%29.md) and [storeOverlay:willStartDismissal:](../skoverlaydelegate/storeoverlaywillstartdismissal%28__transitioncontext_%29.md).

## Topics

### Adding an Animation

- [addAnimationBlock:](transitioncontext/addanimation%28__%29.md): Adds a closure you can use to animate view properties.
- [startFrame](transitioncontext/startframe.md): The size and location of the overlay before the transition.
- [endFrame](transitioncontext/endframe.md): The size and location of the overlay at the end of the transition.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlay:willStartPresentation:](../skoverlaydelegate/storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlay:didFinishPresentation:](../skoverlaydelegate/storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlay:willStartDismissal:](../skoverlaydelegate/storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlay:didFinishDismissal:](../skoverlaydelegate/storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
