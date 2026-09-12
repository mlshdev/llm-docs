> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterface/configurationdescriptor](https://developer.apple.com/documentation/iousbhost/iousbhostinterface/configurationdescriptor)

# configurationDescriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The configuration descriptor for the interface.

## Declaration

```swift
var configurationDescriptor: UnsafePointer<IOUSBConfigurationDescriptor> { get }
```

<a id="return-value"></a>

## Return Value

A pointer to the device’s configuration descriptor.

## See Also

### Retrieving Function Descriptors

- [interfaceDescriptor](interfacedescriptor.md): The descriptor for the interface.

# configurationDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The configuration descriptor for the interface.

## Declaration

```objectivec
@property (readonly) const IOUSBConfigurationDescriptor * configurationDescriptor;
```

<a id="return-value"></a>

## Return Value

A pointer to the device’s configuration descriptor.

## See Also

### Retrieving Function Descriptors

- [interfaceDescriptor](interfacedescriptor.md): The descriptor for the interface.
