> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/register(forchannelopennotifications:selector:withchannelid:direction:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/register(forchannelopennotifications:selector:withchannelid:direction:))

# register(forChannelOpenNotifications:selector:withChannelID:direction:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Allows a client to register for RFCOMM channel open notifications for certain types of RFCOMM channels.

## Declaration

```swift
class func register(forChannelOpenNotifications object: Any!, selector: Selector!, withChannelID channelID: BluetoothRFCOMMChannelID, direction inDirection: IOBluetoothUserNotificationChannelDirection) -> IOBluetoothUserNotification!
```

## Parameters

- `object`: Target object
- `selector`: Selector to be called on the target object when a new RFCOMM channel is opened. the format for the selector is: -(void) selectorName:(IOBluetoothUserNotification \*)inNotification channel:(IOBluetoothRFCOMMChannel \*)newChannel
- `channelID`: RFCOMM channel ID to match a new RFCOMM channel. If the channel ID doesn’t matter, 0 may be passed in.
- `inDirection`: The desired direction of the RFCOMM channel - kIOBluetoothUserNotificationChannelDirectionAny if the direction doesn’t matter.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target object whenever an RFCOMM channel with the given attributes is opened. The selector should accept two arguments. The first is the user notification object. The second is the IOBluetoothRFCOMMChannel that was opened.

# registerForChannelOpenNotifications:selector:withChannelID:direction: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Allows a client to register for RFCOMM channel open notifications for certain types of RFCOMM channels.

## Declaration

```objectivec
+ (IOBluetoothUserNotification *) registerForChannelOpenNotifications:(id) object selector:(SEL) selector withChannelID:(BluetoothRFCOMMChannelID) channelID direction:(IOBluetoothUserNotificationChannelDirection) inDirection;
```

## Parameters

- `object`: Target object
- `selector`: Selector to be called on the target object when a new RFCOMM channel is opened. the format for the selector is: -(void) selectorName:(IOBluetoothUserNotification \*)inNotification channel:(IOBluetoothRFCOMMChannel \*)newChannel
- `channelID`: RFCOMM channel ID to match a new RFCOMM channel. If the channel ID doesn’t matter, 0 may be passed in.
- `inDirection`: The desired direction of the RFCOMM channel - kIOBluetoothUserNotificationChannelDirectionAny if the direction doesn’t matter.

<a id="Discussion"></a>

## Discussion

The given selector will be called on the target object whenever an RFCOMM channel with the given attributes is opened. The selector should accept two arguments. The first is the user notification object. The second is the IOBluetoothRFCOMMChannel that was opened.
