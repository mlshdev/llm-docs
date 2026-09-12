> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessoryerror/unsupportedaccessory](https://developer.apple.com/documentation/accessorynotifications/accessoryerror/unsupportedaccessory)

# AccessoryError.unsupportedAccessory

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An error that indicates the system doesn’t support notification forwarding for the provided accessory.

## Declaration

```swift
case unsupportedAccessory
```

<a id="discussion"></a>

## Discussion

This error indicates that the argument specified in the [requestForwarding(for:)](../accessorynotificationcenter/requestforwarding%28for_%29.md) call doesn’t support notification forwarding.

## See Also

### Platform and accessory errors

- [AccessoryError.unsupportedPlatform](unsupportedplatform.md): An error that indicates the current platform doesn’t support notification forwarding.
- [AccessoryError.accessoryNotificationsUnavailable](accessorynotificationsunavailable.md): An error that indicates accessory notifications aren’t available in the current configuration.
