> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirephysicaladdressspaceinterface/1555592-getphysicalsegment](https://developer.apple.com/documentation/iokit/iofirewirephysicaladdressspaceinterface/1555592-getphysicalsegment)

# GetPhysicalSegment

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the physical segment containing the address at a specified offset from the beginning of this address space

## Declaration

```objectivec
IOPhysicalAddress (*GetPhysicalSegment)(IOFireWireLibPhysicalAddressSpaceRef self, IOByteCount offset, IOByteCount *length);
```

## Parameters

- `self`: The address space interface to use.
- `offset`: Offset from beginning of address space
- `length`: Pointer to a value which upon completion will contain the length of the segment returned by the function.

<a id="return_value"></a>

## Return Value

The address of the physical segment containing the address at the specified offset of the address space

## See Also

### Miscellaneous

- [GetBuffer](1556079-getbuffer.md): Get a pointer to the backing store for this address space
- [GetBufferSize](1556116-getbuffersize.md): Get the size in bytes of this address space.
- [GetFWAddress](1556030-getfwaddress.md): Get the FireWire address of this address space
- [GetPhysicalAddress](1556049-getphysicaladdress.md): Returns the physical address of the beginning of this address space
- [GetPhysicalSegments](1555799-getphysicalsegments.md): Returns the list of physical memory ranges this address space occupies on the local machine.
