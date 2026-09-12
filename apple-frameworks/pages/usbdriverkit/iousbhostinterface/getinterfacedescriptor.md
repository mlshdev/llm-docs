> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/getinterfacedescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/getinterfacedescriptor)

# GetInterfaceDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns the version of the interface descriptor that is associated with the specified configuration.

## Declaration

```objectivec
virtual const IOUSBInterfaceDescriptor * GetInterfaceDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor);
```

## Parameters

- `configurationDescriptor`: The configuration descriptor that owns the interface.

<a id="return-value"></a>

## Return Value

The interface descriptor structure.

## See Also

### Getting Interface-Related Descriptors

- [CopyConfigurationDescriptor](copyconfigurationdescriptor.md): Retrieves the parent configuration descriptor for this interface.
- [CopyStringDescriptor](copystringdescriptor-83du1.md): Returns a descriptor from the device in the specified language.
- [CopyStringDescriptor](copystringdescriptor-8k65j.md): Returns a string descriptor from the device.
