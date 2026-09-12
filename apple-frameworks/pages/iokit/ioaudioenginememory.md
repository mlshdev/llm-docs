> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioaudioenginememory](https://developer.apple.com/documentation/iokit/ioaudioenginememory)

# IOAudioEngineMemory

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Used to identify the type of memory requested by a client process to be mapped into its process space

## Declaration

```objectivec
typedef enum _IOAudioEngineMemory : unsigned int {
    ...
} IOAudioEngineMemory;
```

<a id="overview"></a>

## Overview

This is the parameter to the type field of IOMapMemory when called on an IOAudioEngine. This is only intended for use by the Audio Device API library.

## Topics

### Constants

- [kIOAudioSampleBuffer](ioaudioenginememory/kioaudiosamplebuffer.md)
- [kIOAudioStatusBuffer](ioaudioenginememory/kioaudiostatusbuffer.md)
- [kIOAudioMixBuffer](ioaudioenginememory/kioaudiomixbuffer.md)
- [kIOAudioBytesInInputBuffer](ioaudioenginememory/kioaudiobytesininputbuffer.md)
- [kIOAudioBytesInOutputBuffer](ioaudioenginememory/kioaudiobytesinoutputbuffer.md)
