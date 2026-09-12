> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoiooperation](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoiooperation)

# IOUserVideoIOOperation

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 27.0+

The IO operation being called on the operation handler block.

## Declaration

```objectivec
typedef uint32_t IOUserVideoIOOperation;
```

<a id="discussion"></a>

## Discussion

This value is used with [IOOperationHandler](iooperationhandler.md).

## See Also

### Working with I/O operations

- [IOUserVideoIOOperationBeginRead](iouservideoiooperationbeginread.md): This operation is called just prior to reading data from the device’s stream buffers.
- [IOUserVideoIOOperationWriteEnd](iouservideoiooperationwriteend.md): This operation is called just after writing data to the device’s stream buffers.
- [IOOperationHandler](iooperationhandler.md): A block that tells the device to perform an IOUserVideoIOOperation.
- [IOUserVideoStartStopFlags](iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
