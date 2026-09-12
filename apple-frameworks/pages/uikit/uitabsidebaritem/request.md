> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabsidebaritem/request](https://developer.apple.com/documentation/uikit/uitabsidebaritem/request)

# UITabSidebarItem.Request (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
@MainActor class Request
```

## Topics

### Instance Properties

- [content](request/content.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting the sidebar

- [mode](../uitabbarcontroller/mode-swift.property.md): The display mode for a tab bar.
- [UITabBarController.Mode](../uitabbarcontroller/mode-swift.enum.md): A tab bar’s display mode.
- [sidebar](../uitabbarcontroller/sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarController.Sidebar](../uitabbarcontroller/sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem](../uitabsidebaritem.md)
- [UITabBarController.Sidebar.Animating](../uitabbarcontroller/sidebar-swift.class/animating.md)

# UITabSidebarItemRequest (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@interface UITabSidebarItemRequest : NSObject
```

## Topics

### Instance Properties

- [action](../uitabsidebaritemrequest/action.md): The action that the receiver represents. Only one of `tab` or `action` will be valid for an item.
- [tab](../uitabsidebaritemrequest/tab.md): The tab that the receiver represents. Only one of `tab` or `action` will be valid for an item.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Supporting the sidebar

- [mode](../uitabbarcontroller/mode-swift.property.md): The display mode for a tab bar.
- [UITabBarControllerMode](../uitabbarcontroller/mode-swift.enum.md): A tab bar’s display mode.
- [sidebar](../uitabbarcontroller/sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarControllerSidebar](../uitabbarcontroller/sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem](../uitabsidebaritem.md)
- [UITabSidebarScrollTarget](../uitabsidebarscrolltarget.md)
- [UITabBarControllerSidebarAnimating](../uitabbarcontroller/sidebar-swift.class/animating.md)
