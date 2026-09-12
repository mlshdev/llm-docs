> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextdescriptorwithtype](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextdescriptorwithtype)

# IOUSBGetNextDescriptorWithType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Finds the next descriptor matching a given type within a configuration descriptor.

## Declaration

```objectivec
const IOUSBDescriptorHeader *IOUSBGetNextDescriptorWithType(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *currentDescriptor, const uint8_t type);
```

## Parameters

- `configurationDescriptor`: The configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor, or `NULL`.
- `type`: The type of descriptor to find.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `NULL` if no matching descriptor can be found.

<a id="Discussion"></a>

## Discussion

This method uses `getNextDescriptor`, and further validates that the returned descriptor’s bDescriptorType field matches the type parameter.

## See Also

### Configuration Descriptors

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor.md): Gets the next descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor.md): Gets the next descriptor in the specified configuration descriptor that belongs to another container descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype.md): Finds the next descriptor matching a specific type within a configuration descriptor that belongs to another container descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps.md): Extracts the maximum bus current a configuration descriptor requires.
