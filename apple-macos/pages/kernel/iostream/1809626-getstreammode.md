> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809626-getstreammode](https://developer.apple.com/documentation/kernel/iostream/1809626-getstreammode)

# getStreamMode

**Interface language:** Objective-C

**Framework:** Kernel

Returns the mode of the stream, either input or output.

## Declaration

```objectivec
virtual IOStreamMode getStreamMode(
 void); 
```

<a id="return_value"></a>

## Return Value

The mode of the stream, either kIOStreamModeInput (from user space to kernel space) or the default kIOStreamModeOutput (from kernel space to user space).

## See Also

### Stream control

- [setStreamMode](1809631-setstreammode.md): Sets the mode of the stream, either input or output.
- [startStream](1809638-startstream.md): Start sending data on a stream.
- [stopStream](1809642-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809648-suspendstream.md): Temporarily suspend data flow on the stream.
