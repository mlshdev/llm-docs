> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585698-memory_allocation_alignment_cons](https://developer.apple.com/documentation/coreservices/1585698-memory_allocation_alignment_cons)

# Memory Allocation Alignment Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Specify the alignment of the desired memory block when calling the `MPAllocateAligned` function.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPAllocateDefaultAligned](1585698-memory_allocation_alignment_cons/kmpallocatedefaultaligned.md): Deprecated. Use the default alignment.
- [kMPAllocate8ByteAligned](1585698-memory_allocation_alignment_cons/kmpallocate8bytealigned.md): Deprecated. Use 8-byte alignment.
- [kMPAllocate16ByteAligned](1585698-memory_allocation_alignment_cons/kmpallocate16bytealigned.md): Deprecated. Use 16-byte alignment.
- [kMPAllocate32ByteAligned](1585698-memory_allocation_alignment_cons/kmpallocate32bytealigned.md): Deprecated. Use 32-byte alignment.
- [kMPAllocate1024ByteAligned](1585698-memory_allocation_alignment_cons/kmpallocate1024bytealigned.md): Deprecated. Use 1024-byte alignment.
- [kMPAllocate4096ByteAligned](1585698-memory_allocation_alignment_cons/kmpallocate4096bytealigned.md): Deprecated. Use 4096-byte alignment.
- [kMPAllocateMaxAlignment](1585698-memory_allocation_alignment_cons/kmpallocatemaxalignment.md): Deprecated. Use the maximum alignment (65536 byte).
- [kMPAllocateAltiVecAligned](1585698-memory_allocation_alignment_cons/kmpallocatealtivecaligned.md): Deprecated. Use AltiVec alignment.
- [kMPAllocateVMXAligned](1585698-memory_allocation_alignment_cons/kmpallocatevmxaligned.md): Deprecated. Use VMX (now called AltiVec) alignment.
- [kMPAllocateVMPageAligned](1585698-memory_allocation_alignment_cons/kmpallocatevmpagealigned.md): Deprecated. Use virtual memory page alignment. This alignment is set at runtime.
- [kMPAllocateInterlockAligned](1585698-memory_allocation_alignment_cons/kmpallocateinterlockaligned.md): Deprecated.
