> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/bufferqueuechange

# BufferQueueChange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
kern_return_t BufferQueueChange(IOUserVideoObjectID in_device_id, uint64_t in_change_action, IOUserVideoObjectID in_stream_id);
```

## See Also

### Working with buffers

- [OutputBufferNotification](outputbuffernotification.md): Beta.
