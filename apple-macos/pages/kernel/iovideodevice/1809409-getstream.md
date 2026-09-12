> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideodevice/1809409-getstream](https://developer.apple.com/documentation/kernel/iovideodevice/1809409-getstream)

# getStream

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOVideoStream* getStream(
 UInt32streamIndex); 
```

## Parameters

- `streamIndex`: The index for which the underlying stream is desired.

<a id="return_value"></a>

## Return Value

Returns the number of streams of the device.

## See Also

### Miscellaneous

- [getStreamCount](1809412-getstreamcount.md)
- [newUserClient](1809416-newuserclient.md): See the documentation for the IOService method newUserClient.
- [setStreamMode](1809422-setstreammode.md): Sets the mode of the stream, either input or output.
- [startStream](1809424-startstream.md): Start sending data on a stream.
- [stopStream](1809428-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809431-suspendstream.md): Temporarily suspend data flow on the stream.
