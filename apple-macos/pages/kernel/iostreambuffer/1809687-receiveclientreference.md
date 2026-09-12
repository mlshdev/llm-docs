> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostreambuffer/1809687-receiveclientreference](https://developer.apple.com/documentation/kernel/iostreambuffer/1809687-receiveclientreference)

# receiveClientReference

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual SInt32 receiveClientReference(
 IOByteCount offset = 0,
 IOByteCount length = 0 ); 
```

## Parameters

- `offset`: The offset in the buffer of the data from the client.
- `length`: The length of the data from the client.

## See Also

### Miscellaneous

- [getBufferID](1809634-getbufferid.md): Gets the buffer identifier for the IOStreamBuffer object.
- [getClientReferenceCount](1809644-getclientreferencecount.md)
- [getControlBuffer](1809652-getcontrolbuffer.md)
- [getDataBuffer](1809666-getdatabuffer.md)
- [initWithMemoryDescriptors](1809676-initwithmemorydescriptors.md)
- [sendClientReference](1809696-sendclientreference.md)
- [setBufferID](1809706-setbufferid.md): Sets the buffer identifier for the IOStreamBuffer object.
- [setControlBuffer](1809716-setcontrolbuffer.md): Sets the control buffer for the IOStreamBuffer object.
- [setDataBuffer](1809732-setdatabuffer.md): Sets the data buffer for the IOStreamBuffer object.
- [withMemoryDescriptors](1809743-withmemorydescriptors.md)
