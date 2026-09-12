> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirephysicaladdressspaceinterface/1556079-getbuffer](https://developer.apple.com/documentation/iokit/iofirewirephysicaladdressspaceinterface/1556079-getbuffer)

# GetBuffer

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Get a pointer to the backing store for this address space

## Declaration

```objectivec
void *(*GetBuffer)(IOFireWireLibPhysicalAddressSpaceRef self);
```

## Parameters

- `self`: The address space interface to use.

<a id="return_value"></a>

## Return Value

A pointer to the backing store of this address space.

## See Also

### Miscellaneous

- [GetBufferSize](1556116-getbuffersize.md): Get the size in bytes of this address space.
- [GetFWAddress](1556030-getfwaddress.md): Get the FireWire address of this address space
- [GetPhysicalAddress](1556049-getphysicaladdress.md): Returns the physical address of the beginning of this address space
- [GetPhysicalSegment](1555592-getphysicalsegment.md): Returns the physical segment containing the address at a specified offset from the beginning of this address space
- [GetPhysicalSegments](1555799-getphysicalsegments.md): Returns the list of physical memory ranges this address space occupies on the local machine.
