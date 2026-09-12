> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/identifier-swift.struct](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/identifier-swift.struct)

# AccessoryNotification.Identifier

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that uniquely identifies a notification.

## Declaration

```swift
struct Identifier
```

<a id="overview"></a>

## Overview

A notification’s [identifier](identifier-swift.property.md) property is of this type.

## Topics

### Creating an identifier

- [init(notificationIdentifier:sourceIdentifier:)](identifier-swift.struct/init%28notificationidentifier_sourceidentifier_%29.md): Initializes a notification identifier from its components.

### Accessing identifier components

- [notificationIdentifier](identifier-swift.struct/notificationidentifier.md): An identifier that the source app sets for the notification.
- [sourceIdentifier](identifier-swift.struct/sourceidentifier.md): The source app’s bundle identifier.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying and grouping notifications

- [identifier](identifier-swift.property.md): A structure that uniquely identifies the notification.
- [threadIdentifier](threadidentifier.md): An identifier that groups notifications that belong to the same thread.
- [sourceName](sourcename.md): A display name for the bundle that sent the notification.
