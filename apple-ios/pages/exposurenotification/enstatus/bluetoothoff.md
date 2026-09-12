> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enstatus/bluetoothoff](https://developer.apple.com/documentation/exposurenotification/enstatus/bluetoothoff)

# ENStatus.bluetoothOff (Swift)

**Framework:** Exposure Notification  
**Kind:** Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Bluetooth is turned off.

> No longer supported.

## Declaration

```swift
case bluetoothOff
```

<a id="Discussion"></a>

## Discussion

Bluetooth is required for Exposure Notification. If Bluetooth is disabled, notify the user that Exposure Notification can’t work without Bluetooth enabled.

> **Note**

>  This may not match the state of Bluetooth as reported by CoreBluetooth.

Exposure Notification is a system service and can use Bluetooth in situations when apps cannot. For the purposes of notification of exposure, it’s better to use this API instead of CoreBluetooth.

## See Also

### States

- [ENStatus.active](active.md): Deprecated. Notification is active.
- [ENStatus.disabled](disabled.md): Deprecated. Notification is disabled.
- [ENStatus.restricted](restricted.md): Deprecated. Notification is not active due to system restrictions, such as parental controls.
- [ENStatus.unknown](unknown.md): Deprecated. Notification is unknown.
- [ENStatus.paused](paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatus.unauthorized](unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.

# ENStatusBluetoothOff (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration Case  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Bluetooth is turned off.

> No longer supported.

## Declaration

```objectivec
ENStatusBluetoothOff
```

<a id="Discussion"></a>

## Discussion

Bluetooth is required for Exposure Notification. If Bluetooth is disabled, notify the user that Exposure Notification can’t work without Bluetooth enabled.

> **Note**

>  This may not match the state of Bluetooth as reported by CoreBluetooth.

Exposure Notification is a system service and can use Bluetooth in situations when apps cannot. For the purposes of notification of exposure, it’s better to use this API instead of CoreBluetooth.

## See Also

### States

- [ENStatusActive](active.md): Deprecated. Notification is active.
- [ENStatusDisabled](disabled.md): Deprecated. Notification is disabled.
- [ENStatusRestricted](restricted.md): Deprecated. Notification is not active due to system restrictions, such as parental controls.
- [ENStatusUnknown](unknown.md): Deprecated. Notification is unknown.
- [ENStatusPaused](paused.md): Deprecated. The user paused Exposure Notification.
- [ENStatusUnauthorized](unauthorized.md): Deprecated. The user hasn’t authorized Exposure Notification.
