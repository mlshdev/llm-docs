> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetnextdescriptorwithtype(_:_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetnextdescriptorwithtype(_:_:_:))

# IOUSBGetNextDescriptorWithType(\_:\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next descriptor in a configuration descriptor that matches the type.

## Declaration

```swift
func IOUSBGetNextDescriptorWithType(_ configurationDescriptor: UnsafePointer<IOUSBConfigurationDescriptor>!, _ currentDescriptor: UnsafePointer<IOUSBDescriptorHeader>!, _ type: UInt8) -> UnsafePointer<IOUSBDescriptorHeader>!
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.
- `type`: The descriptor type to find.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md), and further validates that the returned descriptor’s `bDescriptorType` field matches the type parameter.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptor(\_:\_:\_:)](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType(\_:\_:\_:\_:)](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor(\_:\_:)](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor(\_:\_:)](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps(\_:\_:)](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.

# IOUSBGetNextDescriptorWithType (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next descriptor in a configuration descriptor that matches the type.

## Declaration

```objectivec
const IOUSBDescriptorHeader *IOUSBGetNextDescriptorWithType(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *currentDescriptor, const uint8_t type);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.
- `type`: The descriptor type to find.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md), and further validates that the returned descriptor’s `bDescriptorType` field matches the type parameter.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.
