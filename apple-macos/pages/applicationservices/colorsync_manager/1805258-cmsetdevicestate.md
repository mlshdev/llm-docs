> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805258-cmsetdevicestate](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805258-cmsetdevicestate)

# CMSetDeviceState

**Interface language:** Objective-C

**Framework:** Application Services

Sets the state of a device.

## Declaration

```objectivec
CMError CMSetDeviceState (
   CMDeviceClass deviceClass,
   CMDeviceID deviceID,
   CMDeviceState deviceState
);
```

## Parameters

- `deviceClass`: The device class for the device whose state you want to set. See [CMDeviceClass](../cmdeviceclass.md) for a list of the constants you can supply.
- `deviceID`: The device ID for the device whose state you want to set.
- `deviceState`: The device state to set. See [Device States](../1560516-device_states.md) for the values you can supply.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

This routines provides access for the device management layer to update the state of a particular device. For example, a device can be offline, busy, or calibrated. The state data passed in replaces the old state data with the value you supply.

## See Also

### Accessing Device State and Information

- [CMGetDeviceState](1805257-cmgetdevicestate.md): Gets the state of a device.
- [CMGetDeviceInfo](1805260-cmgetdeviceinfo.md): Gets information about a specified device.
