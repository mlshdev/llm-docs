> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/3645740-getinterrupttype](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3645740-getinterrupttype)

# GetInterruptType

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 20.0+ · macOS 11.0+

## Declaration

```objectivec
static kern_return_t GetInterruptType(IOService *provider, uint32_t index, uint64_t *interruptType);
```
