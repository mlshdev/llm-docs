> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/register(forchannelopennotifications:selector:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/register(forchannelopennotifications:selector:))

# register(forChannelOpenNotifications:selector:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Allows a client to register for L2CAP channel open notifications for any L2CAP channel.

## Declaration

```swift
class func register(forChannelOpenNotifications object: Any!, selector: Selector!) -> IOBluetoothUserNotification!
```

## Parameters

- `object`: Target object
- `selector`: Selector to be called on the target object when a new L2CAP channel is opened.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotification representing the outstanding L2CAP channel notification. To unregister the notification, call -unregister on the resulting IOBluetoothUserNotification object. If an error is encountered creating the notification, nil is returned. The returned IOBluetoothUserNotification will be valid for as long as the notification is registered. It is not necessary to retain the result. Once -unregister is called on it, it will no longer be valid.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target object whenever any L2CAP channel is opened. The selector should accept two arguments. The first is the user notification object. The second is the IOBluetoothL2CAPChannel that was opened.

# registerForChannelOpenNotifications:selector: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Allows a client to register for L2CAP channel open notifications for any L2CAP channel.

## Declaration

```objectivec
+ (IOBluetoothUserNotification *) registerForChannelOpenNotifications:(id) object selector:(SEL) selector;
```

## Parameters

- `object`: Target object
- `selector`: Selector to be called on the target object when a new L2CAP channel is opened.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothUserNotification representing the outstanding L2CAP channel notification. To unregister the notification, call -unregister on the resulting IOBluetoothUserNotification object. If an error is encountered creating the notification, nil is returned. The returned IOBluetoothUserNotification will be valid for as long as the notification is registered. It is not necessary to retain the result. Once -unregister is called on it, it will no longer be valid.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target object whenever any L2CAP channel is opened. The selector should accept two arguments. The first is the user notification object. The second is the IOBluetoothL2CAPChannel that was opened.
