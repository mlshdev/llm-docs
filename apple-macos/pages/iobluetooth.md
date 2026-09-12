> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth](https://developer.apple.com/documentation/iobluetooth)

# IOBluetooth (Swift)

**Framework:** IOBluetooth  
**Kind:** Framework  
**Availability:** macOS 10.2+

Gain user-space access to Bluetooth devices.

<a id="overview"></a>

## Overview

The Bluetooth framework supports user-space access to Bluetooth devices, including both C and Objective-C APIs.

## Topics

### Classes

- [IOBluetoothDevice](iobluetooth/iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetooth/iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetooth/iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetooth/iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetooth/iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetooth/iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetooth/iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetooth/iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetooth/iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetooth/iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetooth/iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetooth/iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetooth/iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetooth/iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetooth/iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetooth/iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
- [IOBluetoothSDPDataElementRef](iobluetooth/iobluetoothsdpdataelementref.md)
- [IOBluetoothSDPServiceAttribute](iobluetooth/iobluetoothsdpserviceattribute.md): IOBluetoothSDPServiceAttribute represents a single SDP service attribute.
- [IOBluetoothSDPServiceRecord](iobluetooth/iobluetoothsdpservicerecord.md): An instance of this class represents a single SDP service record.
- [IOBluetoothSDPServiceRecordRef](iobluetooth/iobluetoothsdpservicerecordref.md)
- [IOBluetoothSDPUUID](iobluetooth/iobluetoothsdpuuid.md): An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.
- [IOBluetoothSDPUUIDRef](iobluetooth/iobluetoothsdpuuidref.md)
- [IOBluetoothUserNotification](iobluetooth/iobluetoothusernotification.md): Represents a registered notification.
- [IOBluetoothUserNotificationRef](iobluetooth/iobluetoothusernotificationref.md)
- [OBEXFileTransferServices](iobluetooth/obexfiletransferservices.md): Implements advanced OBEX operations in addition to simple PUT and GET.
- [OBEXSession](iobluetooth/obexsession.md): Object representing an OBEX connection to a remote target.

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetooth/iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetooth/iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetooth/iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetooth/iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetooth/iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetooth/iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetooth/iobluetoothrfcommchanneldelegate.md)

### Reference

- [Bluetooth.h User-Space](iobluetooth/bluetooth-h-user-space.md): Bluetooth wireless technology
- [IOBluetoothUserLib.h](iobluetooth/iobluetoothuserlib-h.md): Public Interfaces for Apple’s implementation of Bluetooth technology.
- [IOBluetoothUtilities.h](iobluetooth/iobluetoothutilities-h.md): See the Overview section above for header-level documentation.
- [OBEX.h](iobluetooth/obex-h.md): Public OBEX technology interfaces.
- [OBEXBluetooth.h](iobluetooth/obexbluetooth-h.md): Object Exchange over Bluetooth.
- [OBEXFileTransferServices.h](iobluetooth/obexfiletransferservices-h.md)
- [IOBluetooth Structures](iobluetooth/iobluetooth-structures.md)
- [IOBluetooth Enumerations](iobluetooth/iobluetooth-enumerations.md)
- [IOBluetooth Constants](iobluetooth/iobluetooth-constants.md)
- [IOBluetooth Functions](iobluetooth/iobluetooth-functions.md)
- [IOBluetooth Data Types](iobluetooth/iobluetooth-data-types.md)

### Variables

- [kBluetoothConnectionHandleSerialDeviceReserved](iobluetooth/kbluetoothconnectionhandleserialdevicereserved.md)

## See Also

### Related Documentation

- [Bluetooth Device Access Guide](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/Bluetooth/BT_Intro/BT_Intro.html#//apple_ref/doc/uid/TP30000997)

# IOBluetooth (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Framework  
**Availability:** macOS 10.2+

Gain user-space access to Bluetooth devices.

<a id="overview"></a>

## Overview

The Bluetooth framework supports user-space access to Bluetooth devices, including both C and Objective-C APIs.

## Topics

### Classes

- [IOBluetoothDevice](iobluetooth/iobluetoothdevice.md): An instance of IOBluetoothDevice represents a single remote Bluetooth device.
- [IOBluetoothDeviceInquiry](iobluetooth/iobluetoothdeviceinquiry.md): Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
- [IOBluetoothDevicePair](iobluetooth/iobluetoothdevicepair.md): An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
- [IOBluetoothDeviceRef](iobluetooth/iobluetoothdeviceref.md): An object that represents a Bluetooth I/O device.
- [IOBluetoothHandsFree](iobluetooth/iobluetoothhandsfree.md): Hands free profile class.
- [IOBluetoothHandsFreeAudioGateway](iobluetooth/iobluetoothhandsfreeaudiogateway.md): An object that sends data to a connected Bluetooth hands-free phone or headset and processes commands from it.
- [IOBluetoothHandsFreeDevice](iobluetooth/iobluetoothhandsfreedevice.md): An object you use to manage phone calls on a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHostController](iobluetooth/iobluetoothhostcontroller.md): This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
- [IOBluetoothL2CAPChannel](iobluetooth/iobluetoothl2capchannel.md): An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
- [IOBluetoothL2CAPChannelRef](iobluetooth/iobluetoothl2capchannelref.md)
- [IOBluetoothOBEXSession](iobluetooth/iobluetoothobexsession.md): An OBEX Session with a Bluetooth RFCOMM channel as the transport.
- [IOBluetoothObject](iobluetooth/iobluetoothobject.md)
- [IOBluetoothObjectRef](iobluetooth/iobluetoothobjectref.md)
- [IOBluetoothRFCOMMChannel](iobluetooth/iobluetoothrfcommchannel.md): An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
- [IOBluetoothRFCOMMChannelRef](iobluetooth/iobluetoothrfcommchannelref.md)
- [IOBluetoothSDPDataElement](iobluetooth/iobluetoothsdpdataelement.md): An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
- [IOBluetoothSDPDataElementRef](iobluetooth/iobluetoothsdpdataelementref.md)
- [IOBluetoothSDPServiceAttribute](iobluetooth/iobluetoothsdpserviceattribute.md): IOBluetoothSDPServiceAttribute represents a single SDP service attribute.
- [IOBluetoothSDPServiceRecord](iobluetooth/iobluetoothsdpservicerecord.md): An instance of this class represents a single SDP service record.
- [IOBluetoothSDPServiceRecordRef](iobluetooth/iobluetoothsdpservicerecordref.md)
- [IOBluetoothSDPUUID](iobluetooth/iobluetoothsdpuuid.md): An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.
- [IOBluetoothSDPUUIDRef](iobluetooth/iobluetoothsdpuuidref.md)
- [IOBluetoothUserNotification](iobluetooth/iobluetoothusernotification.md): Represents a registered notification.
- [IOBluetoothUserNotificationRef](iobluetooth/iobluetoothusernotificationref.md)
- [OBEXFileTransferServices](iobluetooth/obexfiletransferservices.md): Implements advanced OBEX operations in addition to simple PUT and GET.
- [OBEXSession](iobluetooth/obexsession.md): Object representing an OBEX connection to a remote target.

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetooth/iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetooth/iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetooth/iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetooth/iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetooth/iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetooth/iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetooth/iobluetoothrfcommchanneldelegate.md)

### Reference

- [Bluetooth.h User-Space](iobluetooth/bluetooth-h-user-space.md): Bluetooth wireless technology
- [IOBluetoothUserLib.h](iobluetooth/iobluetoothuserlib-h.md): Public Interfaces for Apple’s implementation of Bluetooth technology.
- [IOBluetoothUtilities.h](iobluetooth/iobluetoothutilities-h.md): See the Overview section above for header-level documentation.
- [OBEX.h](iobluetooth/obex-h.md): Public OBEX technology interfaces.
- [OBEXBluetooth.h](iobluetooth/obexbluetooth-h.md): Object Exchange over Bluetooth.
- [OBEXFileTransferServices.h](iobluetooth/obexfiletransferservices-h.md)
- [IOBluetooth Structures](iobluetooth/iobluetooth-structures.md)
- [IOBluetooth Enumerations](iobluetooth/iobluetooth-enumerations.md)
- [IOBluetooth Constants](iobluetooth/iobluetooth-constants.md)
- [IOBluetooth Functions](iobluetooth/iobluetooth-functions.md)
- [IOBluetooth Data Types](iobluetooth/iobluetooth-data-types.md)

### Enumeration Cases

- [kBluetoothConnectionHandleSerialDeviceReserved](iobluetooth/kbluetoothconnectionhandleserialdevicereserved.md)

## See Also

### Related Documentation

- [Bluetooth Device Access Guide](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/Bluetooth/BT_Intro/BT_Intro.html#//apple_ref/doc/uid/TP30000997)
