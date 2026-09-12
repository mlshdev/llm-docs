> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetnextinterfacedescriptor(_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetnextinterfacedescriptor(_:_:))

# IOUSBGetNextInterfaceDescriptor(\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next interface descriptor in a configuration descriptor.

## Declaration

```swift
func IOUSBGetNextInterfaceDescriptor(_ configurationDescriptor: UnsafePointer<IOUSBConfigurationDescriptor>!, _ currentDescriptor: UnsafePointer<IOUSBDescriptorHeader>!) -> UnsafePointer<IOUSBInterfaceDescriptor>!
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.

<a id="return-value"></a>

## Return Value

The next interface descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextDescriptorWithType(\_:\_:\_:)](iousbgetnextdescriptorwithtype%28______%29.md) to find the next interface descriptor.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType(\_:\_:\_:)](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptor(\_:\_:\_:)](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType(\_:\_:\_:\_:)](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor(\_:\_:)](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps(\_:\_:)](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.

# IOUSBGetNextInterfaceDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next interface descriptor in a configuration descriptor.

## Declaration

```objectivec
const IOUSBInterfaceDescriptor *IOUSBGetNextInterfaceDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *currentDescriptor);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.

<a id="return-value"></a>

## Return Value

The next interface descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype%28______%29.md) to find the next interface descriptor.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.
