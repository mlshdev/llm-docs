> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetnextassociateddescriptor(_:_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetnextassociateddescriptor(_:_:_:))

# IOUSBGetNextAssociatedDescriptor(\_:\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next associated descriptor in a configuration descriptor.

## Declaration

```swift
func IOUSBGetNextAssociatedDescriptor(_ configurationDescriptor: UnsafePointer<IOUSBConfigurationDescriptor>!, _ parentDescriptor: UnsafePointer<IOUSBDescriptorHeader>!, _ currentDescriptor: UnsafePointer<IOUSBDescriptorHeader>!) -> UnsafePointer<IOUSBDescriptorHeader>!
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `parentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md), but returns `nil` if it finds another descriptor with a `bDescriptorType` field that matches the value for `parentDescripto`r’s `bDescriptorType`. Use `nil` for `currentDescriptor` to return the first descriptor after `parentDescriptor`.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType(\_:\_:\_:)](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptorWithType(\_:\_:\_:\_:)](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor(\_:\_:)](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor(\_:\_:)](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps(\_:\_:)](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.

# IOUSBGetNextAssociatedDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next associated descriptor in a configuration descriptor.

## Declaration

```objectivec
const IOUSBDescriptorHeader *IOUSBGetNextAssociatedDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *parentDescriptor, const IOUSBDescriptorHeader *currentDescriptor);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `parentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md), but returns `nil` if it finds another descriptor with a `bDescriptorType` field that matches the value for `parentDescripto`r’s `bDescriptorType`. Use `nil` for `currentDescriptor` to return the first descriptor after `parentDescriptor`.

## See Also

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.
