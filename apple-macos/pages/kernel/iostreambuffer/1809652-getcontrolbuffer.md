> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostreambuffer/1809652-getcontrolbuffer](https://developer.apple.com/documentation/kernel/iostreambuffer/1809652-getcontrolbuffer)

# getControlBuffer

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOMemoryDescriptor *getControlBuffer(
 void); 
```

<a id="return_value"></a>

## Return Value

A pointer to the IOMemoryDescriptor for the control buffer.

## See Also

### Miscellaneous

- [getBufferID](1809634-getbufferid.md): Gets the buffer identifier for the IOStreamBuffer object.
- [getClientReferenceCount](1809644-getclientreferencecount.md)
- [getDataBuffer](1809666-getdatabuffer.md)
- [initWithMemoryDescriptors](1809676-initwithmemorydescriptors.md)
- [receiveClientReference](1809687-receiveclientreference.md)
- [sendClientReference](1809696-sendclientreference.md)
- [setBufferID](1809706-setbufferid.md): Sets the buffer identifier for the IOStreamBuffer object.
- [setControlBuffer](1809716-setcontrolbuffer.md): Sets the control buffer for the IOStreamBuffer object.
- [setDataBuffer](1809732-setdatabuffer.md): Sets the data buffer for the IOStreamBuffer object.
- [withMemoryDescriptors](1809743-withmemorydescriptors.md)
