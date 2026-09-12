> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/copyconfigurationdescriptor-6qgew](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/copyconfigurationdescriptor-6qgew)

# CopyConfigurationDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns the currently selected configuration descriptor.

## Declaration

```objectivec
virtual const IOUSBConfigurationDescriptor * CopyConfigurationDescriptor(IOService *forClient);
```

## Parameters

- `forClient`: The current service object. You may specify `NULL` for this parameter.

<a id="return-value"></a>

## Return Value

A pointer to the configuration descriptor if found, or `NULL` if the device isn’t configured. It’s your responsibility to free the returned descriptor.

<a id="Discussion"></a>

## Discussion

This method searches the descriptor cache for the specified descriptor. If the descriptor isn’t in the cache, the method retrieves it from the device using a `GET_DESCRIPTOR` control request (USB 2.0, section 9.4.3) and adds it to the cache. When making a `GET_DESCRIPTOR` control request, this method acquires the service’s workloop lock and may call [commandSleep](https://developer.apple.com/documentation/kernel/iocommandgate/1573818-commandsleep).

## See Also

### Getting the Device Descriptors

- [CopyCapabilityDescriptors](copycapabilitydescriptors.md): Returns the device’s capability descriptors.
- [CopyConfigurationDescriptor](copyconfigurationdescriptor-lej1.md): Returns the configuration descriptor with the specified index.
- [CopyConfigurationDescriptorWithValue](copyconfigurationdescriptorwithvalue.md): Returns the configuration descriptor with the specified configuration value.
- [CopyDeviceDescriptor](copydevicedescriptor.md): Returns the device descriptor.
- [CopyStringDescriptor](copystringdescriptor-28ybo.md): Returns a string descriptor from the device.
- [CopyStringDescriptor](copystringdescriptor-9h8l2.md): Returns a string descriptor from the device.
- [CopyDescriptor](copydescriptor.md): Retrieves any type of descriptor from the cache or the device.
- [tIOUSBDeviceRequestTypeValue](../tiousbdevicerequesttypevalue.md): Constants indicating the type of request to make from a device.
- [tIOUSBDeviceRequestRecipientValue](../tiousbdevicerequestrecipientvalue.md): Constants indicating the type of object that receives the results of a request.
- [Descriptor Utilities](../descriptor-utilities.md): Iterate over the descriptors of a USB device and fetch specific values.
