> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhostcontroller](https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller)

# IOBluetoothHostController (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).

## Declaration

```swift
class IOBluetoothHostController
```

<a id="overview"></a>

## Overview

This object can be used to ask a Bluetooth HCI for certain pieces of information, and be used to make it perform certain functions.

## Topics

### Instance Properties

- [delegate](iobluetoothhostcontroller/delegate.md)
- [powerState](iobluetoothhostcontroller/powerstate.md): Gets the controller power state

### Instance Methods

- [addressAsString()](iobluetoothhostcontroller/addressasstring%28%29.md): Convience routine to get the HCI controller’s Bluetooth address as an NSString object.
- [classOfDevice()](iobluetoothhostcontroller/classofdevice%28%29.md): Gets the current class of device value.
- [nameAsString()](iobluetoothhostcontroller/nameasstring%28%29.md): Gets the “friendly” name of HCI controller.
- [setClassOfDevice(\_:forTimeInterval:)](iobluetoothhostcontroller/setclassofdevice%28__fortimeinterval_%29.md): Sets the current class of device value, for the specified amount of time. Note that the time interval *must* be set and valid. The range of acceptable values is 30-120 seconds. Anything above or below will be rounded up, or down, as appropriate.

### Type Methods

- [default()](iobluetoothhostcontroller/default%28%29.md): Gets the default HCI controller object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothHostController (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).

## Declaration

```objectivec
@interface IOBluetoothHostController : NSObject
```

<a id="overview"></a>

## Overview

This object can be used to ask a Bluetooth HCI for certain pieces of information, and be used to make it perform certain functions.

## Topics

### Instance Properties

- [delegate](iobluetoothhostcontroller/delegate.md)
- [powerState](iobluetoothhostcontroller/powerstate.md): Gets the controller power state

### Instance Methods

- [addressAsString](iobluetoothhostcontroller/addressasstring%28%29.md): Convience routine to get the HCI controller’s Bluetooth address as an NSString object.
- [classOfDevice](iobluetoothhostcontroller/classofdevice%28%29.md): Gets the current class of device value.
- [nameAsString](iobluetoothhostcontroller/nameasstring%28%29.md): Gets the “friendly” name of HCI controller.
- [setClassOfDevice:forTimeInterval:](iobluetoothhostcontroller/setclassofdevice%28__fortimeinterval_%29.md): Sets the current class of device value, for the specified amount of time. Note that the time interval *must* be set and valid. The range of acceptable values is 30-120 seconds. Anything above or below will be rounded up, or down, as appropriate.

### Type Methods

- [defaultController](iobluetoothhostcontroller/default%28%29.md): Gets the default HCI controller object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannel](iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
