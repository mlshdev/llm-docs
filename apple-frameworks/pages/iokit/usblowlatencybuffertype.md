> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usblowlatencybuffertype

# USBLowLatencyBufferType

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

## Declaration

```objectivec
typedef enum USBLowLatencyBufferType : unsigned int {
    ...
} USBLowLatencyBufferType;
```

<a id="overview"></a>

## Overview

Used to specify what kind of buffer to create when calling LowLatencyCreateBuffer().

## Topics

### Constants

- [kUSBLowLatencyWriteBuffer](usblowlatencybuffertype/kusblowlatencywritebuffer.md)
- [kUSBLowLatencyReadBuffer](usblowlatencybuffertype/kusblowlatencyreadbuffer.md)
- [kUSBLowLatencyFrameListBuffer](usblowlatencybuffertype/kusblowlatencyframelistbuffer.md)
