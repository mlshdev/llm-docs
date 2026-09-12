> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805235-cmgetdefaultdevice](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805235-cmgetdefaultdevice)

# CMGetDefaultDevice

**Interface language:** Objective-C

**Framework:** Application Services

Gets the default device.

## Declaration

```objectivec
CMError CMGetDefaultDevice (
   CMDeviceClass deviceClass,
   CMDeviceID *deviceID
);
```

## Parameters

- `deviceClass`: The device class whose default device you want to get. See [CMDeviceClass](../cmdeviceclass.md) for a list of the constants you can supply.
- `deviceID`: On return, points to the device ID for the default device.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

For each class of device, a device management layer may establish which of the registered devices is the default. This helps keep color management choices to a minimum and allows for some automatic features to be enabled, such as the "Default printer" as an output profile selection.

## See Also

### Accessing Default Devices

- [CMSetDefaultDevice](1805238-cmsetdefaultdevice.md): Sets the default device.
