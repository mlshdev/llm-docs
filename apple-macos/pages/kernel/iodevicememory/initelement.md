> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodevicememory/initelement](https://developer.apple.com/documentation/kernel/iodevicememory/initelement)

# InitElement

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
struct InitElement {
   IOPhysicalAddress start;
   IOPhysicalLength length;
   IOOptionBits tag;
};
```

## Topics

### Fields

- [start](initelement/start.md): First physical address in the range.
- [length](initelement/length.md): Length of the range.
- [tag](initelement/tag.md): 32-bit value not interpreted by IODeviceMemory or IOMemoryDescriptor, for use by the bus family.
