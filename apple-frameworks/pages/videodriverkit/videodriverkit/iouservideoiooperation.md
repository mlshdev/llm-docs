> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoiooperation

# IOUserVideoIOOperation

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 27.0+ beta

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

- [IOUserVideoIOOperationBeginRead](iouservideoiooperationbeginread.md): Beta. This operation is called just prior to reading data from the device’s stream buffers.
- [IOUserVideoIOOperationWriteEnd](iouservideoiooperationwriteend.md): Beta. This operation is called just after writing data to the device’s stream buffers.
- [IOOperationHandler](iooperationhandler.md): Beta. A block that tells the device to perform an IOUserVideoIOOperation.
- [IOUserVideoStartStopFlags](iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.
