> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbgetendpointdescriptoroptions](https://developer.apple.com/documentation/kernel/iousbgetendpointdescriptoroptions)

# IOUSBGetEndpointDescriptorOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.15+

Options for fetching the endpoint descriptors of a pipe.

## Declaration

```objectivec
enum IOUSBGetEndpointDescriptorOptions : unsigned int {
    ...
};
```

## Topics

### Getting the Options

- [kIOUSBGetEndpointDescriptorOriginal](iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptororiginal.md): The original descriptor that the system uses to create the pipe.
- [kIOUSBGetEndpointDescriptorCurrentPolicy](iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptorcurrentpolicy.md): The descriptor controlling the current endpoint policy.

## See Also

### Endpoint Descriptors

- [IOUSBEndpointDescriptor](iousbendpointdescriptor.md): The structure for storing an endpoint descriptor.
- [IOUSBStandardEndpointDescriptors](iousbstandardendpointdescriptors.md): A container for descriptors for a single endpoint.
- [IOUSBEndpointDescriptorPtr](iousbendpointdescriptorptr.md): A pointer to the endpoint descriptor.
- [IOUSBEndpointProperties](iousbendpointproperties.md): A structure that holds USB endpoint properties.
- [IOUSBEndpointPropertiesPtr](iousbendpointpropertiesptr.md): A pointer to an endpoint properties object.
