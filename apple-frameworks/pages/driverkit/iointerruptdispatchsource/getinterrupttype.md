> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iointerruptdispatchsource/getinterrupttype](https://developer.apple.com/documentation/driverkit/iointerruptdispatchsource/getinterrupttype)

# GetInterruptType

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t GetInterruptType(IOService *provider, uint32_t index, uint64_t *interruptType);
```
