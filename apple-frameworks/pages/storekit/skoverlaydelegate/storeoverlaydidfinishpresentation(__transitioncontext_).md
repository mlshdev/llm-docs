> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlaydelegate/storeoverlaydidfinishpresentation(_:transitioncontext:)](https://developer.apple.com/documentation/storekit/skoverlaydelegate/storeoverlaydidfinishpresentation(_:transitioncontext:))

# storeOverlayDidFinishPresentation(\_:transitionContext:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that the platform finished presenting an overlay.

## Declaration

```swift
optional func storeOverlayDidFinishPresentation(_ overlay: SKOverlay, transitionContext: SKOverlay.TransitionContext)
```

## Parameters

- `overlay`: The overlay object that appears.
- `transitionContext`: A context you can use to animate changes to UI components after the overlay appears.

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlayWillStartPresentation(\_:transitionContext:)](storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlayWillStartDismissal(\_:transitionContext:)](storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlayDidFinishDismissal(\_:transitionContext:)](storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
- [SKOverlay.TransitionContext](../skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

# storeOverlay:didFinishPresentation: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that the platform finished presenting an overlay.

## Declaration

```objectivec
- (void) storeOverlay:(SKOverlay *) overlay didFinishPresentation:(SKOverlayTransitionContext *) transitionContext;
```

## Parameters

- `overlay`: The overlay object that appears.
- `transitionContext`: A context you can use to animate changes to UI components after the overlay appears.

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlay:willStartPresentation:](storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlay:willStartDismissal:](storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlay:didFinishDismissal:](storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
- [SKOverlayTransitionContext](../skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.
