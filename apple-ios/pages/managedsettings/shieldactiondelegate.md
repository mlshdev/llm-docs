> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldactiondelegate](https://developer.apple.com/documentation/managedsettings/shieldactiondelegate)

# ShieldActionDelegate

**Framework:** Managed Settings  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A class for an extension that handles shield actions.

## Declaration

```swift
@objc class ShieldActionDelegate
```

<a id="overview"></a>

## Overview

Subclass `ShieldActionDelegate` to allow client extensions to respond to user actions on a shield that covers an application or website. The system doesn’t provide the name of a shielded [Application](application.md), [WebDomain](webdomain.md), or [ActivityCategory](activitycategory.md) to preserve the Family Sharing group’s privacy. Instead, the system uses a token to indicate what content it is shielding.

## Topics

### Handling shield actions

- [ShieldAction](shieldaction.md): Constants that describe a user’s action for your extension to handle.
- [ShieldActionResponse](shieldactionresponse.md): Constants your extension that handles shield actions can use to tell the system how to respond to an action.

### Responding to someone’s action

- [handle(action:for:completionHandler:)](shieldactiondelegate/handle%28action_for_completionhandler_%29-4jgek.md): Allows the extension to respond to a user action when the system displays a shield over an application.
- [handle(action:for:completionHandler:)](shieldactiondelegate/handle%28action_for_completionhandler_%29-9hcqc.md): Allows the extension to respond to a user action when the system displays a shield over an application or website because of its category.
- [handle(action:for:completionHandler:)](shieldactiondelegate/handle%28action_for_completionhandler_%29-4tqna.md): Allows the extension to respond to a user action when the system displays a shield over a website.

### Initializers

- [init()](shieldactiondelegate/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Shield actions

- [ShieldAction](shieldaction.md): Constants that describe a user’s action for your extension to handle.
