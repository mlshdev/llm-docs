> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel)

# IOBluetoothL2CAPChannel (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.

## Declaration

```swift
class IOBluetoothL2CAPChannel
```

<a id="overview"></a>

## Overview

A client won’t create IOBluetoothL2CAPChannel objects directly. Instead, the IOBluetoothDevice’s L2CAP channel open API is responsible for opening a new L2CAP channel and returning an IOBluetoothL2CAPChannel instance representing that newly opened channel. Additionally, the IOBluetooth notification system will send notifications when new L2CAP channels are open (if requested).

After a new L2CAP channel is opened, the L2CAP configuration process will not be completed until an incoming data listener is registered with the IOBluetoothL2CAPChannel object. The reason for this is to due to the limited buffering done of incoming L2CAP data. This way, we avoid the situation where incoming data is received before the client is ready for it. Once a client is done with an IOBluetoothL2CAPChannel that it opened, it should call -closeChannel. Additionally, if the client does not intend to use the connection to the remote device any further, it should call -closeConnection on the IOBluetoothDevice object.

## Topics

### Instance Properties

- [device](iobluetoothl2capchannel/device.md): Returns the IOBluetoothDevice to which the target L2CAP channel is open.
- [incomingMTU](iobluetoothl2capchannel/incomingmtu.md): Returns the current incoming MTU for the L2CAP channel.
- [localChannelID](iobluetoothl2capchannel/localchannelid.md): Returns the local L2CAP channel ID for the target L2CAP channel.
- [objectID](iobluetoothl2capchannel/objectid.md): Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.
- [outgoingMTU](iobluetoothl2capchannel/outgoingmtu.md): Returns the current outgoing MTU for the L2CAP channel.
- [psm](iobluetoothl2capchannel/psm.md): Returns the PSM for the target L2CAP channel.
- [remoteChannelID](iobluetoothl2capchannel/remotechannelid.md): Returns the remote L2CAP channel ID for the target L2CAP channel.

### Instance Methods

- [close()](iobluetoothl2capchannel/close%28%29.md): Initiates the close process on an open L2CAP channel.
- [delegate()](iobluetoothl2capchannel/delegate%28%29.md): Returns the currently assigned delegate
- [isIncoming()](iobluetoothl2capchannel/isincoming%28%29.md): Returns TRUE if the channel is an incoming channel.
- [register(forChannelCloseNotification:selector:)](iobluetoothl2capchannel/register%28forchannelclosenotification_selector_%29.md): Allows a client to register for a channel close notification.
- [requestRemoteMTU(\_:)](iobluetoothl2capchannel/requestremotemtu%28__%29.md): Initiates the process to reconfigure the L2CAP channel with a new outgoing MTU.
- [setDelegate(\_:)](iobluetoothl2capchannel/setdelegate%28__%29.md): Allows an object to register itself as client of the L2CAP channel.
- [setDelegate(\_:withConfiguration:)](iobluetoothl2capchannel/setdelegate%28__withconfiguration_%29.md): Allows an object to register itself as client of the L2CAP channel.
- [writeAsync(\_:length:refcon:)](iobluetoothl2capchannel/writeasync%28__length_refcon_%29.md): Writes the given data over the target L2CAP channel asynchronously to the remote device.
- [writeAsyncTrap(\_:length:refcon:)](iobluetoothl2capchannel/writeasynctrap%28__length_refcon_%29.md)
- [writeSync(\_:length:)](iobluetoothl2capchannel/writesync%28__length_%29.md): Writes the given data synchronously over the target L2CAP channel to the remote device.

### Type Methods

- [register(forChannelOpenNotifications:selector:)](iobluetoothl2capchannel/register%28forchannelopennotifications_selector_%29.md): Allows a client to register for L2CAP channel open notifications for any L2CAP channel.
- [register(forChannelOpenNotifications:selector:withPSM:direction:)](iobluetoothl2capchannel/register%28forchannelopennotifications_selector_withpsm_direction_%29.md): Allows a client to register for L2CAP channel open notifications for certain types of L2CAP channels.
- [withObjectID(\_:)](iobluetoothl2capchannel/withobjectid%28__%29.md): Returns the IObluetoothL2CAPChannel with the given IOBluetoothObjectID.

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
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothL2CAPChannel (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.

## Declaration

```objectivec
@interface IOBluetoothL2CAPChannel : IOBluetoothObject
```

<a id="overview"></a>

## Overview

A client won’t create IOBluetoothL2CAPChannel objects directly. Instead, the IOBluetoothDevice’s L2CAP channel open API is responsible for opening a new L2CAP channel and returning an IOBluetoothL2CAPChannel instance representing that newly opened channel. Additionally, the IOBluetooth notification system will send notifications when new L2CAP channels are open (if requested).

After a new L2CAP channel is opened, the L2CAP configuration process will not be completed until an incoming data listener is registered with the IOBluetoothL2CAPChannel object. The reason for this is to due to the limited buffering done of incoming L2CAP data. This way, we avoid the situation where incoming data is received before the client is ready for it. Once a client is done with an IOBluetoothL2CAPChannel that it opened, it should call -closeChannel. Additionally, if the client does not intend to use the connection to the remote device any further, it should call -closeConnection on the IOBluetoothDevice object.

## Topics

### Instance Variables

- [mChannelPSM](iobluetoothl2capchannel/mchannelpsm.md)
- [mDataAvailablePort](iobluetoothl2capchannel/mdataavailableport.md)
- [mDevice](iobluetoothl2capchannel/mdevice.md)
- [mEventDataListener](iobluetoothl2capchannel/meventdatalistener.md)
- [mEventDataListenerRefCon](iobluetoothl2capchannel/meventdatalistenerrefcon.md)
- [mIncomingChannel](iobluetoothl2capchannel/mincomingchannel.md)
- [mIncomingDataListener](iobluetoothl2capchannel/mincomingdatalistener.md)
- [mIncomingDataListenerRefCon](iobluetoothl2capchannel/mincomingdatalistenerrefcon.md)
- [mIncomingDataQueue](iobluetoothl2capchannel/mincomingdataqueue.md)
- [mIsClosed](iobluetoothl2capchannel/misclosed.md)
- [mL2CAPChannelConnectionHandler](iobluetoothl2capchannel/ml2capchannelconnectionhandler.md)
- [mLocalChannelID](iobluetoothl2capchannel/mlocalchannelid.md)
- [mObjectID](iobluetoothl2capchannel/mobjectid.md)
- [mRemoteChannelID](iobluetoothl2capchannel/mremotechannelid.md)

### Instance Properties

- [device](iobluetoothl2capchannel/device.md): Returns the IOBluetoothDevice to which the target L2CAP channel is open.
- [incomingMTU](iobluetoothl2capchannel/incomingmtu.md): Returns the current incoming MTU for the L2CAP channel.
- [localChannelID](iobluetoothl2capchannel/localchannelid.md): Returns the local L2CAP channel ID for the target L2CAP channel.
- [objectID](iobluetoothl2capchannel/objectid.md): Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.
- [outgoingMTU](iobluetoothl2capchannel/outgoingmtu.md): Returns the current outgoing MTU for the L2CAP channel.
- [PSM](iobluetoothl2capchannel/psm.md): Returns the PSM for the target L2CAP channel.
- [remoteChannelID](iobluetoothl2capchannel/remotechannelid.md): Returns the remote L2CAP channel ID for the target L2CAP channel.

### Instance Methods

- [closeChannel](iobluetoothl2capchannel/close%28%29.md): Initiates the close process on an open L2CAP channel.
- [delegate](iobluetoothl2capchannel/delegate%28%29.md): Returns the currently assigned delegate
- [getDevice](iobluetoothl2capchannel/getdevice.md): Deprecated. Returns the IOBluetoothDevice to which the target L2CAP channel is open.
- [getIncomingMTU](iobluetoothl2capchannel/getincomingmtu.md): Deprecated. Returns the current incoming MTU for the L2CAP channel.
- [getLocalChannelID](iobluetoothl2capchannel/getlocalchannelid.md): Deprecated. Returns the local L2CAP channel ID for the target L2CAP channel.
- [getObjectID](iobluetoothl2capchannel/getobjectid.md): Deprecated. Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.
- [getOutgoingMTU](iobluetoothl2capchannel/getoutgoingmtu.md): Deprecated. Returns the current outgoing MTU for the L2CAP channel.
- [getPSM](iobluetoothl2capchannel/getpsm.md): Deprecated. Returns the PSM for the target L2CAP channel.
- [getRemoteChannelID](iobluetoothl2capchannel/getremotechannelid.md): Deprecated. Returns the remote L2CAP channel ID for the target L2CAP channel.
- [isIncoming](iobluetoothl2capchannel/isincoming%28%29.md): Returns TRUE if the channel is an incoming channel.
- [registerForChannelCloseNotification:selector:](iobluetoothl2capchannel/register%28forchannelclosenotification_selector_%29.md): Allows a client to register for a channel close notification.
- [requestRemoteMTU:](iobluetoothl2capchannel/requestremotemtu%28__%29.md): Initiates the process to reconfigure the L2CAP channel with a new outgoing MTU.
- [setDelegate:](iobluetoothl2capchannel/setdelegate%28__%29.md): Allows an object to register itself as client of the L2CAP channel.
- [setDelegate:withConfiguration:](iobluetoothl2capchannel/setdelegate%28__withconfiguration_%29.md): Allows an object to register itself as client of the L2CAP channel.
- [writeAsync:length:refcon:](iobluetoothl2capchannel/writeasync%28__length_refcon_%29.md): Writes the given data over the target L2CAP channel asynchronously to the remote device.
- [writeAsyncTrap:length:refcon:](iobluetoothl2capchannel/writeasynctrap%28__length_refcon_%29.md)
- [writeSync:length:](iobluetoothl2capchannel/writesync%28__length_%29.md): Writes the given data synchronously over the target L2CAP channel to the remote device.

### Type Methods

- [registerForChannelOpenNotifications:selector:](iobluetoothl2capchannel/register%28forchannelopennotifications_selector_%29.md): Allows a client to register for L2CAP channel open notifications for any L2CAP channel.
- [registerForChannelOpenNotifications:selector:withPSM:direction:](iobluetoothl2capchannel/register%28forchannelopennotifications_selector_withpsm_direction_%29.md): Allows a client to register for L2CAP channel open notifications for certain types of L2CAP channels.
- [withObjectID:](iobluetoothl2capchannel/withobjectid%28__%29.md): Returns the IObluetoothL2CAPChannel with the given IOBluetoothObjectID.

## Relationships

### Inherits From

- [IOBluetoothObject](iobluetoothobject.md)

### Conforms To

- [NSPortDelegate](https://developer.apple.com/documentation/foundation/portdelegate)

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
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
