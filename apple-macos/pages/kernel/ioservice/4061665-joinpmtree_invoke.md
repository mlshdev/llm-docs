> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/4061665-joinpmtree_invoke](https://developer.apple.com/documentation/kernel/ioservice/4061665-joinpmtree_invoke)

# JoinPMTree_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
static kern_return_t JoinPMTree_Invoke(const IORPC rpc, OSMetaClassBase *target, JoinPMTree_Handler func);
```
