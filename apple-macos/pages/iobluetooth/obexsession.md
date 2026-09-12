> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession](https://developer.apple.com/documentation/iobluetooth/obexsession)

# OBEXSession (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

Object representing an OBEX connection to a remote target.

## Declaration

```swift
class OBEXSession
```

<a id="overview"></a>

## Overview

You will have no need for a obtaining/using a raw OBEXSession, since it requires an underlying transport to do anything useful. However, once you have an object that is a subclass of this class, you can use the functions herein to manipulate that OBEXSession. First off, you will want to use OBEXConnect (if you are a client session) to actually cause the transport to open a connection to a remote target and establish an OBEX connection over it. From there you can issue more commands based on the responses from a server.

If you are a server session, the first thing you should receive is an OBEXConnect command packet, and you will want to issue an OBEXConnectResponse packet, with your reesponse to that command (success, denied, bad request, etc.).

You can use the session accessors to access certain information, such as the negotiated max packet length.

If you wish to implement your own OBEXSession over a transport such as ethernet, you will need to see the end of the file to determine which functions to override, and what to pass to those functions.

No timeout mechanism has been implemented so far for an OBEXSessions. If you need timeouts, you will need to implement them yourself. This is being explored for a future revision. However, be aware that the OBEX Specification does not explicitly require timeouts, so be sure you allow ample time for commands to complete, as some devices may be slow when sending large amounts of data.

## Topics

### DataTypes

- [OBEXTransportEvent](obextransportevent.md)
- [OBEXTransportEventType](obextransporteventtype.md)

### Instance Methods

- [clientHandleIncomingData(\_:)](obexsession/clienthandleincomingdata%28__%29.md): Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.
- [closeTransportConnection()](obexsession/closetransportconnection%28%29.md): You must override this - it will be called when the transport connection should be shutdown.
- [getAvailableCommandPayloadLength(\_:)](obexsession/getavailablecommandpayloadlength%28__%29.md): Determine the maximum amount of data you can send in a particular command as an OBEX client session.
- [getAvailableCommandResponsePayloadLength(\_:)](obexsession/getavailablecommandresponsepayloadlength%28__%29.md): Determine the maximum amount of data you can send in a particular command response as an OBEX server session.
- [getMaxPacketLength()](obexsession/getmaxpacketlength%28%29.md): Gets current max packet length.
- [hasOpenOBEXConnection()](obexsession/hasopenobexconnection%28%29.md): Has a successful connect packet been sent and received? This API tells you so.
- [hasOpenTransportConnection()](obexsession/hasopentransportconnection%28%29.md): You must override this - it will be called periodically to determine if a transport connection is open or not.
- [obexAbort(\_:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexabort%28__optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Abort command to the session’s target.
- [obexAbortResponse(\_:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexabortresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an abort response to a session’s target.
- [obexConnect(\_:maxPacketLength:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexconnect%28__maxpacketlength_optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Initiate an OBEX connection to a device. Causes underlying transport (Bluetooth, et al) to attempt to connect to a remote device. After success, an OBEX connect packet is sent to establish the OBEX Connection.
- [obexConnectResponse(\_:flags:maxPacketLength:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexconnectresponse%28__flags_maxpacketlength_optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a connect response to a session’s target.
- [obexDisconnect(\_:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexdisconnect%28__optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Disconnect command to the session’s target. THIS DOES NOT necessarily close the underlying transport connection. Deleting the session will ensure that closure.
- [obexDisconnectResponse(\_:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexdisconnectresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a disconnect response to a session’s target.
- [obexGet(\_:headers:headersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexget%28__headers_headerslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Get command to the session’s target.
- [obexGetResponse(\_:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexgetresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a get response to a session’s target.
- [obexPut(\_:headersData:headersDataLength:bodyData:bodyDataLength:eventSelector:selectorTarget:refCon:)](obexsession/obexput%28__headersdata_headersdatalength_bodydata_bodydatalength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Put command to the session’s target.
- [obexPutResponse(\_:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexputresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a put response to a session’s target.
- [obexSetPath(\_:constants:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexsetpath%28__constants_optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX SetPath command to the session’s target.
- [obexSetPathResponse(\_:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:)](obexsession/obexsetpathresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a set path response to a session’s target.
- [openTransportConnection(\_:selectorTarget:refCon:)](obexsession/opentransportconnection%28__selectortarget_refcon_%29.md): Opens a transport connection to a device. A Bluetooth connection is one example of a transport.
- [sendData(toTransport:dataLength:)](obexsession/senddata%28totransport_datalength_%29.md): You must override this to send data over your transport. This does nothing by default, it will return a kOBEXUnsupportedError.
- [serverHandleIncomingData(\_:)](obexsession/serverhandleincomingdata%28__%29.md): Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.
- [setEventCallback(\_:)](obexsession/seteventcallback%28__%29.md): Sets the C-API callback used when the session recieves data.
- [setEventRefCon(\_:)](obexsession/seteventrefcon%28__%29.md): Sets the C-API callback refCon used when the session recieves data.
- [setEventSelector(\_:target:refCon:)](obexsession/seteventselector%28__target_refcon_%29.md): Allow you to set a selector to be called when events occur on the OBEX session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOBluetoothOBEXSession](iobluetoothobexsession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)

# OBEXSession (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

Object representing an OBEX connection to a remote target.

## Declaration

```objectivec
@interface OBEXSession : NSObject
```

<a id="overview"></a>

## Overview

You will have no need for a obtaining/using a raw OBEXSession, since it requires an underlying transport to do anything useful. However, once you have an object that is a subclass of this class, you can use the functions herein to manipulate that OBEXSession. First off, you will want to use OBEXConnect (if you are a client session) to actually cause the transport to open a connection to a remote target and establish an OBEX connection over it. From there you can issue more commands based on the responses from a server.

If you are a server session, the first thing you should receive is an OBEXConnect command packet, and you will want to issue an OBEXConnectResponse packet, with your reesponse to that command (success, denied, bad request, etc.).

You can use the session accessors to access certain information, such as the negotiated max packet length.

If you wish to implement your own OBEXSession over a transport such as ethernet, you will need to see the end of the file to determine which functions to override, and what to pass to those functions.

No timeout mechanism has been implemented so far for an OBEXSessions. If you need timeouts, you will need to implement them yourself. This is being explored for a future revision. However, be aware that the OBEX Specification does not explicitly require timeouts, so be sure you allow ample time for commands to complete, as some devices may be slow when sending large amounts of data.

## Topics

### DataTypes

- [OBEXTransportEvent](obextransportevent.md)
- [OBEXTransportEventType](obextransporteventtype.md)

### Instance Variables

- [mHasOBEXConnection](obexsession/mhasobexconnection.md)
- [mIncompletePacketResponseCode](obexsession/mincompletepacketresponsecode.md)
- [mIsServer](obexsession/misserver.md)
- [mMaxPacketLength](obexsession/mmaxpacketlength.md)
- [mOurMaxPacketLength](obexsession/mourmaxpacketlength.md)
- [mPrivateOBEXSessionData](obexsession/mprivateobexsessiondata.md)
- [mReceivePacketBuffer](obexsession/mreceivepacketbuffer.md)
- [mResponsePacketDataLengthExpected](obexsession/mresponsepacketdatalengthexpected.md)
- [mResponsePacketDataLengthSoFar](obexsession/mresponsepacketdatalengthsofar.md)
- [mTheirMaxPacketLength](obexsession/mtheirmaxpacketlength.md)

### Instance Methods

- [clientHandleIncomingData:](obexsession/clienthandleincomingdata%28__%29.md): Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.
- [closeTransportConnection](obexsession/closetransportconnection%28%29.md): You must override this - it will be called when the transport connection should be shutdown.
- [getAvailableCommandPayloadLength:](obexsession/getavailablecommandpayloadlength%28__%29.md): Determine the maximum amount of data you can send in a particular command as an OBEX client session.
- [getAvailableCommandResponsePayloadLength:](obexsession/getavailablecommandresponsepayloadlength%28__%29.md): Determine the maximum amount of data you can send in a particular command response as an OBEX server session.
- [getMaxPacketLength](obexsession/getmaxpacketlength%28%29.md): Gets current max packet length.
- [hasOpenOBEXConnection](obexsession/hasopenobexconnection%28%29.md): Has a successful connect packet been sent and received? This API tells you so.
- [hasOpenTransportConnection](obexsession/hasopentransportconnection%28%29.md): You must override this - it will be called periodically to determine if a transport connection is open or not.
- [OBEXAbort:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexabort%28__optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Abort command to the session’s target.
- [OBEXAbortResponse:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexabortresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an abort response to a session’s target.
- [OBEXConnect:maxPacketLength:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexconnect%28__maxpacketlength_optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Initiate an OBEX connection to a device. Causes underlying transport (Bluetooth, et al) to attempt to connect to a remote device. After success, an OBEX connect packet is sent to establish the OBEX Connection.
- [OBEXConnectResponse:flags:maxPacketLength:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexconnectresponse%28__flags_maxpacketlength_optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a connect response to a session’s target.
- [OBEXDisconnect:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexdisconnect%28__optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Disconnect command to the session’s target. THIS DOES NOT necessarily close the underlying transport connection. Deleting the session will ensure that closure.
- [OBEXDisconnectResponse:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexdisconnectresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a disconnect response to a session’s target.
- [OBEXGet:headers:headersLength:eventSelector:selectorTarget:refCon:](obexsession/obexget%28__headers_headerslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Get command to the session’s target.
- [OBEXGetResponse:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexgetresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a get response to a session’s target.
- [OBEXPut:headersData:headersDataLength:bodyData:bodyDataLength:eventSelector:selectorTarget:refCon:](obexsession/obexput%28__headersdata_headersdatalength_bodydata_bodydatalength_eventselector_selectortarget_refcon_%29.md): Send an OBEX Put command to the session’s target.
- [OBEXPutResponse:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexputresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a put response to a session’s target.
- [OBEXSetPath:constants:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexsetpath%28__constants_optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send an OBEX SetPath command to the session’s target.
- [OBEXSetPathResponse:optionalHeaders:optionalHeadersLength:eventSelector:selectorTarget:refCon:](obexsession/obexsetpathresponse%28__optionalheaders_optionalheaderslength_eventselector_selectortarget_refcon_%29.md): Send a set path response to a session’s target.
- [openTransportConnection:selectorTarget:refCon:](obexsession/opentransportconnection%28__selectortarget_refcon_%29.md): Opens a transport connection to a device. A Bluetooth connection is one example of a transport.
- [sendDataToTransport:dataLength:](obexsession/senddata%28totransport_datalength_%29.md): You must override this to send data over your transport. This does nothing by default, it will return a kOBEXUnsupportedError.
- [serverHandleIncomingData:](obexsession/serverhandleincomingdata%28__%29.md): Tranport subclasses need to invoke this from their own data-receive handlers. For example, when data is received over a Bluetooth RFCOMM channel in the IOBluetoothOBEXSession, it in turn calls this to dispatch the data. If you do not handle this case, your server session will not work, guaranteed.
- [setEventCallback:](obexsession/seteventcallback%28__%29.md): Sets the C-API callback used when the session recieves data.
- [setEventRefCon:](obexsession/seteventrefcon%28__%29.md): Sets the C-API callback refCon used when the session recieves data.
- [setEventSelector:target:refCon:](obexsession/seteventselector%28__target_refcon_%29.md): Allow you to set a selector to be called when events occur on the OBEX session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOBluetoothOBEXSession](iobluetoothobexsession.md)

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
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
