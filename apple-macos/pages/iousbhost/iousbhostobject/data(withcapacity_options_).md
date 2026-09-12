> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/data(withcapacity:options:)](https://developer.apple.com/documentation/iousbhost/iousbhostobject/data(withcapacity:options:))

# data(withCapacity:options:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 26.4+

## Declaration

```swift
func data(withCapacity capacity: Int, options: IOUSBHostObjectDataOptions = []) throws -> NSMutableData
```

## Parameters

- `capacity`: Size of the buffer to allocate
- `options`: IOUSBHostObjectDataOptions. Default value is IOUSBHostObjectDataOptionsNone.

<a id="return-value"></a>

## Return Value

NSMutableData of memory mapped to user space of an IOBufferMemoryDescriptor if successful, otherwise nil. An IOReturn error code will be reported on failure. The result is to be released by the caller

<a id="discussion"></a>

## Discussion

Allocate a buffer to be used for I/O or an isochronous frame list.

This method will allocate and map an IOBufferMemoryDescriptor optimized for use by the underlying controller hardware. A buffer allocated by this method will not be bounced to perform DMA operations. Because the NSMutableData is backed by kernel memory, the length and capacity are not mutable. Any changes to the length or capacity will cause an exception to be thrown.

# dataWithCapacity:options:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 26.4+

## Declaration

```objectivec
- (NSMutableData *) dataWithCapacity:(NSUInteger) capacity options:(IOUSBHostObjectDataOptions) options error:(NSError **) error;
```

## Parameters

- `capacity`: Size of the buffer to allocate
- `options`: IOUSBHostObjectDataOptions. Default value is IOUSBHostObjectDataOptionsNone.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

NSMutableData of memory mapped to user space of an IOBufferMemoryDescriptor if successful, otherwise nil. An IOReturn error code will be reported on failure. The result is to be released by the caller

<a id="discussion"></a>

## Discussion

Allocate a buffer to be used for I/O or an isochronous frame list.

This method will allocate and map an IOBufferMemoryDescriptor optimized for use by the underlying controller hardware. A buffer allocated by this method will not be bounced to perform DMA operations. Because the NSMutableData is backed by kernel memory, the length and capacity are not mutable. Any changes to the length or capacity will cause an exception to be thrown.
