> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideostream/1809395-setstreammode](https://developer.apple.com/documentation/kernel/iovideostream/1809395-setstreammode)

# setStreamMode

**Interface language:** Objective-C

**Framework:** Kernel

Sets the mode of the stream, either input or output.

## Declaration

```objectivec
virtual IOReturn setStreamMode(
 IOStreamMode mode); 
```

## See Also

### Miscellaneous

- [getStreamMode](1809380-getstreammode.md): Returns the mode of the stream, either input or output.
- [initWithBuffers](1809391-initwithbuffers.md)
- [startStream](1809402-startstream.md): Start sending data on a stream.
- [stopStream](1809407-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809411-suspendstream.md): Temporarily suspend data flow on the stream.
- [withBuffers](1809420-withbuffers.md)
