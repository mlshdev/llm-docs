> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enstatus/disabled](https://developer.apple.com/documentation/exposurenotification/enstatus/disabled)

# ENStatus.disabled (Swift)

**Framework:** Exposure Notification  
**Kind:** Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Notification is disabled.

> No longer supported.

## Declaration

```swift
case disabled
```

<a id="Discussion"></a>

## Discussion

Use [setExposureNotificationEnabled(\_:completionHandler:)](../enmanager/setexposurenotificationenabled%28__completionhandler_%29.md) to enable exposure notification.

## See Also

### States

- [ENStatus.active](active.md): Deprecated. Notification is active.
- [ENStatus.bluetoothOff](bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENStatus.restricted](restricted.md): Deprecated. Notification is not active due to system restrictions, such as parental controls.
- [ENStatus.unknown](unknown.md): Deprecated. Notification is unknown.
- [ENStatus.paused](paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatus.unauthorized](unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.

# ENStatusDisabled (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Notification is disabled.

> No longer supported.

## Declaration

```objectivec
ENStatusDisabled
```

<a id="Discussion"></a>

## Discussion

Use [setExposureNotificationEnabled:completionHandler:](../enmanager/setexposurenotificationenabled%28__completionhandler_%29.md) to enable exposure notification.

## See Also

### States

- [ENStatusActive](active.md): Deprecated. Notification is active.
- [ENStatusBluetoothOff](bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENStatusRestricted](restricted.md): Deprecated. Notification is not active due to system restrictions, such as parental controls.
- [ENStatusUnknown](unknown.md): Deprecated. Notification is unknown.
- [ENStatusPaused](paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatusUnauthorized](unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.
