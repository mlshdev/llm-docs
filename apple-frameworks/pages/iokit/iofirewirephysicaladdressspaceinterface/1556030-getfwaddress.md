> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirephysicaladdressspaceinterface/1556030-getfwaddress](https://developer.apple.com/documentation/iokit/iofirewirephysicaladdressspaceinterface/1556030-getfwaddress)

# GetFWAddress

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Get the FireWire address of this address space

## Declaration

```objectivec
void (*GetFWAddress)(IOFireWireLibPhysicalAddressSpaceRef self, FWAddress *outAddr);
```

## Parameters

- `self`: The address space interface to use.

## See Also

### Miscellaneous

- [GetBuffer](1556079-getbuffer.md): Get a pointer to the backing store for this address space
- [GetBufferSize](1556116-getbuffersize.md): Get the size in bytes of this address space.
- [GetPhysicalAddress](1556049-getphysicaladdress.md): Returns the physical address of the beginning of this address space
- [GetPhysicalSegment](1555592-getphysicalsegment.md): Returns the physical segment containing the address at a specified offset from the beginning of this address space
- [GetPhysicalSegments](1555799-getphysicalsegments.md): Returns the list of physical memory ranges this address space occupies on the local machine.
