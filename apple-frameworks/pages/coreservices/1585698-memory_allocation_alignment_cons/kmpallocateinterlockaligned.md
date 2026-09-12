> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585698-memory_allocation_alignment_cons/kmpallocateinterlockaligned](https://developer.apple.com/documentation/coreservices/1585698-memory_allocation_alignment_cons/kmpallocateinterlockaligned)

# kMPAllocateInterlockAligned

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
kMPAllocateInterlockAligned = 255
```

<a id="discussion"></a>

## Discussion

Use interlock alignment, which is the alignment needed to allow the use of CPU interlock instructions (that is, `lwarx` and `stwcx`.) on the returned memory address. This alignment is set at runtime. In most cases you would never need to use this alignment.
