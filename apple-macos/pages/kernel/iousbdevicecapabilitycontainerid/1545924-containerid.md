> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicecapabilitycontainerid/1545924-containerid](https://developer.apple.com/documentation/kernel/iousbdevicecapabilitycontainerid/1545924-containerid)

# containerID

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A number that uniquely identifies the device instance across all modes of operation.

## Declaration

```objectivec
uint8_t containerID[16];
```

## See Also

### Getting the Properties

- [bLength](1546211-blength.md): The size of the descriptor.
- [bDescriptorType](1546207-bdescriptortype.md): The type of the descriptor.
- [bDevCapabilityType](1546363-bdevcapabilitytype.md): The device capability type.
- [bReservedID](1546323-breservedid.md): Reserved for future use.
