> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession)

# IOBluetoothOBEXSession (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An OBEX Session with a Bluetooth RFCOMM channel as the transport.

## Declaration

```swift
class IOBluetoothOBEXSession
```

## Topics

### Initializers

- [init(device:channelID:)](iobluetoothobexsession/init%28device_channelid_%29.md): Initializes a Bluetooth-based OBEX Session using a Bluetooth device.
- [init(incomingRFCOMMChannel:eventSelector:selectorTarget:refCon:)](iobluetoothobexsession/init%28incomingrfcommchannel_eventselector_selectortarget_refcon_%29.md): Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
- [init(sdpServiceRecord:)](iobluetoothobexsession/init%28sdpservicerecord_%29-h1xg.md): Initializes a Bluetooth-based OBEX Session using an SDP service record.
- [init(SDPServiceRecord:)](iobluetoothobexsession/init%28sdpservicerecord_%29-34uaf.md)

### Instance Methods

- [closeTransportConnection()](iobluetoothobexsession/closetransportconnection%28%29.md): An OBEXSession override. When this is called by the session baseclass, we will close the transport connection if it is opened. In our case, it will be the RFCOMM channel that needs closing.
- [getDevice()](iobluetoothobexsession/getdevice%28%29.md): Get the Bluetooth Device being used by the session object.
- [getRFCOMMChannel()](iobluetoothobexsession/getrfcommchannel%28%29.md): Get the Bluetooth RFCOMM channel being used by the session object.
- [hasOpenTransportConnection()](iobluetoothobexsession/hasopentransportconnection%28%29.md): An OBEXSession override. When this is called by the session baseclass, we will return whether or not we have a transport connection established to another OBEX server/client. In our case we will tell whether or not the RFCOMM channel to a remote device is still open.
- [isSessionTargetAMac()](iobluetoothobexsession/issessiontargetamac%28%29.md): Tells whether the target device is a Mac by checking its service record.
- [openTransportConnection(\_:selectorTarget:refCon:)](iobluetoothobexsession/opentransportconnection%28__selectortarget_refcon_%29.md): An OBEXSession override. When this is called by the session baseclass, we will attempt to open the transport connection. In our case, this would be an RFCOMM channel to another Bluetooth device.
- [restartTransmission()](iobluetoothobexsession/restarttransmission%28%29.md): If the transmission was stopped due to the lack of buffers this call restarts it.
- [sendBufferTroughChannel()](iobluetoothobexsession/sendbuffertroughchannel%28%29.md): Sends the next block of data through the rfcomm channel.
- [sendData(toTransport:dataLength:)](iobluetoothobexsession/senddata%28totransport_datalength_%29.md): An OBEXSession override. When this is called by the session baseclass, we will send the data we are given over our transport connection. If none is open, we could try to open it, or just return an error. In our case, it will be sent over the RFCOMM channel.
- [setOBEXSessionOpenConnectionCallback(\_:refCon:)](iobluetoothobexsession/setobexsessionopenconnectioncallback%28__refcon_%29.md): For C API support. Allows you to set the callback to be invoked when the OBEX connection is actually opened.
- [setOpenTransportConnectionAsyncSelector(\_:target:refCon:)](iobluetoothobexsession/setopentransportconnectionasyncselector%28__target_refcon_%29.md): Allows you to set the selector to be used when a transport connection is opened, or fails to open.

### Type Methods

- [withDevice(\_:channelID:)](iobluetoothobexsession/withdevice%28__channelid_%29.md): Creates a Bluetooth-based OBEX Session using a Bluetooth device and a Bluetooth RFCOMM channel ID.
- [withIncomingRFCOMMChannel(\_:eventSelector:selectorTarget:refCon:)](iobluetoothobexsession/withincomingrfcommchannel%28__eventselector_selectortarget_refcon_%29.md): Creates a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
- [withSDPServiceRecord(\_:)](iobluetoothobexsession/withsdpservicerecord%28__%29.md): Creates a Bluetooth-based OBEX Session using an SDP service record, typically obtained from a device/service browser window controller.

## Relationships

### Inherits From

- [OBEXSession](obexsession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

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
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothOBEXSession (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An OBEX Session with a Bluetooth RFCOMM channel as the transport.

## Declaration

```objectivec
@interface IOBluetoothOBEXSession : OBEXSession
```

## Topics

### Initializers

- [initWithDevice:channelID:](iobluetoothobexsession/init%28device_channelid_%29.md): Initializes a Bluetooth-based OBEX Session using a Bluetooth device.
- [initWithIncomingRFCOMMChannel:eventSelector:selectorTarget:refCon:](iobluetoothobexsession/init%28incomingrfcommchannel_eventselector_selectortarget_refcon_%29.md): Initializes a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
- [initWithSDPServiceRecord:](iobluetoothobexsession/init%28sdpservicerecord_%29-h1xg.md): Initializes a Bluetooth-based OBEX Session using an SDP service record.

### Instance Variables

- [bufferSize](iobluetoothobexsession/buffersize.md)
- [currentOffsetInBuffer](iobluetoothobexsession/currentoffsetinbuffer.md)
- [mDevice](iobluetoothobexsession/mdevice.md)
- [mOpenConnectionCallback](iobluetoothobexsession/mopenconnectioncallback.md)
- [mOpenConnectionCallbackRefCon](iobluetoothobexsession/mopenconnectioncallbackrefcon.md)
- [mOpenConnectionRefCon](iobluetoothobexsession/mopenconnectionrefcon.md)
- [mOpenConnectionSelector](iobluetoothobexsession/mopenconnectionselector.md)
- [mOpenConnectionSelectorTarget](iobluetoothobexsession/mopenconnectionselectortarget.md)
- [mOpenConnectionTimeout](iobluetoothobexsession/mopenconnectiontimeout.md)
- [mRFCOMMChannel](iobluetoothobexsession/mrfcommchannel.md)
- [mRFCOMMChannelID](iobluetoothobexsession/mrfcommchannelid.md)
- [outBuffer](iobluetoothobexsession/outbuffer.md)
- [waitingForRfcommSpace](iobluetoothobexsession/waitingforrfcommspace.md)

### Instance Methods

- [closeTransportConnection](iobluetoothobexsession/closetransportconnection%28%29.md): An OBEXSession override. When this is called by the session baseclass, we will close the transport connection if it is opened. In our case, it will be the RFCOMM channel that needs closing.
- [getDevice](iobluetoothobexsession/getdevice%28%29.md): Get the Bluetooth Device being used by the session object.
- [getRFCOMMChannel](iobluetoothobexsession/getrfcommchannel%28%29.md): Get the Bluetooth RFCOMM channel being used by the session object.
- [hasOpenTransportConnection](iobluetoothobexsession/hasopentransportconnection%28%29.md): An OBEXSession override. When this is called by the session baseclass, we will return whether or not we have a transport connection established to another OBEX server/client. In our case we will tell whether or not the RFCOMM channel to a remote device is still open.
- [isSessionTargetAMac](iobluetoothobexsession/issessiontargetamac%28%29.md): Tells whether the target device is a Mac by checking its service record.
- [openTransportConnection:selectorTarget:refCon:](iobluetoothobexsession/opentransportconnection%28__selectortarget_refcon_%29.md): An OBEXSession override. When this is called by the session baseclass, we will attempt to open the transport connection. In our case, this would be an RFCOMM channel to another Bluetooth device.
- [restartTransmission](iobluetoothobexsession/restarttransmission%28%29.md): If the transmission was stopped due to the lack of buffers this call restarts it.
- [sendBufferTroughChannel](iobluetoothobexsession/sendbuffertroughchannel%28%29.md): Sends the next block of data through the rfcomm channel.
- [sendDataToTransport:dataLength:](iobluetoothobexsession/senddata%28totransport_datalength_%29.md): An OBEXSession override. When this is called by the session baseclass, we will send the data we are given over our transport connection. If none is open, we could try to open it, or just return an error. In our case, it will be sent over the RFCOMM channel.
- [setOBEXSessionOpenConnectionCallback:refCon:](iobluetoothobexsession/setobexsessionopenconnectioncallback%28__refcon_%29.md): For C API support. Allows you to set the callback to be invoked when the OBEX connection is actually opened.
- [setOpenTransportConnectionAsyncSelector:target:refCon:](iobluetoothobexsession/setopentransportconnectionasyncselector%28__target_refcon_%29.md): Allows you to set the selector to be used when a transport connection is opened, or fails to open.

### Type Methods

- [withDevice:channelID:](iobluetoothobexsession/withdevice%28__channelid_%29.md): Creates a Bluetooth-based OBEX Session using a Bluetooth device and a Bluetooth RFCOMM channel ID.
- [withIncomingRFCOMMChannel:eventSelector:selectorTarget:refCon:](iobluetoothobexsession/withincomingrfcommchannel%28__eventselector_selectortarget_refcon_%29.md): Creates a Bluetooth-based OBEX Session using an incoming RFCOMM channel.
- [withSDPServiceRecord:](iobluetoothobexsession/withsdpservicerecord%28__%29.md): Creates a Bluetooth-based OBEX Session using an SDP service record, typically obtained from a device/service browser window controller.

## Relationships

### Inherits From

- [OBEXSession](obexsession.md)

### Conforms To

- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

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
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
