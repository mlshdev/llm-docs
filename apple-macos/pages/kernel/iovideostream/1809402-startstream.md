> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideostream/1809402-startstream](https://developer.apple.com/documentation/kernel/iovideostream/1809402-startstream)

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

## See Also

### Miscellaneous

- [getStreamMode](1809380-getstreammode.md): Returns the mode of the stream, either input or output.
- [initWithBuffers](1809391-initwithbuffers.md)
- [setStreamMode](1809395-setstreammode.md): Sets the mode of the stream, either input or output.
- [stopStream](1809407-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809411-suspendstream.md): Temporarily suspend data flow on the stream.
- [withBuffers](1809420-withbuffers.md)
