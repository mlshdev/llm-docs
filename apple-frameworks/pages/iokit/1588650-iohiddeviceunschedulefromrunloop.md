> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1588650-iohiddeviceunschedulefromrunloop](https://developer.apple.com/documentation/iokit/1588650-iohiddeviceunschedulefromrunloop)

# IOHIDDeviceUnscheduleFromRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Unschedules HID device with run loop.

## Declaration

```objectivec
void IOHIDDeviceUnscheduleFromRunLoop(IOHIDDeviceRef device, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `device`: Reference to an IOHIDDevice.
- `runLoop`: RunLoop to be used when unscheduling any asynchronous activity.
- `runLoopMode`: Run loop mode to be used when unscheduling any asynchronous activity.

<a id="discussion"></a>

## Discussion

Formally disassociates device with client's run loop.

## See Also

### Miscellaneous

- [IOHIDDeviceClose](1588668-iohiddeviceclose.md): Closes communication with a HID device.
- [IOHIDDeviceConformsTo](1588665-iohiddeviceconformsto.md): Convenience function that scans the Application Collection elements to see if it conforms to the provided usagePage and usage.
- [IOHIDDeviceCopyMatchingElements](1588671-iohiddevicecopymatchingelements.md): Obtains HID elements that match the criteria contained in the matching dictionary.
- [IOHIDDeviceCopyValueMultiple](1588652-iohiddevicecopyvaluemultiple.md): Copies a values for multiple elements.
- [IOHIDDeviceCopyValueMultipleWithCallback](1588655-iohiddevicecopyvaluemultiplewith.md): Copies a values for multiple elements and returns status via a completion callback.
- [IOHIDDeviceCreate](1588663-iohiddevicecreate.md): Creates an element from an io_service_t.
- [IOHIDDeviceGetProperty](1588648-iohiddevicegetproperty.md): Obtains a property from an IOHIDDevice.
- [IOHIDDeviceGetReport](1588659-iohiddevicegetreport.md): Obtains a report from the device.
- [IOHIDDeviceGetReportWithCallback](1588662-iohiddevicegetreportwithcallback.md): Obtains a report from the device.
- [IOHIDDeviceGetService](1588646-iohiddevicegetservice.md): Returns the io_service_t for an IOHIDDevice, if it has one.
- [IOHIDDeviceGetTypeID](1588664-iohiddevicegettypeid.md): Returns the type identifier of all IOHIDDevice instances.
- [IOHIDDeviceGetValue](1588657-iohiddevicegetvalue.md): Gets a value for an element.
- [IOHIDDeviceGetValueWithCallback](1588647-iohiddevicegetvaluewithcallback.md): Gets a value for an element and returns status via a completion callback.
- [IOHIDDeviceOpen](1588670-iohiddeviceopen.md): Opens a HID device for communication.
- [IOHIDDeviceRegisterInputReportCallback](1588666-iohiddeviceregisterinputreportca.md): Registers a callback to be used when an input report is issued by the device.
- [IOHIDDeviceRegisterInputValueCallback](1588672-iohiddeviceregisterinputvaluecal.md): Registers a callback to be used when an input value is issued by the device.
- [IOHIDDeviceRegisterRemovalCallback](1588673-iohiddeviceregisterremovalcallba.md): Registers a callback to be used when a IOHIDDevice is removed.
- [IOHIDDeviceScheduleWithRunLoop](1588660-iohiddeviceschedulewithrunloop.md): Schedules HID device with run loop.
- [IOHIDDeviceSetInputValueMatching](1588654-iohiddevicesetinputvaluematching.md): Sets matching criteria for input values received via IOHIDDeviceRegisterInputValueCallback.
- [IOHIDDeviceSetInputValueMatchingMultiple](1588645-iohiddevicesetinputvaluematching.md): Sets multiple matching criteria for input values received via IOHIDDeviceRegisterInputValueCallback.
- [IOHIDDeviceSetProperty](1588653-iohiddevicesetproperty.md): Sets a property for an IOHIDDevice.
- [IOHIDDeviceSetReport](1588656-iohiddevicesetreport.md): Sends a report to the device.
- [IOHIDDeviceSetReportWithCallback](1588661-iohiddevicesetreportwithcallback.md): Sends a report to the device.
- [IOHIDDeviceSetValue](1588651-iohiddevicesetvalue.md): Sets a value for an element.
- [IOHIDDeviceSetValueMultiple](1588669-iohiddevicesetvaluemultiple.md): Sets multiple values for multiple elements.
- [IOHIDDeviceSetValueMultipleWithCallback](1588658-iohiddevicesetvaluemultiplewithc.md): Sets multiple values for multiple elements and returns status via a completion callback.
- [IOHIDDeviceSetValueWithCallback](1588667-iohiddevicesetvaluewithcallback.md): Sets a value for an element and returns status via a completion callback.
