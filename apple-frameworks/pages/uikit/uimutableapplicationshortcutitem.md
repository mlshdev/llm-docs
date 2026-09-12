> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableapplicationshortcutitem](https://developer.apple.com/documentation/uikit/uimutableapplicationshortcutitem)

# UIMutableApplicationShortcutItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A mutable Home Screen dynamic quick action, which is an item that specifies a configurable user-initiated action for your app.

## Declaration

```swift
class UIMutableApplicationShortcutItem
```

<a id="overview"></a>

## Overview

This class is a convenience subclass of [UIApplicationShortcutItem](uiapplicationshortcutitem.md), helping you work with registered, and therefore immutable, quick actions. For information about how to use objects of this class in your app, read the overview in [UIApplicationShortcutItem](uiapplicationshortcutitem.md).

## Topics

### Inspecting a Home Screen dynamic mutable quick action

- [localizedTitle](uimutableapplicationshortcutitem/localizedtitle.md): The required, user-visible title for the Home Screen dynamic mutable quick action.
- [localizedSubtitle](uimutableapplicationshortcutitem/localizedsubtitle.md): The optional, user-visible subtitle for the Home Screen dynamic mutable quick action.
- [type](uimutableapplicationshortcutitem/type.md): A required, app-specific string that you can employ to identify the type of quick action to perform.
- [icon](uimutableapplicationshortcutitem/icon.md): The optional icon for the Home Screen dynamic mutable quick action.
- [userInfo](uimutableapplicationshortcutitem/userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home Screen dynamic mutable quick action.

### Designating the scene to activate

- [targetContentIdentifier](uimutableapplicationshortcutitem/targetcontentidentifier.md): The object that determines which scene handles the quick action.

## Relationships

### Inherits From

- [UIApplicationShortcutItem](uiapplicationshortcutitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Home Screen quick actions

- [Add Home Screen quick actions](add-home-screen-quick-actions.md): Expose commonly used functionality with static or dynamic 3D Touch Home Screen quick actions.
- [UIApplicationShortcutItem](uiapplicationshortcutitem.md): An application shortcut item, also called a Home Screen dynamic quick action, that specifies a user-initiated action for your app.
- [UIApplicationShortcutIcon](uiapplicationshortcuticon.md): An image you can optionally associate with a Home Screen quick action to improve its appearance and usability.

# UIMutableApplicationShortcutItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A mutable Home Screen dynamic quick action, which is an item that specifies a configurable user-initiated action for your app.

## Declaration

```objectivec
@interface UIMutableApplicationShortcutItem : UIApplicationShortcutItem
```

<a id="overview"></a>

## Overview

This class is a convenience subclass of [UIApplicationShortcutItem](uiapplicationshortcutitem.md), helping you work with registered, and therefore immutable, quick actions. For information about how to use objects of this class in your app, read the overview in [UIApplicationShortcutItem](uiapplicationshortcutitem.md).

## Topics

### Inspecting a Home Screen dynamic mutable quick action

- [localizedTitle](uimutableapplicationshortcutitem/localizedtitle.md): The required, user-visible title for the Home Screen dynamic mutable quick action.
- [localizedSubtitle](uimutableapplicationshortcutitem/localizedsubtitle.md): The optional, user-visible subtitle for the Home Screen dynamic mutable quick action.
- [type](uimutableapplicationshortcutitem/type.md): A required, app-specific string that you can employ to identify the type of quick action to perform.
- [icon](uimutableapplicationshortcutitem/icon.md): The optional icon for the Home Screen dynamic mutable quick action.
- [userInfo](uimutableapplicationshortcutitem/userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home Screen dynamic mutable quick action.

### Designating the scene to activate

- [targetContentIdentifier](uimutableapplicationshortcutitem/targetcontentidentifier.md): The object that determines which scene handles the quick action.

## Relationships

### Inherits From

- [UIApplicationShortcutItem](uiapplicationshortcutitem.md)

## See Also

### Home Screen quick actions

- [Add Home Screen quick actions](add-home-screen-quick-actions.md): Expose commonly used functionality with static or dynamic 3D Touch Home Screen quick actions.
- [UIApplicationShortcutItem](uiapplicationshortcutitem.md): An application shortcut item, also called a Home Screen dynamic quick action, that specifies a user-initiated action for your app.
- [UIApplicationShortcutIcon](uiapplicationshortcuticon.md): An image you can optionally associate with a Home Screen quick action to improve its appearance and usability.
