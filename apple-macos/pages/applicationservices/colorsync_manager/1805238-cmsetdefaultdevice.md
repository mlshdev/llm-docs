> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805238-cmsetdefaultdevice](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805238-cmsetdefaultdevice)

# CMSetDefaultDevice

**Interface language:** Objective-C

**Framework:** Application Services

Sets the default device.

## Declaration

```objectivec
CMError CMSetDefaultDevice (
   CMDeviceClass deviceClass,
   CMDeviceID deviceID
);
```

## Parameters

- `deviceClass`: The class of the device (e.g., 'scnr' ,'cmra' ,'prtr' ,'mntr' ).
- `deviceID`: The unique identifier of the class (Class + ID uniquely id's device).

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

For each class of device, a device management layer may establish which of the registered devices is the default. This helps keep color management choices to a minimum and allows for some "automatic" features to be enabled, such as, "Default printer" as an output profile selection. If no such device (as specified by deviceClass and deviceID ) has been registered, an error is returned.

## See Also

### Accessing Default Devices

- [CMGetDefaultDevice](1805235-cmgetdefaultdevice.md): Gets the default device.
