> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogateway](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway)

# IOBluetoothHandsFreeAudioGateway (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.

## Declaration

```swift
class IOBluetoothHandsFreeAudioGateway
```

<a id="overview"></a>

## Overview

This class represents the audio gateway portion of a Bluetooth audio profile.

## Topics

### Creating a Gateway

- [init(device:delegate:)](iobluetoothhandsfreeaudiogateway/init%28device_delegate_%29.md): Creates an object that controls a connected Bluetooth hands-free phone or headset.

### Showing Status Indicators

- [createIndicator(\_:min:max:currentValue:)](iobluetoothhandsfreeaudiogateway/createindicator%28__min_max_currentvalue_%29.md): Sends a request to the Bluetooth device to show or update a status indicator.
- [Status Indicator Constants](status-indicator-constants.md): Send commands to modify the status indicators of a hands-free Bluetooth device.

### Sending and Receiving Commands

- [sendResponse(\_:)](iobluetoothhandsfreeaudiogateway/sendresponse%28__%29.md): Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.
- [sendResponse(\_:withOK:)](iobluetoothhandsfreeaudiogateway/sendresponse%28__withok_%29.md): Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse()](iobluetoothhandsfreeaudiogateway/sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
- [process(atCommand:)](iobluetoothhandsfreeaudiogateway/process%28atcommand_%29.md): Processes a command from a connected Bluetooth hands-free phone or headset.

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
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothHandsFreeAudioGateway (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.

## Declaration

```objectivec
@interface IOBluetoothHandsFreeAudioGateway : IOBluetoothHandsFree
```

<a id="overview"></a>

## Overview

This class represents the audio gateway portion of a Bluetooth audio profile.

## Topics

### Creating a Gateway

- [initWithDevice:delegate:](iobluetoothhandsfreeaudiogateway/init%28device_delegate_%29.md): Creates an object that controls a connected Bluetooth hands-free phone or headset.

### Showing Status Indicators

- [createIndicator:min:max:currentValue:](iobluetoothhandsfreeaudiogateway/createindicator%28__min_max_currentvalue_%29.md): Sends a request to the Bluetooth device to show or update a status indicator.
- [Status Indicator Constants](status-indicator-constants.md): Send commands to modify the status indicators of a hands-free Bluetooth device.

### Sending and Receiving Commands

- [sendResponse:](iobluetoothhandsfreeaudiogateway/sendresponse%28__%29.md): Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.
- [sendResponse:withOK:](iobluetoothhandsfreeaudiogateway/sendresponse%28__withok_%29.md): Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse](iobluetoothhandsfreeaudiogateway/sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
- [processATCommand:](iobluetoothhandsfreeaudiogateway/process%28atcommand_%29.md): Processes a command from a connected Bluetooth hands-free phone or headset.

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
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
