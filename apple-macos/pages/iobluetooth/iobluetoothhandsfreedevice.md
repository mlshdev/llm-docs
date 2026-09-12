> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice)

# IOBluetoothHandsFreeDevice (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS 10.7+

An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
class IOBluetoothHandsFreeDevice
```

## Topics

### Creating a Hands-Free Device Manager

- [init(device:delegate:)](iobluetoothhandsfreedevice/init%28device_delegate_%29.md): Creates an object to manage phone calls on a hands-free Bluetooth device.

### Accepting Calls

- [acceptCall()](iobluetoothhandsfreedevice/acceptcall%28%29.md): Accepts an incoming call.
- [acceptCallOnPhone()](iobluetoothhandsfreedevice/acceptcallonphone%28%29.md): Accepts an incoming call and transfers the audio to the managed hands-free phone or headset.
- [callTransfer()](iobluetoothhandsfreedevice/calltransfer%28%29.md): Ends all calls that are active or on hold, and accepts any waiting calls.

### Dialing Calls

- [dialNumber(\_:)](iobluetoothhandsfreedevice/dialnumber%28__%29.md): Calls the phone number on a hands-free phone or headset.
- [memoryDial(\_:)](iobluetoothhandsfreedevice/memorydial%28__%29.md): Calls the phone number stored in a speed dial or memory slot of the hands-free phone or headset.
- [redial()](iobluetoothhandsfreedevice/redial%28%29.md): Calls the number stored on the hands-free phone or headset again.

### Holding Calls

- [holdCall()](iobluetoothhandsfreedevice/holdcall%28%29.md): Places all active calls on hold and accepts a held or waiting call.
- [addHeldCall()](iobluetoothhandsfreedevice/addheldcall%28%29.md): Adds held calls to the current conversation.
- [placeAllOthers(onHold:)](iobluetoothhandsfreedevice/placeallothers%28onhold_%29.md): Places all calls except the call with the specified index on hold.

### Ending Calls

- [endCall()](iobluetoothhandsfreedevice/endcall%28%29.md): Ends the current call or refuses an incoming call.
- [releaseCall(\_:)](iobluetoothhandsfreedevice/releasecall%28__%29.md): Ends the call with the specified index.
- [releaseActiveCalls()](iobluetoothhandsfreedevice/releaseactivecalls%28%29.md): Ends all active calls and accepts a held or waiting call.
- [releaseHeldCalls()](iobluetoothhandsfreedevice/releaseheldcalls%28%29.md): Ends all calls that are on hold or returns a busy signal for a waiting call.

### Sending Messages and Commands

- [sendSMS(\_:message:)](iobluetoothhandsfreedevice/sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendDTMF(\_:)](iobluetoothhandsfreedevice/senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [send(atCommand:)](iobluetoothhandsfreedevice/send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
- [send(atCommand:timeout:selector:target:)](iobluetoothhandsfreedevice/send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

### Requesting Status Information

- [subscriberNumber()](iobluetoothhandsfreedevice/subscribernumber%28%29.md): Requests that the Bluetooth audio gateway send the subscriber number to the delegate.
- [currentCallList()](iobluetoothhandsfreedevice/currentcalllist%28%29.md): Requests that the Bluetooth audio gateway send the delegate a list of calls that are active, on hold, or being set up.

### Transferring Audio

- [transferAudioToComputer()](iobluetoothhandsfreedevice/transferaudiotocomputer%28%29.md): Moves the audio for current and future calls to a Mac.
- [transferAudioToPhone()](iobluetoothhandsfreedevice/transferaudiotophone%28%29.md): Moves the audio for current or future calls to a phone.

## Relationships

### Inherits From

- [IOBluetoothHandsFree](iobluetoothhandsfree.md)

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
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothHandsFreeDevice (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS 10.7+

An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
@interface IOBluetoothHandsFreeDevice : IOBluetoothHandsFree
```

## Topics

### Creating a Hands-Free Device Manager

- [initWithDevice:delegate:](iobluetoothhandsfreedevice/init%28device_delegate_%29.md): Creates an object to manage phone calls on a hands-free Bluetooth device.

### Accepting Calls

- [acceptCall](iobluetoothhandsfreedevice/acceptcall%28%29.md): Accepts an incoming call.
- [acceptCallOnPhone](iobluetoothhandsfreedevice/acceptcallonphone%28%29.md): Accepts an incoming call and transfers the audio to the managed hands-free phone or headset.
- [callTransfer](iobluetoothhandsfreedevice/calltransfer%28%29.md): Ends all calls that are active or on hold, and accepts any waiting calls.

### Dialing Calls

- [dialNumber:](iobluetoothhandsfreedevice/dialnumber%28__%29.md): Calls the phone number on a hands-free phone or headset.
- [memoryDial:](iobluetoothhandsfreedevice/memorydial%28__%29.md): Calls the phone number stored in a speed dial or memory slot of the hands-free phone or headset.
- [redial](iobluetoothhandsfreedevice/redial%28%29.md): Calls the number stored on the hands-free phone or headset again.

### Holding Calls

- [holdCall](iobluetoothhandsfreedevice/holdcall%28%29.md): Places all active calls on hold and accepts a held or waiting call.
- [addHeldCall](iobluetoothhandsfreedevice/addheldcall%28%29.md): Adds held calls to the current conversation.
- [placeAllOthersOnHold:](iobluetoothhandsfreedevice/placeallothers%28onhold_%29.md): Places all calls except the call with the specified index on hold.

### Ending Calls

- [endCall](iobluetoothhandsfreedevice/endcall%28%29.md): Ends the current call or refuses an incoming call.
- [releaseCall:](iobluetoothhandsfreedevice/releasecall%28__%29.md): Ends the call with the specified index.
- [releaseActiveCalls](iobluetoothhandsfreedevice/releaseactivecalls%28%29.md): Ends all active calls and accepts a held or waiting call.
- [releaseHeldCalls](iobluetoothhandsfreedevice/releaseheldcalls%28%29.md): Ends all calls that are on hold or returns a busy signal for a waiting call.

### Sending Messages and Commands

- [sendSMS:message:](iobluetoothhandsfreedevice/sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendDTMF:](iobluetoothhandsfreedevice/senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [sendATCommand:](iobluetoothhandsfreedevice/send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
- [sendATCommand:timeout:selector:target:](iobluetoothhandsfreedevice/send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

### Requesting Status Information

- [subscriberNumber](iobluetoothhandsfreedevice/subscribernumber%28%29.md): Requests that the Bluetooth audio gateway send the subscriber number to the delegate.
- [currentCallList](iobluetoothhandsfreedevice/currentcalllist%28%29.md): Requests that the Bluetooth audio gateway send the delegate a list of calls that are active, on hold, or being set up.

### Transferring Audio

- [transferAudioToComputer](iobluetoothhandsfreedevice/transferaudiotocomputer%28%29.md): Moves the audio for current and future calls to a Mac.
- [transferAudioToPhone](iobluetoothhandsfreedevice/transferaudiotophone%28%29.md): Moves the audio for current or future calls to a phone.

## Relationships

### Inherits From

- [IOBluetoothHandsFree](iobluetoothhandsfree.md)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
