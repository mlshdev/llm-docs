> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideostream/1809411-suspendstream](https://developer.apple.com/documentation/kernel/iovideostream/1809411-suspendstream)

# suspendStream

**Interface language:** Objective-C

**Framework:** Kernel

Temporarily suspend data flow on the stream.

## Declaration

```objectivec
virtual IOReturn suspendStream(
 void); 
```

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the stream was successfully suspended.

## See Also

### Miscellaneous

- [getStreamMode](1809380-getstreammode.md): Returns the mode of the stream, either input or output.
- [initWithBuffers](1809391-initwithbuffers.md)
- [setStreamMode](1809395-setstreammode.md): Sets the mode of the stream, either input or output.
- [startStream](1809402-startstream.md): Start sending data on a stream.
- [stopStream](1809407-stopstream.md): Stop sending data on a stream.
- [withBuffers](1809420-withbuffers.md)
