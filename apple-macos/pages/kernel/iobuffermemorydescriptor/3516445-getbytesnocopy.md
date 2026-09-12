> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/3516445-getbytesnocopy](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/3516445-getbytesnocopy)

# getBytesNoCopy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

Returns the virtual address of an offset into the memory buffer.

## Declaration

```objectivec
virtual void * getBytesNoCopy(vm_size_t start, vm_size_t withLength);
```

## Parameters

- `start`: The offset from the beginning of the memory buffer.
- `withLength`: The number of bytes you want.

<a id="return_value"></a>

## Return Value

The address at the specified offset into the bufer, or `NULL` if the offset and length yield an invalid address range.

## See Also

### Getting the Buffer Contents

- [getBytesNoCopy](1574840-getbytesnocopy.md): Returns the virtual address of the beginning of the memory buffer.
