> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlaydelegate/storeoverlaydidfinishdismissal(_:transitioncontext:)](https://developer.apple.com/documentation/storekit/skoverlaydelegate/storeoverlaydidfinishdismissal(_:transitioncontext:))

# storeOverlayDidFinishDismissal(\_:transitionContext:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that platform finished dismissing an overlay.

## Declaration

```swift
optional func storeOverlayDidFinishDismissal(_ overlay: SKOverlay, transitionContext: SKOverlay.TransitionContext)
```

## Parameters

- `overlay`: An app banner object that disappeared.
- `transitionContext`: The context you can use to animate changes to UI components when the overlay disappears.

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlayWillStartPresentation(\_:transitionContext:)](storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlayDidFinishPresentation(\_:transitionContext:)](storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlayWillStartDismissal(\_:transitionContext:)](storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [SKOverlay.TransitionContext](../skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

# storeOverlay:didFinishDismissal: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that platform finished dismissing an overlay.

## Declaration

```objectivec
- (void) storeOverlay:(SKOverlay *) overlay didFinishDismissal:(SKOverlayTransitionContext *) transitionContext;
```

## Parameters

- `overlay`: An app banner object that disappeared.
- `transitionContext`: The context you can use to animate changes to UI components when the overlay disappears.

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlay:willStartPresentation:](storeoverlaywillstartpresentation%28__transitioncontext_%29.md): Indicates that the platform presents an overlay.
- [storeOverlay:didFinishPresentation:](storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlay:willStartDismissal:](storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [SKOverlayTransitionContext](../skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.
