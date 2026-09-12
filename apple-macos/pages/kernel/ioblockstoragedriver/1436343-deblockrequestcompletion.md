> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1436343-deblockrequestcompletion](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436343-deblockrequestcompletion)

# deblockRequestCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void deblockRequestCompletion(void *target, void *parameter, IOReturn status, UInt64 actualByteCount);
```
