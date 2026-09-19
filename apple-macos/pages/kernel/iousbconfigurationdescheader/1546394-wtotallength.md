> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbconfigurationdescheader/1546394-wtotallength

# wTotalLength

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.1+

The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.

## Declaration

```objectivec
uint16_t wTotalLength;
```

## See Also

### Getting the Properties

- [bLength](1546382-blength.md): The size of the descriptor.
- [bDescriptorType](1546140-bdescriptortype.md): The type of the descriptor.
