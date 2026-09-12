> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideodeviceinterface_v1_t/1385566-createstreaminterface](https://developer.apple.com/documentation/iokit/iovideodeviceinterface_v1_t/1385566-createstreaminterface)

# CreateStreamInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
IOReturn (*CreateStreamInterface)(IOVideoDeviceRef device, CFDictionaryRef streamDictionary, UInt32 streamIndex, bool isInput, IOStreamRef *streamRef);
```
