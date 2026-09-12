> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideodevice/1809416-newuserclient](https://developer.apple.com/documentation/kernel/iovideodevice/1809416-newuserclient)

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel

See the documentation for the IOService method newUserClient.

## Declaration

```objectivec
virtual IOReturn newUserClient(
 task_t owningTask,
 void *securityID,
 UInt32 type,
 OSDictionary *properties,
 IOUserClient **handler); 
```

## See Also

### Miscellaneous

- [getStream](1809409-getstream.md)
- [getStreamCount](1809412-getstreamcount.md)
- [setStreamMode](1809422-setstreammode.md): Sets the mode of the stream, either input or output.
- [startStream](1809424-startstream.md): Start sending data on a stream.
- [stopStream](1809428-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809431-suspendstream.md): Temporarily suspend data flow on the stream.
