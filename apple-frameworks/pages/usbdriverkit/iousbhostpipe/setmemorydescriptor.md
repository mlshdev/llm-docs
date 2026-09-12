> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/setmemorydescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/setmemorydescriptor)

# SetMemoryDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
virtual kern_return_t SetMemoryDescriptor(IOMemoryDescriptor *memoryDescriptor, uint32_t index);
```

## Parameters

- `memoryDescriptor`: The memory descriptor associated with the ring index. Must not be NULL.
- `index`: Ring index to be populated

<a id="return-value"></a>

## Return Value

KERN_SUCCESS is successful see IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Add a memory descriptor to the ring.

Caller must fill the ring starting at index 0. The entire ring must be populated up to index size-1
