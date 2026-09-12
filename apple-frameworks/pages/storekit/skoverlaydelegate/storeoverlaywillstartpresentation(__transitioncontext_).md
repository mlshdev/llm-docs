> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlaydelegate/storeoverlaywillstartpresentation(_:transitioncontext:)](https://developer.apple.com/documentation/storekit/skoverlaydelegate/storeoverlaywillstartpresentation(_:transitioncontext:))

# storeOverlayWillStartPresentation(\_:transitionContext:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that the platform presents an overlay.

## Declaration

```swift
optional func storeOverlayWillStartPresentation(_ overlay: SKOverlay, transitionContext: SKOverlay.TransitionContext)
```

## Parameters

- `overlay`: An overlay object that’s about to appear.
- `transitionContext`: A context you can use to animate changes to UI components as the overlay appears.

<a id="Discussion"></a>

## Discussion

Use the `transitionContext` parameter to animate updates to the UI on the main thread. For example, make a [UIImageView](../../uikit/uiimageview.md) disappear by animating the change of its opacity to 0% as shown in the following code:

```swift
func storeOverlayWillStartPresentation(_ overlay: SKOverlay, transitionContext: SKOverlay.TransitionContext) {
    transitionContext.addAnimation { [self] in
        self.imageView.layer.opacity = 0
    }
}
```

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlayDidFinishPresentation(\_:transitionContext:)](storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlayWillStartDismissal(\_:transitionContext:)](storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlayDidFinishDismissal(\_:transitionContext:)](storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
- [SKOverlay.TransitionContext](../skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.

# storeOverlay:willStartPresentation: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Indicates that the platform presents an overlay.

## Declaration

```objectivec
- (void) storeOverlay:(SKOverlay *) overlay willStartPresentation:(SKOverlayTransitionContext *) transitionContext;
```

## Parameters

- `overlay`: An overlay object that’s about to appear.
- `transitionContext`: A context you can use to animate changes to UI components as the overlay appears.

<a id="Discussion"></a>

## Discussion

Use the `transitionContext` parameter to animate updates to the UI on the main thread. For example, make a [UIImageView](../../uikit/uiimageview.md) disappear by animating the change of its opacity to 0% as shown in the following code:

```swift
func storeOverlayWillStartPresentation(_ overlay: SKOverlay, transitionContext: SKOverlay.TransitionContext) {
    transitionContext.addAnimation { [self] in
        self.imageView.layer.opacity = 0
    }
}
```

## See Also

### Responding to the Overlay’s Appearance and Disappearance

- [storeOverlay:didFinishPresentation:](storeoverlaydidfinishpresentation%28__transitioncontext_%29.md): Indicates that the platform finished presenting an overlay.
- [storeOverlay:willStartDismissal:](storeoverlaywillstartdismissal%28__transitioncontext_%29.md): Indicates that the platform dismisses an overlay.
- [storeOverlay:didFinishDismissal:](storeoverlaydidfinishdismissal%28__transitioncontext_%29.md): Indicates that platform finished dismissing an overlay.
- [SKOverlayTransitionContext](../skoverlay/transitioncontext.md): A context object you can use to animate UI changes while the platform presents or dismisses an overlay.
