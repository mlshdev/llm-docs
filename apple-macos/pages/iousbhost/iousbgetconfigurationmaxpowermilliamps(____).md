> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetconfigurationmaxpowermilliamps(_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetconfigurationmaxpowermilliamps(_:_:))

# IOUSBGetConfigurationMaxPowerMilliAmps(\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the maximum bus current that a configuration descriptor requires.

## Declaration

```swift
func IOUSBGetConfigurationMaxPowerMilliAmps(_ usbDeviceSpeed: UInt32, _ descriptor: UnsafePointer<IOUSBConfigurationDescriptor>!) -> UInt32
```

## Parameters

- `usbDeviceSpeed`: The operational speed of the device.
- `descriptor`: The configuration descriptor to parse.

<a id="return-value"></a>

## Return Value

The number of milliamps necessary.

<a id="Discussion"></a>

## Discussion

This method parses a configuration descriptor and returns the number of milliamps necessary to power the device.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType(\_:\_:\_:)](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptor(\_:\_:\_:)](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType(\_:\_:\_:\_:)](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor(\_:\_:)](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor(\_:\_:)](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.

# IOUSBGetConfigurationMaxPowerMilliAmps (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the maximum bus current that a configuration descriptor requires.

## Declaration

```objectivec
uint32_t IOUSBGetConfigurationMaxPowerMilliAmps(uint32_t usbDeviceSpeed, const IOUSBConfigurationDescriptor *descriptor);
```

## Parameters

- `usbDeviceSpeed`: The operational speed of the device.
- `descriptor`: The configuration descriptor to parse.

<a id="return-value"></a>

## Return Value

The number of milliamps necessary.

<a id="Discussion"></a>

## Discussion

This method parses a configuration descriptor and returns the number of milliamps necessary to power the device.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
