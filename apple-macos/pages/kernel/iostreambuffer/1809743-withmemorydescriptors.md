> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostreambuffer/1809743-withmemorydescriptors](https://developer.apple.com/documentation/kernel/iostreambuffer/1809743-withmemorydescriptors)

# withMemoryDescriptors

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
static IOStreamBuffer *withMemoryDescriptors(
 IOMemoryDescriptor *dataBuffer, 
 IOMemoryDescriptor *controlBuffer, 
 IOStreamBufferID bufferID = 0); 
```

## See Also

### Miscellaneous

- [getBufferID](1809634-getbufferid.md): Gets the buffer identifier for the IOStreamBuffer object.
- [getClientReferenceCount](1809644-getclientreferencecount.md)
- [getControlBuffer](1809652-getcontrolbuffer.md)
- [getDataBuffer](1809666-getdatabuffer.md)
- [initWithMemoryDescriptors](1809676-initwithmemorydescriptors.md)
- [receiveClientReference](1809687-receiveclientreference.md)
- [sendClientReference](1809696-sendclientreference.md)
- [setBufferID](1809706-setbufferid.md): Sets the buffer identifier for the IOStreamBuffer object.
- [setControlBuffer](1809716-setcontrolbuffer.md): Sets the control buffer for the IOStreamBuffer object.
- [setDataBuffer](1809732-setdatabuffer.md): Sets the data buffer for the IOStreamBuffer object.
