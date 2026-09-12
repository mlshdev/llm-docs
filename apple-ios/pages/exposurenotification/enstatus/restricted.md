> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enstatus/restricted](https://developer.apple.com/documentation/exposurenotification/enstatus/restricted)

# ENStatus.restricted (Swift)

**Framework:** Exposure Notification  
**Kind:** Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Notification is not active due to system restrictions, such as parental controls.

> No longer supported.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

When in this state, the app cannot enable exposure notification.

## See Also

### States

- [ENStatus.active](active.md): Deprecated. Notification is active.
- [ENStatus.bluetoothOff](bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENStatus.disabled](disabled.md): Deprecated. Notification is disabled.
- [ENStatus.unknown](unknown.md): Deprecated. Notification is unknown.
- [ENStatus.paused](paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatus.unauthorized](unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.

# ENStatusRestricted (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Notification is not active due to system restrictions, such as parental controls.

> No longer supported.

## Declaration

```objectivec
ENStatusRestricted
```

<a id="Discussion"></a>

## Discussion

When in this state, the app cannot enable exposure notification.

## See Also

### States

- [ENStatusActive](active.md): Deprecated. Notification is active.
- [ENStatusBluetoothOff](bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENStatusDisabled](disabled.md): Deprecated. Notification is disabled.
- [ENStatusUnknown](unknown.md): Deprecated. Notification is unknown.
- [ENStatusPaused](paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatusUnauthorized](unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.
