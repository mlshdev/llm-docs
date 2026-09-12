> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreaminterface/1579738-getbufferinfo](https://developer.apple.com/documentation/iokit/iostreaminterface/1579738-getbufferinfo)

# GetBufferInfo

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
IOReturn (*GetBufferInfo)(IOStreamRef stream, IOStreamBufferID bufferID, void **dataBufferAddressOut, IOByteCount *dataBufferSizeOut, void **controlBufferAddressOut, IOByteCount *controlBufferSizeOut);
```
