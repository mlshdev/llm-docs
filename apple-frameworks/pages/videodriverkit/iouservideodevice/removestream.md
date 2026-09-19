> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/removestream

# RemoveStream

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Removes a video stream from the device.

## Declaration

```objectivec
kern_return_t RemoveStream(IOUserVideoStream *in_stream);
```

## Parameters

- `in_stream`: IOUserVideoStream to remove from the device.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if stream was successfully removed.

<a id="discussion"></a>

## Discussion

The stream’s reference count will be decremented if it was successfully removed.

## See Also

### Working with video streams

- [AddStream](addstream.md): Beta. Adds an video stream to the device.
- [IOUserVideoStream](../iouservideostream.md): Beta. A video stream.
