> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioframebuffer/1397592-setbackingframebuffer](https://developer.apple.com/documentation/kernel/ioframebuffer/1397592-setbackingframebuffer)

# setBackingFramebuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn setBackingFramebuffer(const IOPixelInformation *info, uint32_t bufferCount, void *mappedAddress[]);
```
