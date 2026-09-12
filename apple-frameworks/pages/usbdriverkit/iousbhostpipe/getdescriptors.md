> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/getdescriptors](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/getdescriptors)

# GetDescriptors

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Retrieves the endpoint descriptors associated with this pipe.

## Declaration

```objectivec
virtual kern_return_t GetDescriptors(IOUSBStandardEndpointDescriptors *descriptors, IOUSBGetEndpointDescriptorOptions type);
```

## Parameters

- `descriptors`: A pointer to a variable. On output, this variable contains the endpoint descriptors for the pipe.
- `type`: The options indicating which descriptors to retrieve. For a list of possible values, see [IOUSBGetEndpointDescriptorOptions](../iousbgetendpointdescriptoroptions.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Getting the Endpoint Descriptors

- [IOUSBStandardEndpointDescriptors](../iousbstandardendpointdescriptors.md): Encapsulates the descriptors for a single endpoint.
- [IOUSBGetEndpointDescriptorOptions](../iousbgetendpointdescriptoroptions.md): Options for fetching the endpoint descriptors of a pipe.
