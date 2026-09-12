> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractionanimating](https://developer.apple.com/documentation/uikit/uieditmenuinteractionanimating)

# UIEditMenuInteractionAnimating (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Methods adopted by system-supplied animator objects when interacting with menus.

## Declaration

```swift
@MainActor protocol UIEditMenuInteractionAnimating : NSObjectProtocol
```

## Topics

### Adding Animations

- [addAnimations(\_:)](uieditmenuinteractionanimating/addanimations%28__%29.md): Adds a closure that performs animations to run alongside the edit menu interaction presentation.
- [addCompletion(\_:)](uieditmenuinteractionanimating/addcompletion%28__%29.md): Adds a closure to perform operations when the edit menu interaction presentation animations are complete.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the Menu

- [editMenuInteraction(\_:menuFor:suggestedActions:)](uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction(\_:targetRectFor:)](uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction(\_:willPresentMenuFor:animator:)](uieditmenuinteractiondelegate/editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction(\_:willDismissMenuFor:animator:)](uieditmenuinteractiondelegate/editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.

# UIEditMenuInteractionAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Methods adopted by system-supplied animator objects when interacting with menus.

## Declaration

```objectivec
@protocol UIEditMenuInteractionAnimating <NSObject>
```

## Topics

### Adding Animations

- [addAnimations:](uieditmenuinteractionanimating/addanimations%28__%29.md): Adds a closure that performs animations to run alongside the edit menu interaction presentation.
- [addCompletion:](uieditmenuinteractionanimating/addcompletion%28__%29.md): Adds a closure to perform operations when the edit menu interaction presentation animations are complete.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the Menu

- [editMenuInteraction:menuForConfiguration:suggestedActions:](uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction:targetRectForConfiguration:](uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction:willPresentMenuForConfiguration:animator:](uieditmenuinteractiondelegate/editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction:willDismissMenuForConfiguration:animator:](uieditmenuinteractiondelegate/editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
