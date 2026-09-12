> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlaydelegate](https://developer.apple.com/documentation/storekit/skoverlaydelegate)

# SKOverlayDelegate (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Methods for responding to the overlay’s appearance, dismissal, or failure to load.

## Declaration

```swift
protocol SKOverlayDelegate : NSObjectProtocol
```

## Topics

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlayWillStartPresentation(\_:transitionContext:)](skoverlaydelegate/storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlayDidFinishPresentation(\_:transitionContext:)](skoverlaydelegate/storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlayWillStartDismissal(\_:transitionContext:)](skoverlaydelegate/storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlayDidFinishDismissal(\_:transitionContext:)](skoverlaydelegate/storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
- [SKOverlay.TransitionContext](skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

### Responding to Failures

- [storeOverlayDidFailToLoad(\_:error:)](skoverlaydelegate/storeoverlaydidfailtoload%28__error_%29.md): Indicates that an overlay failed to load.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a delegate

- [delegate](skoverlay/delegate.md): The overlay’s delegate.

# SKOverlayDelegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Methods for responding to the overlay’s appearance, dismissal, or failure to load.

## Declaration

```objectivec
@protocol SKOverlayDelegate <NSObject>
```

## Topics

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlay:willStartPresentation:](skoverlaydelegate/storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlay:didFinishPresentation:](skoverlaydelegate/storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlay:willStartDismissal:](skoverlaydelegate/storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlay:didFinishDismissal:](skoverlaydelegate/storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
- [SKOverlayTransitionContext](skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

### Responding to Failures

- [storeOverlay:didFailToLoadWithError:](skoverlaydelegate/storeoverlaydidfailtoload%28__error_%29.md): Indicates that an overlay failed to load.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a delegate

- [delegate](skoverlay/delegate.md): The overlay’s delegate.
