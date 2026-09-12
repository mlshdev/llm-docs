> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothuserlib-h](https://developer.apple.com/documentation/iobluetooth/iobluetoothuserlib-h)

# IOBluetoothUserLib.h (Swift)

**Framework:** IOBluetooth  
**Kind:** API Collection

Public Interfaces for Apple’s implementation of Bluetooth technology.

<a id="overview"></a>

## Overview

There is an accompanying header to this, “Bluetooth.h”, which contains all technology-specific typedefs and information. This header relies heavily on it.

<a id="Included-Headers"></a>

### Included Headers

- \<IOKit/IOKitLib.h\>
- \<CoreFoundation/CFMachPort.h\>
- \<IOBluetooth/Bluetooth.h\>
- \<Foundation/Foundation.h\>

## Topics

### Miscellaneous

- [IOBluetoothIgnoreHIDDevice(\_:)](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(\_:\_:\_:)](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice(\_:)](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothUserNotificationUnregister(\_:)](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.

### Callbacks

See the Overview for header-level documentation.

- [IOBluetoothUserNotificationCallback](iobluetoothusernotificationcallback.md): Callback function definition for user notifications.

### Data Types

See the Overview for header-level documentation.

- [IOBluetoothDeviceSearchOptions](iobluetoothdevicesearchoptions.md)
- [IOBluetoothDeviceSearchAttributes](iobluetoothdevicesearchattributes.md): Structure used to search for particular devices.
- [IOBluetoothDeviceSearchDeviceAttributes](iobluetoothdevicesearchdeviceattributes.md): Structure used to search for particular devices.

### Constants

See the Overview for header-level documentation.

- [IOBluetoothDeviceSearchDeviceAttributes](iobluetoothdevicesearchdeviceattributes.md): Structure used to search for particular devices.
- [IOBluetoothDeviceSearchTypesBits](iobluetoothdevicesearchtypesbits.md): Bits to determine what Bluetooth devices to search for

## See Also

### Reference

- [Bluetooth.h User-Space](bluetooth-h-user-space.md): Bluetooth wireless technology
- [IOBluetoothUtilities.h](iobluetoothutilities-h.md): See the Overview section above for header-level documentation.
- [OBEX.h](obex-h.md): Public OBEX technology interfaces.
- [OBEXBluetooth.h](obexbluetooth-h.md): Object Exchange over Bluetooth.
- [OBEXFileTransferServices.h](obexfiletransferservices-h.md)
- [IOBluetooth Structures](iobluetooth-structures.md)
- [IOBluetooth Enumerations](iobluetooth-enumerations.md)
- [IOBluetooth Constants](iobluetooth-constants.md)
- [IOBluetooth Functions](iobluetooth-functions.md)
- [IOBluetooth Data Types](iobluetooth-data-types.md)

# IOBluetoothUserLib.h (Objective-C)

**Framework:** IOBluetooth  
**Kind:** API Collection

Public Interfaces for Apple’s implementation of Bluetooth technology.

<a id="overview"></a>

## Overview

There is an accompanying header to this, “Bluetooth.h”, which contains all technology-specific typedefs and information. This header relies heavily on it.

<a id="Included-Headers"></a>

### Included Headers

- \<IOKit/IOKitLib.h\>
- \<CoreFoundation/CFMachPort.h\>
- \<IOBluetooth/Bluetooth.h\>
- \<Foundation/Foundation.h\>

## Topics

### Miscellaneous

- [IOBluetoothAddSCOAudioDevice](iobluetoothaddscoaudiodevice.md): Deprecated. Creates a persistent audio driver that will route audio data to/from the specified device.
- [IOBluetoothIgnoreHIDDevice](iobluetoothignorehiddevice%28__%29.md): Hints that the macOS Bluetooth software should ignore a HID device that connects up.
- [IOBluetoothL2CAPChannelRegisterForChannelCloseNotification](iobluetoothl2capchannelregisterforchannelclosenotification%28______%29.md): Allows a client to register for a channel close notification.
- [IOBluetoothRemoveIgnoredHIDDevice](iobluetoothremoveignoredhiddevice%28__%29.md): The counterpart to the above IOBluetoothIgnoreHIDDevice() API.
- [IOBluetoothRemoveSCOAudioDevice](iobluetoothremovescoaudiodevice.md): Deprecated. Removes a persistent audio driver for a device that had already been added using IOBluetoothAddAudioDevice().
- [IOBluetoothUserNotificationUnregister](iobluetoothusernotificationunregister%28__%29.md): Unregisters the target notification.

### Callbacks

See the Overview for header-level documentation.

- [IOBluetoothUserNotificationCallback](iobluetoothusernotificationcallback.md): Callback function definition for user notifications.

### Data Types

See the Overview for header-level documentation.

- [IOBluetoothDeviceSearchOptions](iobluetoothdevicesearchoptions.md)
- [IOBluetoothDeviceSearchAttributes](iobluetoothdevicesearchattributes.md): Structure used to search for particular devices.
- [IOBluetoothDeviceSearchDeviceAttributes](iobluetoothdevicesearchdeviceattributes.md): Structure used to search for particular devices.

### Constants

See the Overview for header-level documentation.

- [IOBluetoothDeviceSearchDeviceAttributes](iobluetoothdevicesearchdeviceattributes.md): Structure used to search for particular devices.
- [IOBluetoothDeviceSearchTypesBits](iobluetoothdevicesearchtypesbits.md): Bits to determine what Bluetooth devices to search for

## See Also

### Reference

- [Bluetooth.h User-Space](bluetooth-h-user-space.md): Bluetooth wireless technology
- [IOBluetoothUtilities.h](iobluetoothutilities-h.md): See the Overview section above for header-level documentation.
- [OBEX.h](obex-h.md): Public OBEX technology interfaces.
- [OBEXBluetooth.h](obexbluetooth-h.md): Object Exchange over Bluetooth.
- [OBEXFileTransferServices.h](obexfiletransferservices-h.md)
- [IOBluetooth Structures](iobluetooth-structures.md)
- [IOBluetooth Enumerations](iobluetooth-enumerations.md)
- [IOBluetooth Constants](iobluetooth-constants.md)
- [IOBluetooth Functions](iobluetooth-functions.md)
- [IOBluetooth Data Types](iobluetooth-data-types.md)
