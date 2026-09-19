> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbbosdescriptor/1546040-bnumdevicecaps

# bNumDeviceCaps

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The number of separate device capability descriptors in the binary object store.

## Declaration

```objectivec
uint8_t bNumDeviceCaps;
```

## See Also

### Getting the Properties

- [bLength](1545985-blength.md): The size of the descriptor.
- [bDescriptorType](1546245-bdescriptortype.md): The type of the descriptor.
- [wTotalLength](1546141-wtotallength.md): The length of this descriptor and all of its subdescriptors.
