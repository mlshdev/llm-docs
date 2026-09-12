> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/register(fordisconnectnotification:selector:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/register(fordisconnectnotification:selector:))

# register(forDisconnectNotification:selector:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows a client to register for device disconnect notification.

## Declaration

```swift
func register(forDisconnectNotification observer: Any!, selector inSelector: Selector!) -> IOBluetoothUserNotification!
```

## Parameters

- `observer`: Target observer object
- `inSelector`: Selector to be sent to the observer when the connection is destroyed

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotification representing the outstanding device disconnect notification. To unregister the notification, call -unregister of the returned IOBluetoothUserNotification object. If an error is encountered creating the notification, nil is returned.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target observer when the target device’s connection is closed. The selector should contain two arguments. The first is the user notification object. The second is the IOBluetoothDevice that was disconnected.

# registerForDisconnectNotification:selector: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows a client to register for device disconnect notification.

## Declaration

```objectivec
- (IOBluetoothUserNotification *) registerForDisconnectNotification:(id) observer selector:(SEL) inSelector;
```

## Parameters

- `observer`: Target observer object
- `inSelector`: Selector to be sent to the observer when the connection is destroyed

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotification representing the outstanding device disconnect notification. To unregister the notification, call -unregister of the returned IOBluetoothUserNotification object. If an error is encountered creating the notification, nil is returned.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target observer when the target device’s connection is closed. The selector should contain two arguments. The first is the user notification object. The second is the IOBluetoothDevice that was disconnected.
