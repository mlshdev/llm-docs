> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoiooperationbeginread](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoiooperationbeginread)

# IOUserVideoIOOperationBeginRead

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit 27.0+

This operation is called just prior to reading data from the device’s stream buffers.

## Declaration

```objectivec
constexpr const IOUserVideoIOOperation IOUserVideoIOOperationBeginRead;
```

<a id="discussion"></a>

## Discussion

It is required that this operation is handled if the device has input streams.

## See Also

### Working with I/O operations

- [IOUserVideoIOOperation](iouservideoiooperation.md): The IO operation being called on the operation handler block.
- [IOUserVideoIOOperationWriteEnd](iouservideoiooperationwriteend.md): This operation is called just after writing data to the device’s stream buffers.
- [IOOperationHandler](iooperationhandler.md): A block that tells the device to perform an IOUserVideoIOOperation.
- [IOUserVideoStartStopFlags](iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
