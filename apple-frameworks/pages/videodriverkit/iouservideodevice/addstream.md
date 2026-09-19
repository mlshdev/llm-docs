> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/addstream

# AddStream

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Adds an video stream to the device.

## Declaration

```objectivec
kern_return_t AddStream(IOUserVideoStream *in_stream);
```

## Parameters

- `in_stream`: IOUserVideoStream to add to the device.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if stream was successfully added.

<a id="discussion"></a>

## Discussion

The stream’s reference count will be incremented if it was successfully added.

## See Also

### Working with video streams

- [RemoveStream](removestream.md): Beta. Removes a video stream from the device.
- [IOUserVideoStream](../iouservideostream.md): Beta. A video stream.
