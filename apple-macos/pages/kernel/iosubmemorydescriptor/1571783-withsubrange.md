> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iosubmemorydescriptor/1571783-withsubrange](https://developer.apple.com/documentation/kernel/iosubmemorydescriptor/1571783-withsubrange)

# withSubRange

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOSubMemoryDescriptor> withSubRange(IOMemoryDescriptor *of, IOByteCount offset, IOByteCount length, IOOptionBits options);
```
