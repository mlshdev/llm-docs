> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/outputbuffernotification](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/outputbuffernotification)

# OutputBufferNotification

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

## Declaration

```objectivec
kern_return_t OutputBufferNotification(IOUserVideoObjectID in_device_id, uint64_t in_change_action, IOUserVideoObjectID in_stream_id);
```

## See Also

### Working with buffers

- [BufferQueueChange](bufferqueuechange.md)
