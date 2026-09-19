> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbgetendpointdescriptoroptions

# IOUSBGetEndpointDescriptorOptions

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Options for fetching the endpoint descriptors of a pipe.

## Declaration

```objectivec
enum IOUSBGetEndpointDescriptorOptions : unsigned int;
```

## Topics

### Getting the Descriptor Options

- [kIOUSBGetEndpointDescriptorOriginal](iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptororiginal.md): The original descriptor used to create the pipe.
- [kIOUSBGetEndpointDescriptorCurrentPolicy](iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptorcurrentpolicy.md): The descriptor controlling the current endpoint policy.

## See Also

### Getting the Endpoint Descriptors

- [GetDescriptors](iousbhostpipe/getdescriptors.md): Retrieves the endpoint descriptors associated with this pipe.
- [IOUSBStandardEndpointDescriptors](iousbstandardendpointdescriptors.md): Encapsulates the descriptors for a single endpoint.
