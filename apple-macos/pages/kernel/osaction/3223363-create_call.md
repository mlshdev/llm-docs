> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osaction/3223363-create_call](https://developer.apple.com/documentation/kernel/osaction/3223363-create_call)

# Create_Call

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Create_Call(OSObject *target, uint64_t targetmsgid, uint64_t msgid, size_t referenceSize, OSAction **action);
```
