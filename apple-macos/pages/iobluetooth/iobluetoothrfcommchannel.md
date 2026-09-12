> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel)

# IOBluetoothRFCOMMChannel (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..

## Declaration

```swift
class IOBluetoothRFCOMMChannel
```

<a id="overview"></a>

## Overview

An RFCOMM channel object can be obtained by opening an RFCOMM channel in a device, or by requesting a notification when a channel is created (this is commonly used to provide services).

## Topics

### Instance Methods

- [close()](iobluetoothrfcommchannel/close%28%29.md): Close the channel.
- [delegate()](iobluetoothrfcommchannel/delegate%28%29.md): Returns the object delegate
- [getDevice()](iobluetoothrfcommchannel/getdevice%28%29.md): Returns the Bluetooth Device that carries the rfcomm data.
- [getID()](iobluetoothrfcommchannel/getid%28%29.md): Returns the object rfcomm channel ID.
- [getMTU()](iobluetoothrfcommchannel/getmtu%28%29.md): Returns the channel maximum transfer unit.
- [getObjectID()](iobluetoothrfcommchannel/getobjectid%28%29.md): Returns the IOBluetoothObjectID of the given IOBluetoothRFCOMMChannel.
- [getRef()](iobluetoothrfcommchannel/getref%28%29.md): Returns an IOBluetoothRFCOMMChannelRef representation of the target IOBluetoothRFCOMMChannel object.
- [isIncoming()](iobluetoothrfcommchannel/isincoming%28%29.md): Returns the direction of the channel. An incoming channel is one that was opened by the remote device.
- [isOpen()](iobluetoothrfcommchannel/isopen%28%29.md): Returns the state of the channel.
- [isTransmissionPaused()](iobluetoothrfcommchannel/istransmissionpaused%28%29.md): Returns TRUE if flow control is off.
- [register(forChannelCloseNotification:selector:)](iobluetoothrfcommchannel/register%28forchannelclosenotification_selector_%29.md): Allows a client to register for a channel close notification.
- [sendRemoteLineStatus(\_:)](iobluetoothrfcommchannel/sendremotelinestatus%28__%29.md): Sends an error to the remote side.
- [setDelegate(\_:)](iobluetoothrfcommchannel/setdelegate%28__%29.md): Allows an object to register itself as a client of the RFCOMM channel.
- [setSerialParameters(\_:dataBits:parity:stopBits:)](iobluetoothrfcommchannel/setserialparameters%28__databits_parity_stopbits_%29.md): Changes the parameters of the serial connection.
- [writeAsync(\_:length:refcon:)](iobluetoothrfcommchannel/writeasync%28__length_refcon_%29.md): Sends a block of data in the channel asynchronously.
- [writeSync(\_:length:)](iobluetoothrfcommchannel/writesync%28__length_%29.md): Sends a block of data in the channel synchronously.

### Type Methods

- [register(forChannelOpenNotifications:selector:)](iobluetoothrfcommchannel/register%28forchannelopennotifications_selector_%29.md): Allows a client to register for RFCOMM channel open notifications for any RFCOMM channel.
- [register(forChannelOpenNotifications:selector:withChannelID:direction:)](iobluetoothrfcommchannel/register%28forchannelopennotifications_selector_withchannelid_direction_%29.md): Allows a client to register for RFCOMM channel open notifications for certain types of RFCOMM channels.
- [withObjectID(\_:)](iobluetoothrfcommchannel/withobjectid%28__%29.md): Returns the IObluetoothRFCOMMChannel with the given IOBluetoothObjectID.
- [withRFCOMMChannelRef(\_:)](iobluetoothrfcommchannel/withrfcommchannelref%28__%29.md): Method call to convert an IOBluetoothRFCOMMChannelRef into an IOBluetoothRFCOMMChannel \*.

## Relationships

### Inherits From

- [IOBluetoothObject](iobluetoothobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [PortDelegate](https://developer.apple.com/documentation/foundation/portdelegate)
- [StreamDelegate](https://developer.apple.com/documentation/foundation/streamdelegate)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothRFCOMMChannel (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..

## Declaration

```objectivec
@interface IOBluetoothRFCOMMChannel : IOBluetoothObject
```

<a id="overview"></a>

## Overview

An RFCOMM channel object can be obtained by opening an RFCOMM channel in a device, or by requesting a notification when a channel is created (this is commonly used to provide services).

## Topics

### Instance Variables

- [delegate](iobluetoothrfcommchannel/delegate-c.ivar.md)
- [mChannelID](iobluetoothrfcommchannel/mchannelid.md)
- [mChannelIsOpen](iobluetoothrfcommchannel/mchannelisopen.md)
- [mDataAvailablePort](iobluetoothrfcommchannel/mdataavailableport.md)
- [mDevice](iobluetoothrfcommchannel/mdevice.md)
- [mEventDataListener](iobluetoothrfcommchannel/meventdatalistener.md)
- [mEventDataListenerRefCon](iobluetoothrfcommchannel/meventdatalistenerrefcon.md)
- [mIncomingDataListener](iobluetoothrfcommchannel/mincomingdatalistener.md)
- [mIncomingDataListenerRefCon](iobluetoothrfcommchannel/mincomingdatalistenerrefcon.md)
- [mIncomingDataQueue](iobluetoothrfcommchannel/mincomingdataqueue.md)
- [mIsIncoming](iobluetoothrfcommchannel/misincoming.md)
- [mL2Channel](iobluetoothrfcommchannel/ml2channel.md)
- [mMTU](iobluetoothrfcommchannel/mmtu.md)
- [mObjectID](iobluetoothrfcommchannel/mobjectid.md)

### Instance Methods

- [closeChannel](iobluetoothrfcommchannel/close%28%29.md): Close the channel.
- [delegate](iobluetoothrfcommchannel/delegate%28%29.md): Returns the object delegate
- [getDevice](iobluetoothrfcommchannel/getdevice%28%29.md): Returns the Bluetooth Device that carries the rfcomm data.
- [getChannelID](iobluetoothrfcommchannel/getid%28%29.md): Returns the object rfcomm channel ID.
- [getMTU](iobluetoothrfcommchannel/getmtu%28%29.md): Returns the channel maximum transfer unit.
- [getObjectID](iobluetoothrfcommchannel/getobjectid%28%29.md): Returns the IOBluetoothObjectID of the given IOBluetoothRFCOMMChannel.
- [getRFCOMMChannelRef](iobluetoothrfcommchannel/getref%28%29.md): Returns an IOBluetoothRFCOMMChannelRef representation of the target IOBluetoothRFCOMMChannel object.
- [isIncoming](iobluetoothrfcommchannel/isincoming%28%29.md): Returns the direction of the channel. An incoming channel is one that was opened by the remote device.
- [isOpen](iobluetoothrfcommchannel/isopen%28%29.md): Returns the state of the channel.
- [isTransmissionPaused](iobluetoothrfcommchannel/istransmissionpaused%28%29.md): Returns TRUE if flow control is off.
- [registerForChannelCloseNotification:selector:](iobluetoothrfcommchannel/register%28forchannelclosenotification_selector_%29.md): Allows a client to register for a channel close notification.
- [sendRemoteLineStatus:](iobluetoothrfcommchannel/sendremotelinestatus%28__%29.md): Sends an error to the remote side.
- [setDelegate:](iobluetoothrfcommchannel/setdelegate%28__%29.md): Allows an object to register itself as a client of the RFCOMM channel.
- [setSerialParameters:dataBits:parity:stopBits:](iobluetoothrfcommchannel/setserialparameters%28__databits_parity_stopbits_%29.md): Changes the parameters of the serial connection.
- [write:length:sleep:](iobluetoothrfcommchannel/write_length_sleep_.md): Deprecated. Sends a block of data in the channel syncronously.
- [writeAsync:length:refcon:](iobluetoothrfcommchannel/writeasync%28__length_refcon_%29.md): Sends a block of data in the channel asynchronously.
- [writeSimple:length:sleep:bytesSent:](iobluetoothrfcommchannel/writesimple_length_sleep_bytessent_.md): Deprecated. Sends a block of data in the channel.
- [writeSync:length:](iobluetoothrfcommchannel/writesync%28__length_%29.md): Sends a block of data in the channel synchronously.

### Type Methods

- [registerForChannelOpenNotifications:selector:](iobluetoothrfcommchannel/register%28forchannelopennotifications_selector_%29.md): Allows a client to register for RFCOMM channel open notifications for any RFCOMM channel.
- [registerForChannelOpenNotifications:selector:withChannelID:direction:](iobluetoothrfcommchannel/register%28forchannelopennotifications_selector_withchannelid_direction_%29.md): Allows a client to register for RFCOMM channel open notifications for certain types of RFCOMM channels.
- [withObjectID:](iobluetoothrfcommchannel/withobjectid%28__%29.md): Returns the IObluetoothRFCOMMChannel with the given IOBluetoothObjectID.
- [withRFCOMMChannelRef:](iobluetoothrfcommchannel/withrfcommchannelref%28__%29.md): Method call to convert an IOBluetoothRFCOMMChannelRef into an IOBluetoothRFCOMMChannel \*.

## Relationships

### Inherits From

- [IOBluetoothObject](iobluetoothobject.md)

### Conforms To

- [NSPortDelegate](https://developer.apple.com/documentation/foundation/portdelegate)
- [NSStreamDelegate](https://developer.apple.com/documentation/foundation/streamdelegate)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
