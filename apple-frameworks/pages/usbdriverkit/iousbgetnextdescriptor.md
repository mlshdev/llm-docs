> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextdescriptor)

# IOUSBGetNextDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Gets the next descriptor in a configuration descriptor.

## Declaration

```objectivec
const IOUSBDescriptorHeader *IOUSBGetNextDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *currentDescriptor);
```

## Parameters

- `configurationDescriptor`: The configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `NULL`.

<a id="return-value"></a>

## Return Value

The descriptor pointer, or `NULL` if no descriptor can be returned.

<a id="Discussion"></a>

## Discussion

This method advances the current descriptor by its length, and validates that the new descriptor fits within the bounds of the configuration descriptor. Passing `NULL` for the `currentDescriptor` argument returns the first descriptor after the configuration descriptor.

## See Also

### Configuration Descriptors

- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype.md): Finds the next descriptor matching a given type within a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor.md): Gets the next descriptor in the specified configuration descriptor that belongs to another container descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype.md): Finds the next descriptor matching a specific type within a configuration descriptor that belongs to another container descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps.md): Extracts the maximum bus current a configuration descriptor requires.
