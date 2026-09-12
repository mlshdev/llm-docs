> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractiondelegate](https://developer.apple.com/documentation/uikit/uieditmenuinteractiondelegate)

# UIEditMenuInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The methods for customizing the menu the interaction displays.

## Declaration

```swift
protocol UIEditMenuInteractionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use this protocol to customize the actions or presentation of the menu an [UIEditMenuInteraction](uieditmenuinteraction.md) object displays.

## Topics

### Customizing the Menu

- [editMenuInteraction(\_:menuFor:suggestedActions:)](uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction(\_:targetRectFor:)](uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction(\_:willPresentMenuFor:animator:)](uieditmenuinteractiondelegate/editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction(\_:willDismissMenuFor:animator:)](uieditmenuinteractiondelegate/editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Edit menus

- [UIEditMenuInteraction](uieditmenuinteraction.md): An interaction that provides edit operations using a menu.
- [UIEditMenuConfiguration](uieditmenuconfiguration.md): An object containing the configuration details for the menu your app presents in response to an edit menu interaction.
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md): A set of standard methods that apps can adopt to support editing.

# UIEditMenuInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The methods for customizing the menu the interaction displays.

## Declaration

```objectivec
@protocol UIEditMenuInteractionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use this protocol to customize the actions or presentation of the menu an [UIEditMenuInteraction](uieditmenuinteraction.md) object displays.

## Topics

### Customizing the Menu

- [editMenuInteraction:menuForConfiguration:suggestedActions:](uieditmenuinteractiondelegate/editmenuinteraction%28__menufor_suggestedactions_%29.md): Provides the menu to use when the interaction begins or requires an update.
- [editMenuInteraction:targetRectForConfiguration:](uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md): Provides the target rectangle to position the menu relative to when the interaction begins or requires an update.
- [editMenuInteraction:willPresentMenuForConfiguration:animator:](uieditmenuinteractiondelegate/editmenuinteraction%28__willpresentmenufor_animator_%29.md): Informs the delegate when the interaction is about to present the menu.
- [editMenuInteraction:willDismissMenuForConfiguration:animator:](uieditmenuinteractiondelegate/editmenuinteraction%28__willdismissmenufor_animator_%29.md): Informs the delegate when the interaction is about to dismiss the menu.
- [UIEditMenuInteractionAnimating](uieditmenuinteractionanimating.md): Methods adopted by system-supplied animator objects when interacting with menus.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Edit menus

- [UIEditMenuInteraction](uieditmenuinteraction.md): An interaction that provides edit operations using a menu.
- [UIEditMenuConfiguration](uieditmenuconfiguration.md): An object containing the configuration details for the menu your app presents in response to an edit menu interaction.
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md): A set of standard methods that apps can adopt to support editing.
