> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord)

# IOBluetoothSDPServiceRecord (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of this class represents a single SDP service record.

## Declaration

```swift
class IOBluetoothSDPServiceRecord
```

<a id="overview"></a>

## Overview

As a service record, an instance of this class has an NSDictionary of service attributes. It also has a link to the IOBluetoothDevice that the service belongs to. The service dictionary is keyed off of the attribute ID of each attribute represented as an NSNumber.

## Topics

### Initializers

- [init(serviceDictionary:device:)](iobluetoothsdpservicerecord/init%28servicedictionary_device_%29.md): Returns an initialized IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.
- [init(coder:)](iobluetoothsdpservicerecord/init%28coder_%29.md)

### Instance Properties

- [attributes](iobluetoothsdpservicerecord/attributes.md): Returns an NSDictionary containing the attributes for the service.
- [device](iobluetoothsdpservicerecord/device.md): Returns the IOBluetoothDevice that the target service belongs to.
- [sortedAttributes](iobluetoothsdpservicerecord/sortedattributes-swift.property.md): Returns a sorted array of SDP attributes

### Instance Methods

- [getAttributeDataElement(\_:)](iobluetoothsdpservicerecord/getattributedataelement%28__%29.md): Returns the data element for the given attribute ID in the target service.
- [getHandle(\_:)](iobluetoothsdpservicerecord/gethandle%28__%29.md): Allows the discovery of the service record handle assigned to the service.
- [getL2CAPPSM(\_:)](iobluetoothsdpservicerecord/getl2cappsm%28__%29.md): Allows the discovery of the L2CAP PSM assigned to the service.
- [getRFCOMMChannelID(\_:)](iobluetoothsdpservicerecord/getrfcommchannelid%28__%29.md): Allows the discovery of the RFCOMM channel ID assigned to the service.
- [getRef()](iobluetoothsdpservicerecord/getref%28%29.md): Returns an IOBluetoothSDPServiceRecordRef representation of the target IOBluetoothSDPServiceRecord object.
- [getServiceName()](iobluetoothsdpservicerecord/getservicename%28%29.md): Returns the name of the service.
- [handsFreeSupportedFeatures()](iobluetoothsdpservicerecord/handsfreesupportedfeatures%28%29.md)
- [hasService(from:)](iobluetoothsdpservicerecord/hasservice%28from_%29.md): Returns TRUE if any one of the UUIDs in the given array is found in the target service.
- [matchesSearch(\_:)](iobluetoothsdpservicerecord/matchessearch%28__%29.md): Returns TRUE any of the UUID arrays in the search array match the target service.
- [matchesUUID16(\_:)](iobluetoothsdpservicerecord/matchesuuid16%28__%29.md): Returns TRUE the UUID16 is found in the target service.
- [matchesUUIDArray(\_:)](iobluetoothsdpservicerecord/matchesuuidarray%28__%29.md): Returns TRUE if ALL of the UUIDs in the given array is found in the target service.
- [remove()](iobluetoothsdpservicerecord/remove%28%29.md): Removes the service from the local SDP server.

### Type Methods

- [publishedServiceRecord(with:)](iobluetoothsdpservicerecord/publishedservicerecord%28with_%29.md): Adds a service to the local SDP server.
- [withSDPServiceRecordRef(\_:)](iobluetoothsdpservicerecord/withsdpservicerecordref%28__%29.md): Method call to convert an IOBluetoothSDPServiceRecordRef into an IOBluetoothSDPServiceRecord \*.
- [withServiceDictionary(\_:device:)](iobluetoothsdpservicerecord/withservicedictionary%28__device_%29.md): Returns an IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

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

# IOBluetoothSDPServiceRecord (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of this class represents a single SDP service record.

## Declaration

```objectivec
@interface IOBluetoothSDPServiceRecord : NSObject
```

<a id="overview"></a>

## Overview

As a service record, an instance of this class has an NSDictionary of service attributes. It also has a link to the IOBluetoothDevice that the service belongs to. The service dictionary is keyed off of the attribute ID of each attribute represented as an NSNumber.

## Topics

### Initializers

- [initWithServiceDictionary:device:](iobluetoothsdpservicerecord/init%28servicedictionary_device_%29.md): Returns an initialized IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

### Instance Variables

- [mAttributeDictionary](iobluetoothsdpservicerecord/mattributedictionary.md)
- [mDeviceForService](iobluetoothsdpservicerecord/mdeviceforservice.md)
- [sortedAttributes](iobluetoothsdpservicerecord/sortedattributes-c.ivar.md)

### Instance Properties

- [attributes](iobluetoothsdpservicerecord/attributes.md): Returns an NSDictionary containing the attributes for the service.
- [device](iobluetoothsdpservicerecord/device.md): Returns the IOBluetoothDevice that the target service belongs to.
- [sortedAttributes](iobluetoothsdpservicerecord/sortedattributes-swift.property.md): Returns a sorted array of SDP attributes

### Instance Methods

- [getAttributeDataElement:](iobluetoothsdpservicerecord/getattributedataelement%28__%29.md): Returns the data element for the given attribute ID in the target service.
- [getAttributes](iobluetoothsdpservicerecord/getattributes.md): Deprecated.
- [getDevice](iobluetoothsdpservicerecord/getdevice.md): Deprecated.
- [getServiceRecordHandle:](iobluetoothsdpservicerecord/gethandle%28__%29.md): Allows the discovery of the service record handle assigned to the service.
- [getL2CAPPSM:](iobluetoothsdpservicerecord/getl2cappsm%28__%29.md): Allows the discovery of the L2CAP PSM assigned to the service.
- [getRFCOMMChannelID:](iobluetoothsdpservicerecord/getrfcommchannelid%28__%29.md): Allows the discovery of the RFCOMM channel ID assigned to the service.
- [getSDPServiceRecordRef](iobluetoothsdpservicerecord/getref%28%29.md): Returns an IOBluetoothSDPServiceRecordRef representation of the target IOBluetoothSDPServiceRecord object.
- [getServiceName](iobluetoothsdpservicerecord/getservicename%28%29.md): Returns the name of the service.
- [handsFreeSupportedFeatures](iobluetoothsdpservicerecord/handsfreesupportedfeatures%28%29.md)
- [hasServiceFromArray:](iobluetoothsdpservicerecord/hasservice%28from_%29.md): Returns TRUE if any one of the UUIDs in the given array is found in the target service.
- [matchesSearchArray:](iobluetoothsdpservicerecord/matchessearch%28__%29.md): Returns TRUE any of the UUID arrays in the search array match the target service.
- [matchesUUID16:](iobluetoothsdpservicerecord/matchesuuid16%28__%29.md): Returns TRUE the UUID16 is found in the target service.
- [matchesUUIDArray:](iobluetoothsdpservicerecord/matchesuuidarray%28__%29.md): Returns TRUE if ALL of the UUIDs in the given array is found in the target service.
- [removeServiceRecord](iobluetoothsdpservicerecord/remove%28%29.md): Removes the service from the local SDP server.

### Type Methods

- [publishedServiceRecordWithDictionary:](iobluetoothsdpservicerecord/publishedservicerecord%28with_%29.md): Adds a service to the local SDP server.
- [withSDPServiceRecordRef:](iobluetoothsdpservicerecord/withsdpservicerecordref%28__%29.md): Method call to convert an IOBluetoothSDPServiceRecordRef into an IOBluetoothSDPServiceRecord \*.
- [withServiceDictionary:device:](iobluetoothsdpservicerecord/withservicedictionary%28__device_%29.md): Returns an IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

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
