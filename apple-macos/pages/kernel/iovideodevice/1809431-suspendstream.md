> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideodevice/1809431-suspendstream](https://developer.apple.com/documentation/kernel/iovideodevice/1809431-suspendstream)

# suspendStream

**Interface language:** Objective-C

**Framework:** Kernel

Temporarily suspend data flow on the stream.

## Declaration

```objectivec
virtual IOReturn suspendStream(
 IOVideoStream *stream); 
```

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the stream was successfully suspended.

<a id="overview"></a>

## Overview

This must be implemented by a subclass.

## See Also

### Miscellaneous

- [getStream](1809409-getstream.md)
- [getStreamCount](1809412-getstreamcount.md)
- [newUserClient](1809416-newuserclient.md): See the documentation for the IOService method newUserClient.
- [setStreamMode](1809422-setstreammode.md): Sets the mode of the stream, either input or output.
- [startStream](1809424-startstream.md): Start sending data on a stream.
- [stopStream](1809428-stopstream.md): Stop sending data on a stream.
