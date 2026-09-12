> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuconfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration)

# UIContextMenuConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An object containing the configuration details for the contextual menu.

## Declaration

```swift
@MainActor class UIContextMenuConfiguration
```

<a id="overview"></a>

## Overview

Before displaying a contextual menu, the system asks your [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) to provide a [UIContextMenuConfiguration](uicontextmenuconfiguration.md) object with details about that menu. In your [contextMenuInteraction(\_:configurationForMenuAtLocation:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md) method, use the location parameter to determine where the interaction occurred, and use the content at that location to configure your contextual menu and view controller. Provide custom blocks to generate:

- The contextual menu with the actions for your content.
- An optional view controller to use when displaying your content.

If you specify a default object without any custom handler blocks, the system displays a default preview interface with no menu.

## Topics

### Creating the menu configuration object

- [init(identifier:previewProvider:actionProvider:)](uicontextmenuconfiguration/init%28identifier_previewprovider_actionprovider_%29.md): Creates a menu configuration object with the specified action and preview providers.
- [UIContextMenuContentPreviewProvider](uicontextmenucontentpreviewprovider.md): Returns the custom view controller to use when previewing your content.
- [UIContextMenuActionProvider](uicontextmenuactionprovider.md): Returns an action-based contextual menu, optionally incorporating the system-suggested actions.

### Getting the configuration identifier

- [identifier](uicontextmenuconfiguration/identifier.md): The unique identifier for this configuration object.

### Handling multiple-item interactions

- [secondaryItemIdentifiers](uicontextmenuconfiguration/secondaryitemidentifiers.md): A set of identifiers corresponding to each item other than the primary item in a multiple-item interaction.
- [badgeCount](uicontextmenuconfiguration/badgecount.md): The number of items in a multiple-item interaction.

### Specifying the order of menu elements

- [preferredMenuElementOrder](uicontextmenuconfiguration/preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.
- [UIContextMenuConfiguration.ElementOrder](uicontextmenuconfiguration/elementorder.md): Constants that define the ordering strategy for menu elements in a context menu.

### Instance Properties

- [allowsTypeSelect](uicontextmenuconfiguration/allowstypeselect.md): A Boolean value that indicates whether the context menu supports keystroke-based navigation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Providing the preview configuration data

- [contextMenuInteraction(\_:configurationForMenuAtLocation:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md): Returns the configuration data to use when previewing the content.

# UIContextMenuConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An object containing the configuration details for the contextual menu.

## Declaration

```objectivec
@interface UIContextMenuConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Before displaying a contextual menu, the system asks your [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) to provide a [UIContextMenuConfiguration](uicontextmenuconfiguration.md) object with details about that menu. In your [contextMenuInteraction:configurationForMenuAtLocation:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md) method, use the location parameter to determine where the interaction occurred, and use the content at that location to configure your contextual menu and view controller. Provide custom blocks to generate:

- The contextual menu with the actions for your content.
- An optional view controller to use when displaying your content.

If you specify a default object without any custom handler blocks, the system displays a default preview interface with no menu.

## Topics

### Creating the menu configuration object

- [configurationWithIdentifier:previewProvider:actionProvider:](uicontextmenuconfiguration/configurationwithidentifier_previewprovider_actionprovider_.md): Creates a menu configuration object with the specified action and preview providers.
- [UIContextMenuContentPreviewProvider](uicontextmenucontentpreviewprovider.md): Returns the custom view controller to use when previewing your content.
- [UIContextMenuActionProvider](uicontextmenuactionprovider.md): Returns an action-based contextual menu, optionally incorporating the system-suggested actions.

### Getting the configuration identifier

- [identifier](uicontextmenuconfiguration/identifier.md): The unique identifier for this configuration object.

### Handling multiple-item interactions

- [secondaryItemIdentifiers](uicontextmenuconfiguration/secondaryitemidentifiers.md): A set of identifiers corresponding to each item other than the primary item in a multiple-item interaction.
- [badgeCount](uicontextmenuconfiguration/badgecount.md): The number of items in a multiple-item interaction.

### Specifying the order of menu elements

- [preferredMenuElementOrder](uicontextmenuconfiguration/preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.
- [UIContextMenuConfigurationElementOrder](uicontextmenuconfiguration/elementorder.md): Constants that define the ordering strategy for menu elements in a context menu.

### Instance Properties

- [allowsTypeSelect](uicontextmenuconfiguration/allowstypeselect.md): A Boolean value that indicates whether the context menu supports keystroke-based navigation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Providing the preview configuration data

- [contextMenuInteraction:configurationForMenuAtLocation:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md): Returns the configuration data to use when previewing the content.
