> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/creatememorydescriptorring](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/creatememorydescriptorring)

# CreateMemoryDescriptorRing

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
virtual kern_return_t CreateMemoryDescriptorRing(uint32_t size);
```

## Parameters

- `size`: Size of the ring.

<a id="return-value"></a>

## Return Value

KERN_SUCCESS is successful see IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Create a memory descriptor ring to use with AsyncIOBundled().

The ring size should be large enough to hold all the memory descriptors to be used with the pipe. The ring must only be created once, and will be freed by the kernel driver when the pipe is destroyed.
