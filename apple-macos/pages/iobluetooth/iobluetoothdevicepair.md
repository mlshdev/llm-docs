> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicepair](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair)

# IOBluetoothDevicePair (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.

## Declaration

```swift
class IOBluetoothDevicePair
```

<a id="overview"></a>

## Overview

Use the IOBluetoothDevicePair object to attempt to pair with any Bluetooth device. Once -start is invoked on it, progress is returned to the delegate via the messages defined below. This object enables you to pair with devices within your application without having to use the standard panels provided by the IOBluetoothUI framework, allowing you to write custom UI to select devices, and still handle the ability to perform device pairings.

Of note is that this object MAY attempt to perform two low-level pairings, depending on the type of device you are attempting to pair. This is inconsequential to your code, however, as it occurs automatically and does not change the messaging.

Once started, the pairing can be stopped. This will set the delegate to nil and then attempt to disconnect from the device if already connected.

## Topics

### Initializers

- [init(device:)](iobluetoothdevicepair/init%28device_%29.md): Creates an autorelease IOBluetoothDevicePair object with a device as the pairing target.

### Instance Properties

- [delegate](iobluetoothdevicepair/delegate.md)

### Instance Methods

- [device()](iobluetoothdevicepair/device%28%29.md): Get the IOBluetoothDevice being used by the object.
- [replyPINCode(\_:pinCode:)](iobluetoothdevicepair/replypincode%28__pincode_%29.md): This is the required reply to the devicePairingPINCodeRequest delegate message. Set the PIN code to use during pairing if required.
- [replyUserConfirmation(\_:)](iobluetoothdevicepair/replyuserconfirmation%28__%29.md): This is the required reply to the devicePairingUserConfirmationRequest delegate message.
- [setDevice(\_:)](iobluetoothdevicepair/setdevice%28__%29.md): Set the device object to pair with. It is retained by the object.
- [start()](iobluetoothdevicepair/start%28%29.md): Kicks off the pairing with the device.
- [stop()](iobluetoothdevicepair/stop%28%29.md): Stops the current pairing. Removes the delegate and disconnects if device was connected.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CBCentralManagerDelegate](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate)
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
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothDevicePair (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.

## Declaration

```objectivec
@interface IOBluetoothDevicePair : NSObject
```

<a id="overview"></a>

## Overview

Use the IOBluetoothDevicePair object to attempt to pair with any Bluetooth device. Once -start is invoked on it, progress is returned to the delegate via the messages defined below. This object enables you to pair with devices within your application without having to use the standard panels provided by the IOBluetoothUI framework, allowing you to write custom UI to select devices, and still handle the ability to perform device pairings.

Of note is that this object MAY attempt to perform two low-level pairings, depending on the type of device you are attempting to pair. This is inconsequential to your code, however, as it occurs automatically and does not change the messaging.

Once started, the pairing can be stopped. This will set the delegate to nil and then attempt to disconnect from the device if already connected.

## Topics

### Initializers

- [pairWithDevice:](iobluetoothdevicepair/init%28device_%29.md): Creates an autorelease IOBluetoothDevicePair object with a device as the pairing target.

### Instance Properties

- [delegate](iobluetoothdevicepair/delegate.md)

### Instance Methods

- [device](iobluetoothdevicepair/device%28%29.md): Get the IOBluetoothDevice being used by the object.
- [replyPINCode:PINCode:](iobluetoothdevicepair/replypincode%28__pincode_%29.md): This is the required reply to the devicePairingPINCodeRequest delegate message. Set the PIN code to use during pairing if required.
- [replyUserConfirmation:](iobluetoothdevicepair/replyuserconfirmation%28__%29.md): This is the required reply to the devicePairingUserConfirmationRequest delegate message.
- [setDevice:](iobluetoothdevicepair/setdevice%28__%29.md): Set the device object to pair with. It is retained by the object.
- [start](iobluetoothdevicepair/start%28%29.md): Kicks off the pairing with the device.
- [stop](iobluetoothdevicepair/stop%28%29.md): Stops the current pairing. Removes the delegate and disconnects if device was connected.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CBCentralManagerDelegate](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
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
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
