> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/register(forchannelclosenotification:selector:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/register(forchannelclosenotification:selector:))

# register(forChannelCloseNotification:selector:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows a client to register for a channel close notification.

## Declaration

```swift
func register(forChannelCloseNotification observer: Any!, selector inSelector: Selector!) -> IOBluetoothUserNotification!
```

## Parameters

- `observer`: Target observer object
- `inSelector`: Selector to be sent to the observer when the RFCOMM channel is closed.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotification representing the outstanding RFCOMM channel close notification. To unregister the notification, call -unregister of the returned IOBluetoothUserNotification object. If an error is encountered creating the notification, nil is returned.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target observer when the RFCOMM channel is closed. The selector should contain two arguments. The first is the user notification object. The second is the IOBluetoothRFCOMMChannel that was closed.

# registerForChannelCloseNotification:selector: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows a client to register for a channel close notification.

## Declaration

```objectivec
- (IOBluetoothUserNotification *) registerForChannelCloseNotification:(id) observer selector:(SEL) inSelector;
```

## Parameters

- `observer`: Target observer object
- `inSelector`: Selector to be sent to the observer when the RFCOMM channel is closed.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotification representing the outstanding RFCOMM channel close notification. To unregister the notification, call -unregister of the returned IOBluetoothUserNotification object. If an error is encountered creating the notification, nil is returned.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target observer when the RFCOMM channel is closed. The selector should contain two arguments. The first is the user notification object. The second is the IOBluetoothRFCOMMChannel that was closed.
