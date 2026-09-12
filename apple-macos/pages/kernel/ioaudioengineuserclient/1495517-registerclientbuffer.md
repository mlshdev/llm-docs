> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengineuserclient/1495517-registerclientbuffer](https://developer.apple.com/documentation/kernel/ioaudioengineuserclient/1495517-registerclientbuffer)

# registerClientBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn registerClientBuffer(IOAudioStream *audioStream, void *sourceBuffer, UInt32 bufSizeInBytes, UInt32 bufferSetID);
```
