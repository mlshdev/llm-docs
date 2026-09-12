> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/removestream](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/removestream)

# RemoveStream

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [AddStream](addstream.md): Adds an video stream to the device.
- [IOUserVideoStream](../iouservideostream.md): A video stream.
