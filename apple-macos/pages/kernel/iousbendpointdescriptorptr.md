> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbendpointdescriptorptr

# IOUSBEndpointDescriptorPtr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

A pointer to the endpoint descriptor.

## Declaration

```objectivec
typedef IOUSBEndpointDescriptor *IOUSBEndpointDescriptorPtr;
```

## See Also

### Endpoint Descriptors

- [IOUSBEndpointDescriptor](iousbendpointdescriptor.md): The structure for storing an endpoint descriptor.
- [IOUSBStandardEndpointDescriptors](iousbstandardendpointdescriptors.md): A container for descriptors for a single endpoint.
- [IOUSBEndpointProperties](iousbendpointproperties.md): A structure that holds USB endpoint properties.
- [IOUSBEndpointPropertiesPtr](iousbendpointpropertiesptr.md): A pointer to an endpoint properties object.
- [IOUSBGetEndpointDescriptorOptions](iousbgetendpointdescriptoroptions.md): Options for fetching the endpoint descriptors of a pipe.
