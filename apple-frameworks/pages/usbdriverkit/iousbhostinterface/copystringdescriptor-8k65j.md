> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/copystringdescriptor-8k65j](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/copystringdescriptor-8k65j)

# CopyStringDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns a string descriptor from the device.

## Declaration

```objectivec
virtual const IOUSBStringDescriptor * CopyStringDescriptor(uint8_t index);
```

## Parameters

- `index`: The descriptor’s index value.

<a id="return-value"></a>

## Return Value

A pointer to the descriptor, or `NULL` if the descriptor isn’t found. It’s your responsibility to free the returned descriptor.

<a id="Discussion"></a>

## Discussion

This method uses a `GET_DESCRIPTOR` control request (USB 2.0, section 9.4.3) to fetch the string descriptor from the device. The method puts the `index` value in the low byte of the `wValue` field of the request structure, and it uses US English as the language.

## See Also

### Getting Interface-Related Descriptors

- [CopyConfigurationDescriptor](copyconfigurationdescriptor.md): Retrieves the parent configuration descriptor for this interface.
- [GetInterfaceDescriptor](getinterfacedescriptor.md): Returns the version of the interface descriptor that is associated with the specified configuration.
- [CopyStringDescriptor](copystringdescriptor-83du1.md): Returns a descriptor from the device in the specified language.
