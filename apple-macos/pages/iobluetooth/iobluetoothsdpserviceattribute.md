> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpserviceattribute](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute)

# IOBluetoothSDPServiceAttribute (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

IOBluetoothSDPServiceAttribute represents a single SDP service attribute.

## Declaration

```swift
class IOBluetoothSDPServiceAttribute
```

<a id="overview"></a>

## Overview

A service attribute contains two components: an attribute ID and a data element.

## Topics

### Initializers

- [init(id:attributeElement:)](iobluetoothsdpserviceattribute/init%28id_attributeelement_%29-7oebi.md): Initializes a new service attribute with the given ID and data element.
- [init(id:attributeElementValue:)](iobluetoothsdpserviceattribute/init%28id_attributeelementvalue_%29-84b3r.md): Initializes a new service attribute with the given ID and element value.
- [init(ID:attributeElement:)](iobluetoothsdpserviceattribute/init%28id_attributeelement_%29-3g9jw.md)
- [init(ID:attributeElementValue:)](iobluetoothsdpserviceattribute/init%28id_attributeelementvalue_%29-1o9lv.md)
- [init(coder:)](iobluetoothsdpserviceattribute/init%28coder_%29.md)

### Instance Methods

- [getDataElement()](iobluetoothsdpserviceattribute/getdataelement%28%29.md): Returns the data element for the target service attribute.
- [getID()](iobluetoothsdpserviceattribute/getid%28%29.md): Returns the attribute ID for the target service attribute.
- [getIDDataElement()](iobluetoothsdpserviceattribute/getiddataelement%28%29.md): Returns the data element representing the attribute ID for the target service attribute.

### Type Methods

- [withID(\_:attributeElement:)](iobluetoothsdpserviceattribute/withid%28__attributeelement_%29.md): Creates a new service attribute with the given ID and data element.
- [withID(\_:attributeElementValue:)](iobluetoothsdpserviceattribute/withid%28__attributeelementvalue_%29.md): Creates a new service attribute with the given ID and element value.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

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

# IOBluetoothSDPServiceAttribute (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

IOBluetoothSDPServiceAttribute represents a single SDP service attribute.

## Declaration

```objectivec
@interface IOBluetoothSDPServiceAttribute : NSObject
```

<a id="overview"></a>

## Overview

A service attribute contains two components: an attribute ID and a data element.

## Topics

### Initializers

- [initWithID:attributeElement:](iobluetoothsdpserviceattribute/init%28id_attributeelement_%29-7oebi.md): Initializes a new service attribute with the given ID and data element.
- [initWithID:attributeElementValue:](iobluetoothsdpserviceattribute/init%28id_attributeelementvalue_%29-84b3r.md): Initializes a new service attribute with the given ID and element value.

### Instance Variables

- [mAttributeDataElement](iobluetoothsdpserviceattribute/mattributedataelement.md)
- [mAttributeID](iobluetoothsdpserviceattribute/mattributeid.md)
- [mAttributeIDDataElement](iobluetoothsdpserviceattribute/mattributeiddataelement.md)

### Instance Methods

- [getDataElement](iobluetoothsdpserviceattribute/getdataelement%28%29.md): Returns the data element for the target service attribute.
- [getAttributeID](iobluetoothsdpserviceattribute/getid%28%29.md): Returns the attribute ID for the target service attribute.
- [getIDDataElement](iobluetoothsdpserviceattribute/getiddataelement%28%29.md): Returns the data element representing the attribute ID for the target service attribute.

### Type Methods

- [withID:attributeElement:](iobluetoothsdpserviceattribute/withid%28__attributeelement_%29.md): Creates a new service attribute with the given ID and data element.
- [withID:attributeElementValue:](iobluetoothsdpserviceattribute/withid%28__attributeelementvalue_%29.md): Creates a new service attribute with the given ID and element value.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

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
