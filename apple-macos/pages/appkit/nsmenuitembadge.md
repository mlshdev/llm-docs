> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge](https://developer.apple.com/documentation/appkit/nsmenuitembadge)

# NSMenuItemBadge (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 14.0+

A control that provides additional quantitative information specific to a menu item, such as the number of available updates.

## Declaration

```swift
class NSMenuItemBadge
```

<a id="overview"></a>

## Overview

You create a badge using an initializer or a predefined factory method, and then you assign it to the [badge](nsmenuitem/badge.md) property of a [NSMenuItem](nsmenuitem.md) for display.

![A menu containing five menu items with each menu item displaying a different style of badge. A NSMenuItem callout points to a menu item in the menu. A NSMenuItemBadge call out points to the badge that displays to the right of the menu item.](https://developer.apple.com/images/com.apple.appkit/media-4304515@2x.png)

For example, to display a badge with a count, use the [init(count:)](nsmenuitembadge/init%28count_%29.md) initalizer, passing in the value of `count` as an `Int`.

**Swift**

```swift
let menu = NSMenu()

// Create a menu item.
let menuItem = NSMenuItem(title: "Messages", action: nil, keyEquivalent: "")

// Set the badge to display "6".
menuItem.badge = NSMenuItemBadge(count: 6)

// Add the item to the menu.
menu.addItem(menuItem)
```

**Objective-C**

```objc
NSMenu *menu = [[NSMenu alloc] init];

// Create a menu item.
NSMenuItem *menuItem = [[NSMenuItem alloc] initWithTitle:@"Messages" action:nil keyEquivalent:@""];

// Set the badge to display "6".
menuItem.badge = [[NSMenuItemBadge alloc] initWithCount:6];

// Add the item to the menu.
[menu addItem:menuItem];
```

To display a badge with a custom string, use the [init(string:)](nsmenuitembadge/init%28string_%29.md) initializer, passing in the string you want to display.

**Swift**

```swift
let updateCount = 3
let menu = NSMenu()

// Create a menu item.
let menuItem = NSMenuItem(title: "Changes", action: nil, keyEquivalent: "")

// Set the badge to display "3 changes".
menuItem.badge = NSMenuItemBadge(string: "\(updateCount) changes")

// Add the item to the menu.
menu.addItem(menuItem)
```

**Objective-C**

```objc
NSInteger updateCount = 3;
NSMenu *menu = [[NSMenu alloc] init];

// Create a menu item.
NSMenuItem *menuItem = [[NSMenuItem alloc] initWithTitle:@"Changes" action:nil keyEquivalent:@""];

// Set the badge to display "3 changes".
menuItem.badge = [[NSMenuItemBadge alloc] initWithString:[NSString stringWithFormat:@"%ld changes", (long)updateCount]];

// Add the item to the menu.
[menu addItem:menuItem];
```

To display a badge using a predefined [NSMenuItemBadge.BadgeType](nsmenuitembadge/badgetype.md), use a factory method such as [newItems(count:)](nsmenuitembadge/newitems%28count_%29.md), passing in the `count` of the badge to display.

**Swift**

```swift
let menu = NSMenu()

// Add a new items style badge.
let newItemsItem = NSMenuItem(title: "New Items", action: nil, keyEquivalent: "")
newItemsItem.badge = NSMenuItemBadge.newItems(count: 3)
menu.addItem(newItemsItem)

// Add an alerts style badge.
let alertsItem = NSMenuItem(title: "Alerts", action: nil, keyEquivalent: "")
alertsItem.badge = NSMenuItemBadge.alerts(count: 4)
menu.addItem(alertsItem)

// Add an update style badge.
let updatesItem = NSMenuItem(title: "Updates", action: nil, keyEquivalent: "")
updatesItem.badge = NSMenuItemBadge.updates(count: 5)
menu.addItem(updatesItem)
```

**Objective-C**

```objc
NSMenu *menu = [[NSMenu alloc] init];

// Add a new items style badge.
NSMenuItem *newItemsItem = [[NSMenuItem alloc] initWithTitle:@"New Items" action:nil keyEquivalent:@""];
newItemsItem.badge = [NSMenuItemBadge newItemsWithCount:3];
[menu addItem:newItemsItem];

// Add an alerts style badge.
NSMenuItem *alertsItem = [[NSMenuItem alloc] initWithTitle:@"New Items" action:nil keyEquivalent:@""];
alertsItem.badge = [NSMenuItemBadge alertsWithCount:4];
[menu addItem:alertsItem];

// Add an update style badge.
NSMenuItem *updatesItem = [[NSMenuItem alloc] initWithTitle:@"Updates" action:nil keyEquivalent:@""];
updatesItem.badge = [NSMenuItemBadge updatesWithCount:5];
[menu addItem:updatesItem];
```

> **Important**

>  If you use one of the predefined badge types, the system localizes and pluralizes the string for you. If you create your own custom badge string, you need to localize and pluralize that string yourself. For more information on how to localize and pluralize text, see [Localizing and varying text with a string catalog](https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog).

The default value of this property is `nil`.

## Topics

### Creating menu item badges

- [init(count:)](nsmenuitembadge/init%28count_%29.md): Creates a badge with a count and an empty string.
- [init(string:)](nsmenuitembadge/init%28string_%29.md): Creates a badge with the provided custom string.

### Creating badges of a specific type

- [alerts(count:)](nsmenuitembadge/alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [newItems(count:)](nsmenuitembadge/newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [updates(count:)](nsmenuitembadge/updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
- [NSMenuItemBadge.BadgeType](nsmenuitembadge/badgetype.md): Constants that define types of badges for display.

### Accessing menu item badge attributes

- [itemCount](nsmenuitembadge/itemcount.md): The number of items the badge displays.
- [stringValue](nsmenuitembadge/stringvalue-fc9f.md): The string representation of the badge when it displays.
- [type](nsmenuitembadge/type.md): The type of items the badge displays.

### Instance Properties

- [stringValue](nsmenuitembadge/stringvalue-32sbt.md): The string representation of the badge as it would appear when the badge is displayed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.

# NSMenuItemBadge (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 14.0+

A control that provides additional quantitative information specific to a menu item, such as the number of available updates.

## Declaration

```objectivec
@interface NSMenuItemBadge : NSObject
```

<a id="overview"></a>

## Overview

You create a badge using an initializer or a predefined factory method, and then you assign it to the [badge](nsmenuitem/badge.md) property of a [NSMenuItem](nsmenuitem.md) for display.

![A menu containing five menu items with each menu item displaying a different style of badge. A NSMenuItem callout points to a menu item in the menu. A NSMenuItemBadge call out points to the badge that displays to the right of the menu item.](https://developer.apple.com/images/com.apple.appkit/media-4304515@2x.png)

For example, to display a badge with a count, use the [initWithCount:](nsmenuitembadge/init%28count_%29.md) initalizer, passing in the value of `count` as an `Int`.

**Swift**

```swift
let menu = NSMenu()

// Create a menu item.
let menuItem = NSMenuItem(title: "Messages", action: nil, keyEquivalent: "")

// Set the badge to display "6".
menuItem.badge = NSMenuItemBadge(count: 6)

// Add the item to the menu.
menu.addItem(menuItem)
```

**Objective-C**

```objc
NSMenu *menu = [[NSMenu alloc] init];

// Create a menu item.
NSMenuItem *menuItem = [[NSMenuItem alloc] initWithTitle:@"Messages" action:nil keyEquivalent:@""];

// Set the badge to display "6".
menuItem.badge = [[NSMenuItemBadge alloc] initWithCount:6];

// Add the item to the menu.
[menu addItem:menuItem];
```

To display a badge with a custom string, use the [initWithString:](nsmenuitembadge/init%28string_%29.md) initializer, passing in the string you want to display.

**Swift**

```swift
let updateCount = 3
let menu = NSMenu()

// Create a menu item.
let menuItem = NSMenuItem(title: "Changes", action: nil, keyEquivalent: "")

// Set the badge to display "3 changes".
menuItem.badge = NSMenuItemBadge(string: "\(updateCount) changes")

// Add the item to the menu.
menu.addItem(menuItem)
```

**Objective-C**

```objc
NSInteger updateCount = 3;
NSMenu *menu = [[NSMenu alloc] init];

// Create a menu item.
NSMenuItem *menuItem = [[NSMenuItem alloc] initWithTitle:@"Changes" action:nil keyEquivalent:@""];

// Set the badge to display "3 changes".
menuItem.badge = [[NSMenuItemBadge alloc] initWithString:[NSString stringWithFormat:@"%ld changes", (long)updateCount]];

// Add the item to the menu.
[menu addItem:menuItem];
```

To display a badge using a predefined [NSMenuItemBadgeType](nsmenuitembadge/badgetype.md), use a factory method such as [newItemsWithCount:](nsmenuitembadge/newitems%28count_%29.md), passing in the `count` of the badge to display.

**Swift**

```swift
let menu = NSMenu()

// Add a new items style badge.
let newItemsItem = NSMenuItem(title: "New Items", action: nil, keyEquivalent: "")
newItemsItem.badge = NSMenuItemBadge.newItems(count: 3)
menu.addItem(newItemsItem)

// Add an alerts style badge.
let alertsItem = NSMenuItem(title: "Alerts", action: nil, keyEquivalent: "")
alertsItem.badge = NSMenuItemBadge.alerts(count: 4)
menu.addItem(alertsItem)

// Add an update style badge.
let updatesItem = NSMenuItem(title: "Updates", action: nil, keyEquivalent: "")
updatesItem.badge = NSMenuItemBadge.updates(count: 5)
menu.addItem(updatesItem)
```

**Objective-C**

```objc
NSMenu *menu = [[NSMenu alloc] init];

// Add a new items style badge.
NSMenuItem *newItemsItem = [[NSMenuItem alloc] initWithTitle:@"New Items" action:nil keyEquivalent:@""];
newItemsItem.badge = [NSMenuItemBadge newItemsWithCount:3];
[menu addItem:newItemsItem];

// Add an alerts style badge.
NSMenuItem *alertsItem = [[NSMenuItem alloc] initWithTitle:@"New Items" action:nil keyEquivalent:@""];
alertsItem.badge = [NSMenuItemBadge alertsWithCount:4];
[menu addItem:alertsItem];

// Add an update style badge.
NSMenuItem *updatesItem = [[NSMenuItem alloc] initWithTitle:@"Updates" action:nil keyEquivalent:@""];
updatesItem.badge = [NSMenuItemBadge updatesWithCount:5];
[menu addItem:updatesItem];
```

> **Important**

>  If you use one of the predefined badge types, the system localizes and pluralizes the string for you. If you create your own custom badge string, you need to localize and pluralize that string yourself. For more information on how to localize and pluralize text, see [Localizing and varying text with a string catalog](https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog).

The default value of this property is `nil`.

## Topics

### Creating menu item badges

- [initWithCount:](nsmenuitembadge/init%28count_%29.md): Creates a badge with a count and an empty string.
- [initWithCount:type:](nsmenuitembadge/initwithcount_type_.md): Initializes the badge with a count and a pre-defined badge type.
- [initWithString:](nsmenuitembadge/init%28string_%29.md): Creates a badge with the provided custom string.

### Creating badges of a specific type

- [alertsWithCount:](nsmenuitembadge/alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [newItemsWithCount:](nsmenuitembadge/newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [updatesWithCount:](nsmenuitembadge/updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
- [NSMenuItemBadgeType](nsmenuitembadge/badgetype.md): Constants that define types of badges for display.

### Accessing menu item badge attributes

- [itemCount](nsmenuitembadge/itemcount.md): The number of items the badge displays.
- [stringValue](nsmenuitembadge/stringvalue-fc9f.md): The string representation of the badge when it displays.
- [type](nsmenuitembadge/type.md): The type of items the badge displays.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.
