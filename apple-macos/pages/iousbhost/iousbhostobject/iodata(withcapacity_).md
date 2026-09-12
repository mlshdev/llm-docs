> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/iodata(withcapacity:)](https://developer.apple.com/documentation/iousbhost/iousbhostobject/iodata(withcapacity:))

# ioData(withCapacity:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Allocates a buffer for input/output requests.

## Declaration

```swift
func ioData(withCapacity capacity: Int) throws -> NSMutableData
```

## Parameters

- `capacity`: The size, in bytes, of the buffer to allocate.

<a id="return-value"></a>

## Return Value

A pointer to an allocated buffer.

<a id="Discussion"></a>

## Discussion

This method allocates and maps a kernel buffer that the underlying controller hardware has optimized. Using this method, the buffer doesn’t bounce to perform DMA operations.

> **Important**

>  Because the kernel backs the [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object, the length and capacity aren’t mutable. Any changes to the length or capacity throws an exception.

# ioDataWithCapacity:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Allocates a buffer for input/output requests.

## Declaration

```objectivec
- (NSMutableData *) ioDataWithCapacity:(NSUInteger) capacity error:(NSError **) error;
```

## Parameters

- `capacity`: The size, in bytes, of the buffer to allocate.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

A pointer to an allocated buffer. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

This method allocates and maps a kernel buffer that the underlying controller hardware has optimized. Using this method, the buffer doesn’t bounce to perform DMA operations.

> **Important**

>  Because the kernel backs the [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object, the length and capacity aren’t mutable. Any changes to the length or capacity throws an exception.
