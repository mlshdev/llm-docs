> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/3645741-getinterrupttype_impl](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3645741-getinterrupttype_impl)

# GetInterruptType_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t GetInterruptType_Impl(IOService *provider, uint32_t index, uint64_t *interruptType);
```
