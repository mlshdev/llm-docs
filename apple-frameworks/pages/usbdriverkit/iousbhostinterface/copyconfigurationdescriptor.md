> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/copyconfigurationdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/copyconfigurationdescriptor)

# CopyConfigurationDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Retrieves the parent configuration descriptor for this interface.

## Declaration

```objectivec
virtual const IOUSBConfigurationDescriptor * CopyConfigurationDescriptor();
```

<a id="return-value"></a>

## Return Value

The configuration descriptor for this interface. It’s your responsibility to free the returned descriptor.

## See Also

### Getting Interface-Related Descriptors

- [GetInterfaceDescriptor](getinterfacedescriptor.md): Returns the version of the interface descriptor that is associated with the specified configuration.
- [CopyStringDescriptor](copystringdescriptor-83du1.md): Returns a descriptor from the device in the specified language.
- [CopyStringDescriptor](copystringdescriptor-8k65j.md): Returns a string descriptor from the device.
