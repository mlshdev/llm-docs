> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostinterface/interfacedescriptor

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
