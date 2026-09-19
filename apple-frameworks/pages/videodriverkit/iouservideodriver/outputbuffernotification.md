> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/outputbuffernotification

# OutputBufferNotification

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
kern_return_t OutputBufferNotification(IOUserVideoObjectID in_device_id, uint64_t in_change_action, IOUserVideoObjectID in_stream_id);
```

## See Also

### Working with buffers

- [BufferQueueChange](bufferqueuechange.md): Beta.
