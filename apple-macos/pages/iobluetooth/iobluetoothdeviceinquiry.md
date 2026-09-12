> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry)

# IOBluetoothDeviceInquiry (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.

## Declaration

```swift
class IOBluetoothDeviceInquiry
```

<a id="overview"></a>

## Overview

You should only use this object if your application needs to know about in-range devices and cannot use the GUI provided by the IOBluetoothUI framework. It will not let you perform unlimited back-to-back inquiries, but will instead throttle the number of attempted inquiries if too many are attempted within a small window of time. Important Note: DO NOT perform remote name requests on devices from delegate methods or while this object is in use. If you wish to do your own remote name requests on devices, do them after you have stopped this object. If you do not heed this warning, you could potentially deadlock your process.

## Topics

### Initializers

- [init(delegate:)](iobluetoothdeviceinquiry/init%28delegate_%29.md): Initializes an alloc’d inquiry object, and sets the delegate object, as if -setDelegate: were called on it.

### Instance Properties

- [delegate](iobluetoothdeviceinquiry/delegate.md)
- [inquiryLength](iobluetoothdeviceinquiry/inquirylength.md): Set the length of the inquiry that is performed each time -start is used on an inquiry object.
- [searchType](iobluetoothdeviceinquiry/searchtype.md): Set the devices that are found.
- [updateNewDeviceNames](iobluetoothdeviceinquiry/updatenewdevicenames.md): Sets whether or not the inquiry object will retrieve the names of devices found during the search.

### Instance Methods

- [clearFoundDevices()](iobluetoothdeviceinquiry/clearfounddevices%28%29.md): Removes all found devices from the inquiry object.
- [foundDevices()](iobluetoothdeviceinquiry/founddevices%28%29.md): Returns found IOBluetoothDevice objects as an array.
- [setSearchCriteria(\_:majorDeviceClass:minorDeviceClass:)](iobluetoothdeviceinquiry/setsearchcriteria%28__majordeviceclass_minordeviceclass_%29.md): Use this method to set the criteria for the device search.
- [start()](iobluetoothdeviceinquiry/start%28%29.md): Tells inquiry object to begin the inquiry and name updating process, if specified.
- [stop()](iobluetoothdeviceinquiry/stop%28%29.md): Halts the inquiry object. Could either stop the search for new devices, or the updating of found device names.

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
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

# IOBluetoothDeviceInquiry (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.

## Declaration

```objectivec
@interface IOBluetoothDeviceInquiry : NSObject
```

<a id="overview"></a>

## Overview

You should only use this object if your application needs to know about in-range devices and cannot use the GUI provided by the IOBluetoothUI framework. It will not let you perform unlimited back-to-back inquiries, but will instead throttle the number of attempted inquiries if too many are attempted within a small window of time. Important Note: DO NOT perform remote name requests on devices from delegate methods or while this object is in use. If you wish to do your own remote name requests on devices, do them after you have stopped this object. If you do not heed this warning, you could potentially deadlock your process.

## Topics

### Initializers

- [initWithDelegate:](iobluetoothdeviceinquiry/init%28delegate_%29.md): Initializes an alloc’d inquiry object, and sets the delegate object, as if -setDelegate: were called on it.

### Instance Properties

- [delegate](iobluetoothdeviceinquiry/delegate.md)
- [inquiryLength](iobluetoothdeviceinquiry/inquirylength.md): Set the length of the inquiry that is performed each time -start is used on an inquiry object.
- [searchType](iobluetoothdeviceinquiry/searchtype.md): Set the devices that are found.
- [updateNewDeviceNames](iobluetoothdeviceinquiry/updatenewdevicenames.md): Sets whether or not the inquiry object will retrieve the names of devices found during the search.

### Instance Methods

- [clearFoundDevices](iobluetoothdeviceinquiry/clearfounddevices%28%29.md): Removes all found devices from the inquiry object.
- [foundDevices](iobluetoothdeviceinquiry/founddevices%28%29.md): Returns found IOBluetoothDevice objects as an array.
- [setSearchCriteria:majorDeviceClass:minorDeviceClass:](iobluetoothdeviceinquiry/setsearchcriteria%28__majordeviceclass_minordeviceclass_%29.md): Use this method to set the criteria for the device search.
- [start](iobluetoothdeviceinquiry/start%28%29.md): Tells inquiry object to begin the inquiry and name updating process, if specified.
- [stop](iobluetoothdeviceinquiry/stop%28%29.md): Halts the inquiry object. Could either stop the search for new devices, or the updating of found device names.

### Type Methods

- [inquiryWithDelegate:](iobluetoothdeviceinquiry/inquirywithdelegate_.md): Class method to create an inquiry object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOBluetoothDevice](iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
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
- [IOBluetoothSDPDataElement](iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
