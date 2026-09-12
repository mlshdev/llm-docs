> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809638-startstream](https://developer.apple.com/documentation/kernel/iostream/1809638-startstream)

# startStream

**Interface language:** Objective-C

**Framework:** Kernel

Start sending data on a stream.

## Declaration

```objectivec
virtual IOReturn startStream(
 void); 
```

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the stream was successfully started.

<a id="overview"></a>

## Overview

This must be implemented by a subclass.

## See Also

### Stream control

- [getStreamMode](1809626-getstreammode.md): Returns the mode of the stream, either input or output.
- [setStreamMode](1809631-setstreammode.md): Sets the mode of the stream, either input or output.
- [stopStream](1809642-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809648-suspendstream.md): Temporarily suspend data flow on the stream.
