> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetconfigurationmaxpowermilliamps](https://developer.apple.com/documentation/usbdriverkit/iousbgetconfigurationmaxpowermilliamps)

# IOUSBGetConfigurationMaxPowerMilliAmps

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Extracts the maximum bus current a configuration descriptor requires.

## Declaration

```objectivec
uint32_t IOUSBGetConfigurationMaxPowerMilliAmps(uint32_t usbDeviceSpeed, const IOUSBConfigurationDescriptor *descriptor);
```

## Parameters

- `usbDeviceSpeed`: The operational speed of the device.
- `descriptor`: The configuration descriptor to parse.

<a id="return-value"></a>

## Return Value

The milliamps required.

<a id="Discussion"></a>

## Discussion

This method parses a configuration descriptor and returns the number of milliamps required to power the device.

## See Also

### Configuration Descriptors

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor.md): Gets the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype.md): Finds the next descriptor matching a given type within a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor.md): Gets the next descriptor in the specified configuration descriptor that belongs to another container descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype.md): Finds the next descriptor matching a specific type within a configuration descriptor that belongs to another container descriptor.
