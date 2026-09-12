> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iosubmemorydescriptor/1810054-withsubrange](https://developer.apple.com/documentation/kernel/iosubmemorydescriptor/1810054-withsubrange)

# withSubRange

**Interface language:** Objective-C

**Framework:** Kernel

Create an IOMemoryDescriptor to describe a subrange of an existing descriptor.

## Declaration

```objectivec
static IOSubMemoryDescriptor * withSubRange(
 IOMemoryDescriptor *of, 
 IOByteCountoffset, 
 IOByteCountlength, 
 IOOptionBitsoptions); 
```

## Parameters

- `of`: The parent IOMemoryDescriptor of which a subrange is to be used for the new descriptor, which will be retained by the subrange IOMemoryDescriptor.
- `offset`: A byte offset into the parent memory descriptor's memory.
- `length`: The length of the subrange.
- `options`: kIOMemoryDirectionMask (options:direction) This nibble indicates the I/O direction to be associated with the descriptor, which may affect the operation of the prepare and complete methods on some architectures.

<a id="return_value"></a>

## Return Value

The created IOMemoryDescriptor on success, to be released by the caller, or zero on failure.

<a id="overview"></a>

## Overview

This method creates and initializes an IOMemoryDescriptor for memory consisting of a subrange of the specified memory descriptor. The parent memory descriptor is retained by the new descriptor.
