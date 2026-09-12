> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteractiondelegate/pencilinteractiondidtap(_:)](https://developer.apple.com/documentation/uikit/uipencilinteractiondelegate/pencilinteractiondidtap(_:))

# pencilInteractionDidTap(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.1+ (deprecated in 17.5) · iPadOS 12.1+ (deprecated in 17.5) · Mac Catalyst 13.1+ (deprecated in 17.5) · visionOS 1.0+ (deprecated in 1.2)

Tells the delegate that the user double-tapped Apple Pencil.

> Use [pencilInteraction(\_:didReceiveTap:)](pencilinteraction%28__didreceivetap_%29.md) instead.

## Declaration

```swift
optional func pencilInteractionDidTap(_ interaction: UIPencilInteraction)
```

<a id="Discussion"></a>

## Discussion

When handling the double tap, perform either:

- The action selected by the user in the Settings app, as specified by the [preferredTapAction](../uipencilinteraction/preferredtapaction.md) class property.
- An alternative behavior that gives the user the best experience for your app. Should you decide to support an alternative, provide an intuitive way for the user to learn about and enable that behavior.

# pencilInteractionDidTap: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.1+ (deprecated in 17.5) · iPadOS 12.1+ (deprecated in 17.5) · Mac Catalyst 13.1+ (deprecated in 17.5) · visionOS 26.2+ (deprecated in 1.2)

Tells the delegate that the user double-tapped Apple Pencil.

> Use [pencilInteraction:didReceiveTap:](pencilinteraction%28__didreceivetap_%29.md) instead.

## Declaration

```objectivec
- (void) pencilInteractionDidTap:(UIPencilInteraction *) interaction;
```

<a id="Discussion"></a>

## Discussion

When handling the double tap, perform either:

- The action selected by the user in the Settings app, as specified by the [preferredTapAction](../uipencilinteraction/preferredtapaction.md) class property.
- An alternative behavior that gives the user the best experience for your app. Should you decide to support an alternative, provide an intuitive way for the user to learn about and enable that behavior.
