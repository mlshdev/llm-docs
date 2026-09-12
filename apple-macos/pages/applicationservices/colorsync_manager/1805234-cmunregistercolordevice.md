> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805234-cmunregistercolordevice](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805234-cmunregistercolordevice)

# CMUnregisterColorDevice

**Interface language:** Objective-C

**Framework:** Application Services

Unregisters a device.

## Declaration

```objectivec
CMError CMUnregisterColorDevice (
   CMDeviceClass deviceClass,
   CMDeviceID deviceID
);
```

## Parameters

- `deviceClass`: The device class of the device you want to unregister. See [CMDeviceClass](../cmdeviceclass.md) for a list of the constants you can supply.
- `deviceID`: The device ID of the device you want to unregister.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

When a device is no longer to be used on a system (as opposed to being offline), it should be unregistered. If a device is temporarily shut down or disconnected, it does not to be unregistered unless either of the following is true:

- The device driver is being removed (uninstalled)
- The device driver can’t access the device profiles without the device

## See Also

### Registering Devices

- [CMRegisterColorDevice](1805231-cmregistercolordevice.md): Registers a device with ColorSync.
