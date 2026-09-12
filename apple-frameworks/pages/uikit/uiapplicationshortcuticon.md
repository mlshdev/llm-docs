> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcuticon](https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon)

# UIApplicationShortcutIcon (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image you can optionally associate with a Home Screen quick action to improve its appearance and usability.

## Declaration

```swift
class UIApplicationShortcutIcon
```

<a id="overview"></a>

## Overview

To associate an icon with a quick action, pass it to the quick action item’s initialization method, as described in [UIApplicationShortcutItem](uiapplicationshortcutitem.md).

There are three types of quick action icon:

- An icon from a system-provided library of common types, as described in the [UIApplicationShortcutIcon.IconType](uiapplicationshortcuticon/icontype.md) enumeration
- An icon derived from a custom template image in your app’s bundle and preferably in an asset catalog (see [Managing assets with asset catalogs](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs))
- An icon representing a contact in the user’s address book, which you access through the [Contacts UI](../contactsui.md) framework

## Topics

### Creating a quick action icon

- [init(type:)](uiapplicationshortcuticon/init%28type_%29.md): Creates a Home Screen quick action icon using a system-defined image.
- [init(templateImageName:)](uiapplicationshortcuticon/init%28templateimagename_%29.md): Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.
- [init(systemImageName:)](uiapplicationshortcuticon/init%28systemimagename_%29.md): Creates a Home Screen quick action icon using a system symbol image.
- [init(contact:)](uiapplicationshortcuticon/init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.

### Constants

- [UIApplicationShortcutIcon.IconType](uiapplicationshortcuticon/icontype.md): Constants for system-provided icons.

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

## See Also

### Home Screen quick actions

- [Add Home Screen quick actions](add-home-screen-quick-actions.md): Expose commonly used functionality with static or dynamic 3D Touch Home Screen quick actions.
- [UIApplicationShortcutItem](uiapplicationshortcutitem.md): An application shortcut item, also called a Home Screen dynamic quick action, that specifies a user-initiated action for your app.
- [UIMutableApplicationShortcutItem](uimutableapplicationshortcutitem.md): A mutable Home Screen dynamic quick action, which is an item that specifies a configurable user-initiated action for your app.

# UIApplicationShortcutIcon (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image you can optionally associate with a Home Screen quick action to improve its appearance and usability.

## Declaration

```objectivec
@interface UIApplicationShortcutIcon : NSObject
```

<a id="overview"></a>

## Overview

To associate an icon with a quick action, pass it to the quick action item’s initialization method, as described in [UIApplicationShortcutItem](uiapplicationshortcutitem.md).

There are three types of quick action icon:

- An icon from a system-provided library of common types, as described in the [UIApplicationShortcutIconType](uiapplicationshortcuticon/icontype.md) enumeration
- An icon derived from a custom template image in your app’s bundle and preferably in an asset catalog (see [Managing assets with asset catalogs](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs))
- An icon representing a contact in the user’s address book, which you access through the [Contacts UI](../contactsui.md) framework

## Topics

### Creating a quick action icon

- [iconWithType:](uiapplicationshortcuticon/init%28type_%29.md): Creates a Home Screen quick action icon using a system-defined image.
- [iconWithTemplateImageName:](uiapplicationshortcuticon/init%28templateimagename_%29.md): Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.
- [iconWithSystemImageName:](uiapplicationshortcuticon/init%28systemimagename_%29.md): Creates a Home Screen quick action icon using a system symbol image.
- [iconWithContact:](uiapplicationshortcuticon/init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.

### Constants

- [UIApplicationShortcutIconType](uiapplicationshortcuticon/icontype.md): Constants for system-provided icons.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Home Screen quick actions

- [Add Home Screen quick actions](add-home-screen-quick-actions.md): Expose commonly used functionality with static or dynamic 3D Touch Home Screen quick actions.
- [UIApplicationShortcutItem](uiapplicationshortcutitem.md): An application shortcut item, also called a Home Screen dynamic quick action, that specifies a user-initiated action for your app.
- [UIMutableApplicationShortcutItem](uimutableapplicationshortcutitem.md): A mutable Home Screen dynamic quick action, which is an item that specifies a configurable user-initiated action for your app.
