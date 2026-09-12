> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterface/interfacedescriptor](https://developer.apple.com/documentation/iousbhost/iousbhostinterface/interfacedescriptor)

# interfaceDescriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for the interface.

## Declaration

```swift
var interfaceDescriptor: UnsafePointer<IOUSBInterfaceDescriptor> { get }
```

<a id="return-value"></a>

## Return Value

A pointer to the interface’s descriptor.

## See Also

### Retrieving Function Descriptors

- [configurationDescriptor](configurationdescriptor.md): The configuration descriptor for the interface.

# interfaceDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for the interface.

## Declaration

```objectivec
@property (readonly) const IOUSBInterfaceDescriptor * interfaceDescriptor;
```

<a id="return-value"></a>

## Return Value

A pointer to the interface’s descriptor.

## See Also

### Retrieving Function Descriptors

- [configurationDescriptor](configurationdescriptor.md): The configuration descriptor for the interface.
