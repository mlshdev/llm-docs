> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812910-writebytes](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812910-writebytes)

# writeBytes

**Interface language:** Objective-C

**Framework:** Kernel

Copy data to the memory descriptor's buffer from the specified buffer.

## Declaration

```objectivec
virtual IOByteCount writeBytes(
 IOByteCountoffset, 
 const void *bytes,
 IOByteCountwithLength); 
```

## Parameters

- `offset`: A byte offset into the memory descriptor's memory.
- `bytes`: The caller supplied buffer to copy the data from.
- `withLength`: The length of the data to copy.

<a id="return_value"></a>

## Return Value

The number of bytes copied, zero will be returned if the specified offset is beyond the length of the descriptor. Development/debug kernel builds will assert if the offset is beyond the length of the descriptor.

<a id="overview"></a>

## Overview

This method copies data to the memory descriptor's memory at the given offset, from the caller's buffer. The memory descriptor MUST have the kIODirectionIn direcction bit set and be prepared. kIODirectionIn means that this memory descriptor will be input from an external device, so writeBytes is used to write memory into the descriptor for PIO drivers.

## See Also

### Reading and Writing Buffer Data

- [readBytes](1812854-readbytes.md): Copy data from the memory descriptor's buffer to the specified buffer.
- [readBytes](1441823-readbytes.md): Copy data from the memory descriptor's buffer to the specified buffer.
- [writeBytes](1442038-writebytes.md): Copy data to the memory descriptor's buffer from the specified buffer.
