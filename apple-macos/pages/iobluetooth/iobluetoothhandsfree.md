> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree)

# IOBluetoothHandsFree (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS 10.7+

Hands free profile class.

## Declaration

```swift
class IOBluetoothHandsFree
```

<a id="overview"></a>

## Overview

Superclass of IOBluetoothHandsFreeDevice and IOBluetoothHandsFreeAudioGateway classes. Contains the common code used to support the bluetoooth hands free profile.

## Topics

### Initializers

- [init(device:delegate:)](iobluetoothhandsfree/init%28device_delegate_%29.md): Create a new IOBluetoothHandsFree object

### Instance Properties

- [delegate](iobluetoothhandsfree/delegate.md): Return the delegate
- [device](iobluetoothhandsfree/device.md): Return the IOBluetoothDevice.
- [deviceCallHoldModes](iobluetoothhandsfree/devicecallholdmodes.md): Return the device’s supported call hold modes.
- [deviceSupportedFeatures](iobluetoothhandsfree/devicesupportedfeatures.md): Return the device’s supported features.
- [deviceSupportedSMSServices](iobluetoothhandsfree/devicesupportedsmsservices.md): Return the device’s supported SMS services.
- [inputVolume](iobluetoothhandsfree/inputvolume.md): Return the input volume
- [isConnected](iobluetoothhandsfree/isconnected.md)
- [isInputMuted](iobluetoothhandsfree/isinputmuted.md): Return the input mute state.
- [isOutputMuted](iobluetoothhandsfree/isoutputmuted.md): Return the output mute state.
- [isSMSEnabled](iobluetoothhandsfree/issmsenabled.md): Return YES if the device has SMS enabled.
- [outputVolume](iobluetoothhandsfree/outputvolume.md): Return the output volume
- [smsMode](iobluetoothhandsfree/smsmode.md): Return the device’s SMS mode.
- [supportedFeatures](iobluetoothhandsfree/supportedfeatures.md): Set the supported features

### Instance Methods

- [connect()](iobluetoothhandsfree/connect%28%29.md): Connect to the device
- [connectSCO()](iobluetoothhandsfree/connectsco%28%29.md): Open a SCO connection with the device
- [disconnect()](iobluetoothhandsfree/disconnect%28%29.md): Disconnect from the device
- [disconnectSCO()](iobluetoothhandsfree/disconnectsco%28%29.md): Disconnect the SCO connection with the device
- [indicator(\_:)](iobluetoothhandsfree/indicator%28__%29.md): Return an indicator’s value
- [isSCOConnected()](iobluetoothhandsfree/isscoconnected%28%29.md): Determine if there is a SCO connection to the device
- [setIndicator(\_:value:)](iobluetoothhandsfree/setindicator%28__value_%29.md): Set an indicator’s value

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md)
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md)

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
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothHandsFree (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS 10.7+

Hands free profile class.

## Declaration

```objectivec
@interface IOBluetoothHandsFree : NSObject
```

<a id="overview"></a>

## Overview

Superclass of IOBluetoothHandsFreeDevice and IOBluetoothHandsFreeAudioGateway classes. Contains the common code used to support the bluetoooth hands free profile.

## Topics

### Initializers

- [initWithDevice:delegate:](iobluetoothhandsfree/init%28device_delegate_%29.md): Create a new IOBluetoothHandsFree object

### Instance Properties

- [delegate](iobluetoothhandsfree/delegate.md): Return the delegate
- [device](iobluetoothhandsfree/device.md): Return the IOBluetoothDevice.
- [deviceCallHoldModes](iobluetoothhandsfree/devicecallholdmodes.md): Return the device’s supported call hold modes.
- [deviceSupportedFeatures](iobluetoothhandsfree/devicesupportedfeatures.md): Return the device’s supported features.
- [deviceSupportedSMSServices](iobluetoothhandsfree/devicesupportedsmsservices.md): Return the device’s supported SMS services.
- [inputVolume](iobluetoothhandsfree/inputvolume.md): Return the input volume
- [connected](iobluetoothhandsfree/isconnected.md)
- [inputMuted](iobluetoothhandsfree/isinputmuted.md): Return the input mute state.
- [outputMuted](iobluetoothhandsfree/isoutputmuted.md): Return the output mute state.
- [SMSEnabled](iobluetoothhandsfree/issmsenabled.md): Return YES if the device has SMS enabled.
- [outputVolume](iobluetoothhandsfree/outputvolume.md): Return the output volume
- [SMSMode](iobluetoothhandsfree/smsmode.md): Return the device’s SMS mode.
- [supportedFeatures](iobluetoothhandsfree/supportedfeatures.md): Set the supported features

### Instance Methods

- [connect](iobluetoothhandsfree/connect%28%29.md): Connect to the device
- [connectSCO](iobluetoothhandsfree/connectsco%28%29.md): Open a SCO connection with the device
- [disconnect](iobluetoothhandsfree/disconnect%28%29.md): Disconnect from the device
- [disconnectSCO](iobluetoothhandsfree/disconnectsco%28%29.md): Disconnect the SCO connection with the device
- [indicator:](iobluetoothhandsfree/indicator%28__%29.md): Return an indicator’s value
- [isSCOConnected](iobluetoothhandsfree/isscoconnected%28%29.md): Determine if there is a SCO connection to the device
- [setIndicator:value:](iobluetoothhandsfree/setindicator%28__value_%29.md): Set an indicator’s value

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md)
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
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
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
