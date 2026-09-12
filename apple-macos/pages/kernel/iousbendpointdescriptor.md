> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbendpointdescriptor](https://developer.apple.com/documentation/kernel/iousbendpointdescriptor)

# IOUSBEndpointDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The structure for storing an endpoint descriptor.

## Declaration

```objectivec
typedef struct IOUSBEndpointDescriptor IOUSBEndpointDescriptor;
```

<a id="discussion"></a>

## Discussion

A descriptor for a USB endpoint. See USB 3.2, 9.6.6.

## Topics

### Getting the Properties

- [bLength](iousbendpointdescriptor/1546156-blength.md): The size of the descriptor.
- [bDescriptorType](iousbendpointdescriptor/1545995-bdescriptortype.md): The type of the descriptor.
- [bEndpointAddress](iousbendpointdescriptor/1546243-bendpointaddress.md): The address of the endpoint.
- [bmAttributes](iousbendpointdescriptor/1546048-bmattributes.md): The attributes of the endpoint.
- [wMaxPacketSize](iousbendpointdescriptor/1546305-wmaxpacketsize.md): The maximum packet size that the endpoint supports.
- [bInterval](iousbendpointdescriptor/1546209-binterval.md): The interval to use when polling the endpoint for data transfers.

## See Also

### Endpoint Descriptors

- [IOUSBStandardEndpointDescriptors](iousbstandardendpointdescriptors.md): A container for descriptors for a single endpoint.
- [IOUSBEndpointDescriptorPtr](iousbendpointdescriptorptr.md): A pointer to the endpoint descriptor.
- [IOUSBEndpointProperties](iousbendpointproperties.md): A structure that holds USB endpoint properties.
- [IOUSBEndpointPropertiesPtr](iousbendpointpropertiesptr.md): A pointer to an endpoint properties object.
- [IOUSBGetEndpointDescriptorOptions](iousbgetendpointdescriptoroptions.md): Options for fetching the endpoint descriptors of a pipe.

### Related Documentation

- [IOUSBEndpointDescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbendpointdescriptor)
