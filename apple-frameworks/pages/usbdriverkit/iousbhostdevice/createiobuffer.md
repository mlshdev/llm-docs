> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/createiobuffer](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/createiobuffer)

# CreateIOBuffer

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Allocates a buffer for use during I/O operations.

## Declaration

```objectivec
virtual kern_return_t CreateIOBuffer(IOOptionBits options, uint64_t capacity, IOBufferMemoryDescriptor **buffer);
```

## Parameters

- `options`: The direction of I/O transfer for the buffer. For a list of possible values, see `Memory Buffer Options`.
- `capacity`: The size of the buffer to allocate in bytes.
- `buffer`: A pointer to a variable. On success, this variable contains a pointer to a memory descriptor. It’s your responsibility to release this memory descriptor when you finish using it. If an error occurs, the method returns NULL instead.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method allocates an [IOBufferMemoryDescriptor](../../driverkit/iobuffermemorydescriptor.md) optimized for use by the underlying controller hardware. A buffer allocated by this method isn’t bounced to perform DMA operations.
