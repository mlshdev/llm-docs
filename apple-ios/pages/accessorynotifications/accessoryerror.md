> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessoryerror](https://developer.apple.com/documentation/accessorynotifications/accessoryerror)

# AccessoryError

**Framework:** Accessory Notifications  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

Errors the Accessory Notifications framework can throw.

## Declaration

```swift
enum AccessoryError
```

## Topics

### Platform and accessory errors

- [AccessoryError.unsupportedAccessory](accessoryerror/unsupportedaccessory.md): An error that indicates the system doesn’t support notification forwarding for the provided accessory.
- [AccessoryError.unsupportedPlatform](accessoryerror/unsupportedplatform.md): An error that indicates the current platform doesn’t support notification forwarding.
- [AccessoryError.accessoryNotificationsUnavailable](accessoryerror/accessorynotificationsunavailable.md): An error that indicates accessory notifications aren’t available in the current configuration.

### Response errors

- [AccessoryError.invalidNotificationResponse](accessoryerror/invalidnotificationresponse.md): An error that indicates the system failed to handle a notification response.
- [AccessoryError.coordinationTimeout](accessoryerror/coordinationtimeout.md): An error that indicates alert coordination timed out.

### Communication errors

- [AccessoryError.internalInconsistency](accessoryerror/internalinconsistency.md): An error that indicates an internal inconsistency.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
