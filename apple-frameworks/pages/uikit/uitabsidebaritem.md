> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabsidebaritem](https://developer.apple.com/documentation/uikit/uitabsidebaritem)

# UITabSidebarItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
@MainActor class UITabSidebarItem
```

## Topics

### Classes

- [UITabSidebarItem.Request](uitabsidebaritem/request.md)

### Initializers

- [init(request:)](uitabsidebaritem/init%28request_%29.md): Creates a sidebar item from the specified request. The sidebar item will be preconfigured with the appropriate defaults for its content.

### Instance Properties

- [accessories](uitabsidebaritem/accessories-2peu2.md)
- [backgroundConfiguration](uitabsidebaritem/backgroundconfiguration-10tw8.md)
- [configurationState](uitabsidebaritem/configurationstate-1knk1.md)
- [content](uitabsidebaritem/content-swift.property.md)
- [contentConfiguration](uitabsidebaritem/contentconfiguration-254nx.md)

### Instance Methods

- [defaultBackgroundConfiguration()](uitabsidebaritem/defaultbackgroundconfiguration%28%29.md)
- [defaultContentConfiguration()](uitabsidebaritem/defaultcontentconfiguration%28%29.md)

### Enumerations

- [UITabSidebarItem.Content](uitabsidebaritem/content-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting the sidebar

- [mode](uitabbarcontroller/mode-swift.property.md): The display mode for a tab bar.
- [UITabBarController.Mode](uitabbarcontroller/mode-swift.enum.md): A tab bar’s display mode.
- [sidebar](uitabbarcontroller/sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarController.Sidebar](uitabbarcontroller/sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem.Request](uitabsidebaritem/request.md)
- [UITabBarController.Sidebar.Animating](uitabbarcontroller/sidebar-swift.class/animating.md)

# UITabSidebarItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@interface UITabSidebarItem : NSObject
```

## Topics

### Classes

- [UITabSidebarItemRequest](uitabsidebaritem/request.md)

### Instance Properties

- [accessories](uitabsidebaritem/accessories-6puxc.md): Cell accessories to use when displaying this item. Some accessories may not be shown if it conflicts with system default accessories.
- [action](uitabsidebaritem/action.md): The action that the receiver represents. Only one of `tab` or `action` will be valid for an item.
- [backgroundConfiguration](uitabsidebaritem/backgroundconfiguration-3i92z.md): The background configuration to use when displaying this item.
- [configurationState](uitabsidebaritem/configurationstate-16oov.md): The current configuration state of the sidebar item.
- [contentConfiguration](uitabsidebaritem/contentconfiguration-774sd.md): The content configuration to use when displaying this item.
- [tab](uitabsidebaritem/tab.md): The tab that the receiver represents. Only one of `tab` or `action` will be valid for an item.

### Instance Methods

- [defaultBackgroundConfiguration](uitabsidebaritem/defaultbackgroundconfiguration.md): Returns the default background configuration for this item and the configuration state.
- [defaultContentConfiguration](uitabsidebaritem/defaultcontentconfiguration.md): Returns the default content configuration for this item and the configuration state.

### Type Methods

- [itemFromRequest:](uitabsidebaritem/init%28request_%29.md): Creates a sidebar item from the specified request. The sidebar item will be preconfigured with the appropriate defaults for its content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Supporting the sidebar

- [mode](uitabbarcontroller/mode-swift.property.md): The display mode for a tab bar.
- [UITabBarControllerMode](uitabbarcontroller/mode-swift.enum.md): A tab bar’s display mode.
- [sidebar](uitabbarcontroller/sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarControllerSidebar](uitabbarcontroller/sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarScrollTarget](uitabsidebarscrolltarget.md)
- [UITabSidebarItemRequest](uitabsidebaritem/request.md)
- [UITabBarControllerSidebarAnimating](uitabbarcontroller/sidebar-swift.class/animating.md)
