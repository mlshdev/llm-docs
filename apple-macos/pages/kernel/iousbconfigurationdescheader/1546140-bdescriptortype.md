> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbconfigurationdescheader/1546140-bdescriptortype

# bDescriptorType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.1+

The type of the descriptor.

## Declaration

```objectivec
uint8_t bDescriptorType;
```

## See Also

### Getting the Properties

- [bLength](1546382-blength.md): The size of the descriptor.
- [wTotalLength](1546394-wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.
