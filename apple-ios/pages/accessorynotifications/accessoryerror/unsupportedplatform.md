> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessoryerror/unsupportedplatform](https://developer.apple.com/documentation/accessorynotifications/accessoryerror/unsupportedplatform)

# AccessoryError.unsupportedPlatform

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An error that indicates the current platform doesn’t support notification forwarding.

## Declaration

```swift
case unsupportedPlatform
```

<a id="discussion"></a>

## Discussion

This error can occur if you call [requestForwarding(for:)](../accessorynotificationcenter/requestforwarding%28for_%29.md) on a platform other than iOS.

## See Also

### Platform and accessory errors

- [AccessoryError.unsupportedAccessory](unsupportedaccessory.md): An error that indicates the system doesn’t support notification forwarding for the provided accessory.
- [AccessoryError.accessoryNotificationsUnavailable](accessorynotificationsunavailable.md): An error that indicates accessory notifications aren’t available in the current configuration.
