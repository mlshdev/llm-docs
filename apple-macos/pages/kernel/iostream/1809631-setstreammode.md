> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809631-setstreammode](https://developer.apple.com/documentation/kernel/iostream/1809631-setstreammode)

# setStreamMode

**Interface language:** Objective-C

**Framework:** Kernel

Sets the mode of the stream, either input or output.

## Declaration

```objectivec
virtual IOReturn setStreamMode(
 IOStreamMode mode); 
```

<a id="overview"></a>

## Overview

Subclasses may define whether it is possible to change the mode of a stream.

## See Also

### Stream control

- [getStreamMode](1809626-getstreammode.md): Returns the mode of the stream, either input or output.
- [startStream](1809638-startstream.md): Start sending data on a stream.
- [stopStream](1809642-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809648-suspendstream.md): Temporarily suspend data flow on the stream.
