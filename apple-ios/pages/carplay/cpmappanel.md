> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel

# CPMapPanel (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.

## Declaration

```swift
class CPMapPanel
```

<a id="overview"></a>

## Overview

When you want to display information on top of your custom map interface, create a [CPMapPanel](cpmappanel.md) object and fill it with the information to display. For example, you might use this panel to display a list of waypoints, nearby points of interest, route information, or other content. When you show this panel from a [CPMapTemplate](cpmaptemplate.md) object, CarPlay layers the panel on top of your custom map, covering only a portion of it. Map panels support a navigation-style interface structure, allowing you to create a hierarchical structure for navigating your panel content. To add a new level of hierarchy, *push* a new panel using the map template methods. To remove a panel, *pop* it off the top of the navigation stack using the map template methods.

Create an instance of this panel when you want to add navigation-related details to your map interface. The panel displays content you provide using the [CPMapPanelSection](cpmappanelsection.md) and [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md) types. When you’re ready to display the panel over your map, call the [showPanel(\_:completion:)](cpmaptemplate/showpanel%28__completion_%29.md) or [pushPanel(\_:completion:)](cpmaptemplate/pushpanel%28__completion_%29.md) method of your [CPMapTemplate](cpmaptemplate.md) object. If your panel’s [showsCloseButton](cppanel/showsclosebutton.md) property is `true`, the driver can dismiss the panel at any time; otherwise, hide or dismiss the panel programmatically using your map template’s [hidePanel(completion:)](cpmaptemplate/hidepanel%28completion_%29.md) or [popPanel(completion:)](cpmaptemplate/poppanel%28completion_%29.md) method.

To monitor the appearance and disappearance of the panel, assign a delegate object to your map panel. The delegate object adopts the [CPMapPanel.Delegate](cpmappanel/delegate-swift.protocol.md) protocol and receives callbacks when your panel’s visibility changes. If you change the configured sections or their contents after you display the panel, CarPlay updates your interface accordingly.

## Topics

### Creating a map panel

- [init(title:sections:buttonConfiguration:)](cpmappanel/init%28title_sections_buttonconfiguration_%29.md): Creates and configures a new map panel for display over your navigation app’s map template.

### Responding to the panel’s appearance and disappearance

- [delegate](cpmappanel/delegate-swift.property.md): The app-specific object that the system notifies when it hides and shows the panel.
- [CPMapPanel.Delegate](cpmappanel/delegate-swift.protocol.md): The interface you use to respond to the appearance and disappearance of the panel.

### Getting the panel’s content

- [title](cpmappanel/title.md): The title to display at the top of the panel.
- [sections](cpmappanel/sections.md): The sections of content to display in the panel.
- [buttonConfiguration](cpmappanel/buttonconfiguration.md): The button information and travel estimates to display in the panel.

## Relationships

### Inherits From

- [CPPanel](cppanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.
- [CPChargingStationConnection](cpchargingstationconnection.md): Details about the equipment at an electric vehicle charging station.

# CPMapPanel (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.

## Declaration

```objectivec
@interface CPMapPanel : CPPanel
```

<a id="overview"></a>

## Overview

When you want to display information on top of your custom map interface, create a [CPMapPanel](cpmappanel.md) object and fill it with the information to display. For example, you might use this panel to display a list of waypoints, nearby points of interest, route information, or other content. When you show this panel from a [CPMapTemplate](cpmaptemplate.md) object, CarPlay layers the panel on top of your custom map, covering only a portion of it. Map panels support a navigation-style interface structure, allowing you to create a hierarchical structure for navigating your panel content. To add a new level of hierarchy, *push* a new panel using the map template methods. To remove a panel, *pop* it off the top of the navigation stack using the map template methods.

Create an instance of this panel when you want to add navigation-related details to your map interface. The panel displays content you provide using the [CPMapPanelSection](cpmappanelsection.md) and [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md) types. When you’re ready to display the panel over your map, call the [showPanel:completion:](cpmaptemplate/showpanel%28__completion_%29.md) or [pushPanel:completion:](cpmaptemplate/pushpanel%28__completion_%29.md) method of your [CPMapTemplate](cpmaptemplate.md) object. If your panel’s [showsCloseButton](cppanel/showsclosebutton.md) property is `true`, the driver can dismiss the panel at any time; otherwise, hide or dismiss the panel programmatically using your map template’s [hidePanelWithCompletion:](cpmaptemplate/hidepanel%28completion_%29.md) or [popPanelWithCompletion:](cpmaptemplate/poppanel%28completion_%29.md) method.

To monitor the appearance and disappearance of the panel, assign a delegate object to your map panel. The delegate object adopts the [CPMapPanelDelegate](cpmappanel/delegate-swift.protocol.md) protocol and receives callbacks when your panel’s visibility changes. If you change the configured sections or their contents after you display the panel, CarPlay updates your interface accordingly.

## Topics

### Creating a map panel

- [initWithTitle:sections:buttonConfiguration:](cpmappanel/init%28title_sections_buttonconfiguration_%29.md): Creates and configures a new map panel for display over your navigation app’s map template.

### Responding to the panel’s appearance and disappearance

- [delegate](cpmappanel/delegate-swift.property.md): The app-specific object that the system notifies when it hides and shows the panel.
- [CPMapPanelDelegate](cpmappanel/delegate-swift.protocol.md): The interface you use to respond to the appearance and disappearance of the panel.

### Getting the panel’s content

- [title](cpmappanel/title.md): The title to display at the top of the panel.
- [sections](cpmappanel/sections.md): The sections of content to display in the panel.
- [buttonConfiguration](cpmappanel/buttonconfiguration.md): The button information and travel estimates to display in the panel.

## Relationships

### Inherits From

- [CPPanel](cppanel.md)

## See Also

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.
- [CPChargingStationConnection](cpchargingstationconnection.md): Details about the equipment at an electric vehicle charging station.
