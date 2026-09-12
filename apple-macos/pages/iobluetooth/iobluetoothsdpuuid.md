> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid)

# IOBluetoothSDPUUID (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.

## Declaration

```swift
class IOBluetoothSDPUUID
```

<a id="overview"></a>

## Overview

The IOBluetoothSDPUUID class can represent a UUID of any valid size (16, 32 or 128 bits). It provides the ability to compare two UUIDs no matter what their size as well as the ability to promote the size of a UUID to a larger one.

## Topics

### Initializers

- [init(bytes:length:)](iobluetoothsdpuuid/init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [init(data:)](iobluetoothsdpuuid/init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [init(uuid16:)](iobluetoothsdpuuid/init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [init(uuid32:)](iobluetoothsdpuuid/init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32
- [init(UUID16:)](iobluetoothsdpuuid/init%28uuid16_%29-5dw92.md)
- [init(UUID32:)](iobluetoothsdpuuid/init%28uuid32_%29-2ulu6.md)

### Instance Methods

- [classForArchiver()](iobluetoothsdpuuid/classforarchiver%28%29.md)
- [classForCoder()](iobluetoothsdpuuid/classforcoder%28%29.md)
- [classForPortCoder()](iobluetoothsdpuuid/classforportcoder%28%29.md)
- [getWithLength(\_:)](iobluetoothsdpuuid/getwithlength%28__%29.md): Returns an IOBluetoothSDPUUID object matching the target UUID, but with the given number of bytes.
- [isEqual(to:)](iobluetoothsdpuuid/isequal%28to_%29.md): Compares the target IOBluetoothSDPUUID object with the given otherUUID object.

### Type Methods

- [uuid16(\_:)](iobluetoothsdpuuid/uuid16%28__%29.md): Creates a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [uuid32(\_:)](iobluetoothsdpuuid/uuid32%28__%29.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

## Relationships

### Inherits From

- [NSData](https://developer.apple.com/documentation/foundation/nsdata)

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

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

# IOBluetoothSDPUUID (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.

## Declaration

```objectivec
@interface IOBluetoothSDPUUID : NSData
```

<a id="overview"></a>

## Overview

The IOBluetoothSDPUUID class can represent a UUID of any valid size (16, 32 or 128 bits). It provides the ability to compare two UUIDs no matter what their size as well as the ability to promote the size of a UUID to a larger one.

## Topics

### Initializers

- [uuidWithBytes:length:](iobluetoothsdpuuid/init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [uuidWithData:](iobluetoothsdpuuid/init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [initWithUUID16:](iobluetoothsdpuuid/init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [initWithUUID32:](iobluetoothsdpuuid/init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

### Instance Variables

- [mUUIDData](iobluetoothsdpuuid/muuiddata.md)

### Instance Methods

- [classForArchiver](iobluetoothsdpuuid/classforarchiver%28%29.md)
- [classForCoder](iobluetoothsdpuuid/classforcoder%28%29.md)
- [classForPortCoder](iobluetoothsdpuuid/classforportcoder%28%29.md)
- [getSDPUUIDRef](iobluetoothsdpuuid/getsdpuuidref.md): Deprecated. Returns an IOBluetoothSDPUUIDRef representation of the target IOBluetoothSDPUUID object.
- [getUUIDWithLength:](iobluetoothsdpuuid/getwithlength%28__%29.md): Returns an IOBluetoothSDPUUID object matching the target UUID, but with the given number of bytes.
- [isEqualToUUID:](iobluetoothsdpuuid/isequal%28to_%29.md): Compares the target IOBluetoothSDPUUID object with the given otherUUID object.

### Type Methods

- [uuid16:](iobluetoothsdpuuid/uuid16%28__%29.md): Creates a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [uuid32:](iobluetoothsdpuuid/uuid32%28__%29.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32
- [withSDPUUIDRef:](iobluetoothsdpuuid/withsdpuuidref_.md): Deprecated. Method call to convert an IOBluetoothSDPUUIDRef into an IOBluetoothSDPUUID \*.

## Relationships

### Inherits From

- [NSData](https://developer.apple.com/documentation/foundation/nsdata)

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
