> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1441916-getphysicaladdress](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1441916-getphysicaladdress)

# getPhysicalAddress

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Return the physical address of the first byte in the memory.

## Declaration

```objectivec
IOPhysicalAddress getPhysicalAddress(void);
```

<a id="return_value"></a>

## Return Value

A physical address.

<a id="discussion"></a>

## Discussion

This method returns the physical address of the first byte in the memory. It is most useful on memory known to be physically contiguous.

## See Also

### Getting the Memory Pages

- [getPageCounts](1812787-getpagecounts.md): Retrieve the number of resident and/or dirty pages encompassed by a memory descriptor.
- [getPageCounts](1441992-getpagecounts.md): Retrieve the number of resident and/or dirty pages encompassed by a memory descriptor.
- [getPhysicalAddress](1812795-getphysicaladdress.md): Return the physical address of the first byte in the memory.
- [getPhysicalSegment](1812807-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
- [getPhysicalSegment](1442068-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
