> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1438403-iohidmanagergetproperty](https://developer.apple.com/documentation/iokit/1438403-iohidmanagergetproperty)

# IOHIDManagerGetProperty

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Obtains a property of an IOHIDManager.

## Declaration

```objectivec
CFTypeRef IOHIDManagerGetProperty(IOHIDManagerRef manager, CFStringRef key);
```

## Parameters

- `manager`: Reference to an IOHIDManager.
- `key`: CFStringRef containing key to be used when querying the manager.

<a id="return_value"></a>

## Return Value

Returns CFTypeRef containing the property.

<a id="discussion"></a>

## Discussion

Property keys are prefixed by kIOHIDDevice and declared in \<IOKit/hid/IOHIDKeys.h\>.

## See Also

### Miscellaneous

- [IOHIDManagerClose](1438405-iohidmanagerclose.md): Closes the IOHIDManager.
- [IOHIDManagerCopyDevices](1438391-iohidmanagercopydevices.md): Obtains currently enumerated devices.
- [IOHIDManagerCreate](1438383-iohidmanagercreate.md): Creates an IOHIDManager object.
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
