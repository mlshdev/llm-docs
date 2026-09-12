> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/attributes-swift.struct](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/attributes-swift.struct)

# AccessoryNotification.Attributes

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

Attributes that display priority for a notification.

## Declaration

```swift
struct Attributes
```

<a id="overview"></a>

## Overview

Use these attributes to change the visual appearance of and add information about your notification. For guidance on whether to alert for a notification, see [AlertingContext](../alertingcontext.md).

## Topics

### Identifying attribute types

- [critical](attributes-swift.struct/critical.md): An attribute that indicates a critical notification.
- [priority](attributes-swift.struct/priority.md): An attribute that indicates a priority notification.
- [timeSensitive](attributes-swift.struct/timesensitive.md): An attribute that indicates a time-sensitive notification.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Working with notification attributes

- [attributes](attributes-swift.property.md): A set of attributes that indicate the notification’s priority level.
