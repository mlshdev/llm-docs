> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothusernotificationcallback

# IOBluetoothUserNotificationCallback (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Alias  
**Availability:** macOS

Callback function definition for user notifications.

## Declaration

```swift
typealias IOBluetoothUserNotificationCallback = (UnsafeMutableRawPointer?, IOBluetoothUserNotificationRef?, IOBluetoothObjectRef?) -> Void
```

## Parameters

- `userRefCon`: (Void \*) This user defined parameter was provided during the original call to register the notification.
- `inRef`: (IOBluetoothUserNotificationRef) The notification responsible for sending the notification.
- `status`: (IOBluetoothObjectRef) The object that originated the notification.

<a id="return-value"></a>

## Return Value

None.

<a id="Discussion"></a>

## Discussion

This callback will be invoked when the notification for which it was registered is sent.

# IOBluetoothUserNotificationCallback (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Alias  
**Availability:** macOS

Callback function definition for user notifications.

## Declaration

```objectivec
typedef void (*)(void *, struct OpaqueIOBluetoothObjectRef *, struct OpaqueIOBluetoothObjectRef *) IOBluetoothUserNotificationCallback;
```

## Parameters

- `userRefCon`: (Void \*) This user defined parameter was provided during the original call to register the notification.
- `inRef`: (IOBluetoothUserNotificationRef) The notification responsible for sending the notification.
- `status`: (IOBluetoothObjectRef) The object that originated the notification.

<a id="return-value"></a>

## Return Value

None.

<a id="Discussion"></a>

## Discussion

This callback will be invoked when the notification for which it was registered is sent.
