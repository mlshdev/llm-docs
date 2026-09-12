> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement)

# IOBluetoothSDPDataElement (Swift)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

## Declaration

```swift
class IOBluetoothSDPDataElement
```

<a id="overview"></a>

## Overview

The data types described by the spec have been mapped onto the base Foundation classes NSNumber, NSArray, NSData as well as IOBluetoothSDPUUID. The number and boolean types (type descriptor 1, 2 and 5) are represented as NSNumber objects with the exception of 128-bit numbers which are represented as NSData objects in their raw format. The UUID type (type descriptor 3) is represented by IOBluetoothSDPUUID. The string and URL types (type descriptor 4 and 8) are represented by NSString. The sequence types (type descriptor 6 and 7) are represented by NSArray.

Typically, you will not need to create an IOBluetoothSDPDataElement directly, the system will do that automatically for both client and server operations. However, the current API for adding SDP services to the system does allow the use of an NSDictionary based format for creating new services. The purpose for that is to allow a service to be built up completely in a text file (a plist for example) and then easily imported into an app and added to the system without a lot of tedious code to build up the entire SDP service record.

The basis for that NSDictionary structure comes from the IOBluetoothSDPDataElement. At its simplest, a data element is made up of three parts: the type descriptor, the size (from which the size descriptor is generated) and the actual value. To provide a complete representation of a data element, an NSDictionary with three entries can be used. Each of the three entries has a key/value pair representing one of the three attributes of a data element. The first key/value pair has a key ‘DataElementType’ that contains a number value with the actual type descriptor for the data element. The second pair has a key ‘DataElementSize’ that contains the actual size of the element in bytes. The size descriptor will be calculated based on the size and type of the element. The third pair is the value itself whose key is ‘DataElementValue’ and whose type corresponds to the type mapping above.

In addition to this complete description of a data element, their are some shortcuts that can be used for some of the common types and sizes.

If the ‘DataElementType’ value is one of the numeric types (1, 2), the ‘DataElementValue’ can be an NSData instead of an NSNumber. In that case, the numeric data is taken in network byte order (MSB first). Additionally, the ‘DataElementSize’ parameter may be omitted and the size will be taken from the length of the data object.

If the ‘DataElementType’ value is the nil type (0), no ‘DataElementSize’ or ‘DataElementValue’ entries are needed.

If the ‘DataElementType’ value is any of the other types, the ‘DataElementSize’ entry is not needed since the size will be taken directly from the value (data, array, string).

In the case where the element is an unsigned, 32-bit integer (type descriptor 1, size descriptor 4), the value itself may simply be a number (instead of a dictionary as in the previous examples). In the case where the element is a UUID (type descriptor 3), the value itself may be a data object. The UUID type will be inferred and the size taken from the length of the data object.

In the case where the element is a text string (type descriptor 4), the value may be a string object. The text string type will be inferred and the size taken from the length of the string.

In the case where the element is a data element sequence, the value may be an array object. The type will be inferred and the size taken from the length of the array. Additionally, the array must contain sub-elements that will be parsed out individually.

## Topics

### Initializers

- [init(elementValue:)](iobluetoothsdpdataelement/init%28elementvalue_%29.md): Initializes a new IOBluetoothSDPDataElement with the given value.
- [init(type:sizeDescriptor:size:value:)](iobluetoothsdpdataelement/init%28type_sizedescriptor_size_value_%29.md): Initializes a new IOBluetoothSDPDataElement with the given attributes.
- [init(coder:)](iobluetoothsdpdataelement/init%28coder_%29.md)

### Instance Methods

- [contains(\_:)](iobluetoothsdpdataelement/contains%28__%29.md): Checks to see if the target data element is the same as the dataElement parameter or if it contains the dataElement parameter (if its a sequence type).
- [containsValue(\_:)](iobluetoothsdpdataelement/containsvalue%28__%29.md): Checks to see if the target data element’s value is the same as the value parameter or if it contains the value parameter.
- [getArrayValue()](iobluetoothsdpdataelement/getarrayvalue%28%29.md): If the data element is represented by an array object, it returns the value as an NSArray.
- [getDataValue()](iobluetoothsdpdataelement/getdatavalue%28%29.md): If the data element is represented by a data object, it returns the value as an NSData.
- [getNumberValue()](iobluetoothsdpdataelement/getnumbervalue%28%29.md): If the data element is represented by a number, it returns the value as an NSNumber.
- [getRef()](iobluetoothsdpdataelement/getref%28%29.md): Returns an IOBluetoothSDPDataElementRef representation of the target IOBluetoothSDPDataElement object.
- [getSize()](iobluetoothsdpdataelement/getsize%28%29.md): Returns the size in bytes of the target data element.
- [getSizeDescriptor()](iobluetoothsdpdataelement/getsizedescriptor%28%29.md): Returns the SDP spec defined data element size descriptor for the target data element.
- [getStringValue()](iobluetoothsdpdataelement/getstringvalue%28%29.md): If the data element is represented by a string object, it returns the value as an NSString.
- [getTypeDescriptor()](iobluetoothsdpdataelement/gettypedescriptor%28%29.md): Returns the SDP spec defined data element type descriptor for the target data element.
- [getUUIDValue()](iobluetoothsdpdataelement/getuuidvalue%28%29.md): If the data element is a UUID (type 3), it returns the value as an IOBluetoothSDPUUID.
- [getValue()](iobluetoothsdpdataelement/getvalue%28%29.md): Returns the object value of the data element.

### Type Methods

- [withElementValue(\_:)](iobluetoothsdpdataelement/withelementvalue%28__%29.md): Creates a new IOBluetoothSDPDataElement with the given value.
- [withSDPDataElementRef(\_:)](iobluetoothsdpdataelement/withsdpdataelementref%28__%29.md): Method call to convert an IOBluetoothSDPDataElementRef into an IOBluetoothSDPDataElement \*.
- [withType(\_:sizeDescriptor:size:value:)](iobluetoothsdpdataelement/withtype%28__sizedescriptor_size_value_%29.md): Creates a new IOBluetoothSDPDataElement with the given attributes.

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

# IOBluetoothSDPDataElement (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Class  
**Availability:** macOS

An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.

## Declaration

```objectivec
@interface IOBluetoothSDPDataElement : NSObject
```

<a id="overview"></a>

## Overview

The data types described by the spec have been mapped onto the base Foundation classes NSNumber, NSArray, NSData as well as IOBluetoothSDPUUID. The number and boolean types (type descriptor 1, 2 and 5) are represented as NSNumber objects with the exception of 128-bit numbers which are represented as NSData objects in their raw format. The UUID type (type descriptor 3) is represented by IOBluetoothSDPUUID. The string and URL types (type descriptor 4 and 8) are represented by NSString. The sequence types (type descriptor 6 and 7) are represented by NSArray.

Typically, you will not need to create an IOBluetoothSDPDataElement directly, the system will do that automatically for both client and server operations. However, the current API for adding SDP services to the system does allow the use of an NSDictionary based format for creating new services. The purpose for that is to allow a service to be built up completely in a text file (a plist for example) and then easily imported into an app and added to the system without a lot of tedious code to build up the entire SDP service record.

The basis for that NSDictionary structure comes from the IOBluetoothSDPDataElement. At its simplest, a data element is made up of three parts: the type descriptor, the size (from which the size descriptor is generated) and the actual value. To provide a complete representation of a data element, an NSDictionary with three entries can be used. Each of the three entries has a key/value pair representing one of the three attributes of a data element. The first key/value pair has a key ‘DataElementType’ that contains a number value with the actual type descriptor for the data element. The second pair has a key ‘DataElementSize’ that contains the actual size of the element in bytes. The size descriptor will be calculated based on the size and type of the element. The third pair is the value itself whose key is ‘DataElementValue’ and whose type corresponds to the type mapping above.

In addition to this complete description of a data element, their are some shortcuts that can be used for some of the common types and sizes.

If the ‘DataElementType’ value is one of the numeric types (1, 2), the ‘DataElementValue’ can be an NSData instead of an NSNumber. In that case, the numeric data is taken in network byte order (MSB first). Additionally, the ‘DataElementSize’ parameter may be omitted and the size will be taken from the length of the data object.

If the ‘DataElementType’ value is the nil type (0), no ‘DataElementSize’ or ‘DataElementValue’ entries are needed.

If the ‘DataElementType’ value is any of the other types, the ‘DataElementSize’ entry is not needed since the size will be taken directly from the value (data, array, string).

In the case where the element is an unsigned, 32-bit integer (type descriptor 1, size descriptor 4), the value itself may simply be a number (instead of a dictionary as in the previous examples). In the case where the element is a UUID (type descriptor 3), the value itself may be a data object. The UUID type will be inferred and the size taken from the length of the data object.

In the case where the element is a text string (type descriptor 4), the value may be a string object. The text string type will be inferred and the size taken from the length of the string.

In the case where the element is a data element sequence, the value may be an array object. The type will be inferred and the size taken from the length of the array. Additionally, the array must contain sub-elements that will be parsed out individually.

## Topics

### Initializers

- [initWithElementValue:](iobluetoothsdpdataelement/init%28elementvalue_%29.md): Initializes a new IOBluetoothSDPDataElement with the given value.
- [initWithType:sizeDescriptor:size:value:](iobluetoothsdpdataelement/init%28type_sizedescriptor_size_value_%29.md): Initializes a new IOBluetoothSDPDataElement with the given attributes.

### Instance Variables

- [mSize](iobluetoothsdpdataelement/msize.md)
- [mSizeDescriptor](iobluetoothsdpdataelement/msizedescriptor.md)
- [mTypeDescriptor](iobluetoothsdpdataelement/mtypedescriptor.md)
- [mValue](iobluetoothsdpdataelement/mvalue.md)

### Instance Methods

- [containsDataElement:](iobluetoothsdpdataelement/contains%28__%29.md): Checks to see if the target data element is the same as the dataElement parameter or if it contains the dataElement parameter (if its a sequence type).
- [containsValue:](iobluetoothsdpdataelement/containsvalue%28__%29.md): Checks to see if the target data element’s value is the same as the value parameter or if it contains the value parameter.
- [getArrayValue](iobluetoothsdpdataelement/getarrayvalue%28%29.md): If the data element is represented by an array object, it returns the value as an NSArray.
- [getDataValue](iobluetoothsdpdataelement/getdatavalue%28%29.md): If the data element is represented by a data object, it returns the value as an NSData.
- [getNumberValue](iobluetoothsdpdataelement/getnumbervalue%28%29.md): If the data element is represented by a number, it returns the value as an NSNumber.
- [getSDPDataElementRef](iobluetoothsdpdataelement/getref%28%29.md): Returns an IOBluetoothSDPDataElementRef representation of the target IOBluetoothSDPDataElement object.
- [getSize](iobluetoothsdpdataelement/getsize%28%29.md): Returns the size in bytes of the target data element.
- [getSizeDescriptor](iobluetoothsdpdataelement/getsizedescriptor%28%29.md): Returns the SDP spec defined data element size descriptor for the target data element.
- [getStringValue](iobluetoothsdpdataelement/getstringvalue%28%29.md): If the data element is represented by a string object, it returns the value as an NSString.
- [getTypeDescriptor](iobluetoothsdpdataelement/gettypedescriptor%28%29.md): Returns the SDP spec defined data element type descriptor for the target data element.
- [getUUIDValue](iobluetoothsdpdataelement/getuuidvalue%28%29.md): If the data element is a UUID (type 3), it returns the value as an IOBluetoothSDPUUID.
- [getValue](iobluetoothsdpdataelement/getvalue%28%29.md): Returns the object value of the data element.

### Type Methods

- [withElementValue:](iobluetoothsdpdataelement/withelementvalue%28__%29.md): Creates a new IOBluetoothSDPDataElement with the given value.
- [withSDPDataElementRef:](iobluetoothsdpdataelement/withsdpdataelementref%28__%29.md): Method call to convert an IOBluetoothSDPDataElementRef into an IOBluetoothSDPDataElement \*.
- [withType:sizeDescriptor:size:value:](iobluetoothsdpdataelement/withtype%28__sizedescriptor_size_value_%29.md): Creates a new IOBluetoothSDPDataElement with the given attributes.

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
