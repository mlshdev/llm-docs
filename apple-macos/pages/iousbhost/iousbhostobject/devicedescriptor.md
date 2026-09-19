> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostobject/devicedescriptor

# deviceDescriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
var deviceDescriptor: UnsafePointer<IOUSBDeviceDescriptor>? { get }
```

## See Also

### Instance Properties

- [capabilityDescriptors](capabilitydescriptors.md)

# deviceDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@property (readonly, nullable) const IOUSBDeviceDescriptor * deviceDescriptor;
```

## See Also

### Instance Properties

- [capabilityDescriptors](capabilitydescriptors.md)
