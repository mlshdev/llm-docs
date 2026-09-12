> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1438405-iohidmanagerclose](https://developer.apple.com/documentation/iokit/1438405-iohidmanagerclose)

# IOHIDManagerClose

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Closes the IOHIDManager.

## Declaration

```objectivec
IOReturn IOHIDManagerClose(IOHIDManagerRef manager, IOOptionBits options);
```

## Parameters

- `manager`: Reference to an IOHIDManager.
- `options`: Option bits to be sent down to the manager and device.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful.

<a id="discussion"></a>

## Discussion

This will also close all devices that are currently enumerated.

## See Also

### Miscellaneous

- [IOHIDManagerCopyDevices](1438391-iohidmanagercopydevices.md): Obtains currently enumerated devices.
- [IOHIDManagerCreate](1438383-iohidmanagercreate.md): Creates an IOHIDManager object.
- [IOHIDManagerGetProperty](1438403-iohidmanagergetproperty.md): Obtains a property of an IOHIDManager.
- [IOHIDManagerGetTypeID](1438375-iohidmanagergettypeid.md): Returns the type identifier of all IOHIDManager instances.
- [IOHIDManagerOpen](1438369-iohidmanageropen.md): Opens the IOHIDManager.
- [IOHIDManagerRegisterDeviceMatchingCallback](1438399-iohidmanagerregisterdevicematchi.md): Registers a callback to be used a device is enumerated.
- [IOHIDManagerRegisterDeviceRemovalCallback](1438376-iohidmanagerregisterdeviceremova.md): Registers a callback to be used when any enumerated device is removed.
- [IOHIDManagerRegisterInputReportCallback](1438397-iohidmanagerregisterinputreportc.md): Registers a callback to be used when an input report is issued by any enumerated device.
- [IOHIDManagerRegisterInputValueCallback](1438367-iohidmanagerregisterinputvalueca.md): Registers a callback to be used when an input value is issued by any enumerated device.
- [IOHIDManagerSaveToPropertyDomain](1438395-iohidmanagersavetopropertydomain.md): Used to write out the current properties to a specific domain.
- [IOHIDManagerScheduleWithRunLoop](1438409-iohidmanagerschedulewithrunloop.md): Schedules HID manager with run loop.
- [IOHIDManagerSetDeviceMatching](1438371-iohidmanagersetdevicematching.md): Sets matching criteria for device enumeration.
- [IOHIDManagerSetDeviceMatchingMultiple](1438387-iohidmanagersetdevicematchingmul.md): Sets multiple matching criteria for device enumeration.
- [IOHIDManagerSetInputValueMatching](1438389-iohidmanagersetinputvaluematchin.md): Sets matching criteria for input values received via IOHIDManagerRegisterInputValueCallback.
- [IOHIDManagerSetInputValueMatchingMultiple](1438379-iohidmanagersetinputvaluematchin.md): Sets multiple matching criteria for input values received via IOHIDManagerRegisterInputValueCallback.
- [IOHIDManagerSetProperty](1438401-iohidmanagersetproperty.md): Sets a property for an IOHIDManager.
- [IOHIDManagerUnscheduleFromRunLoop](1438378-iohidmanagerunschedulefromrunloo.md): Unschedules HID manager with run loop.
