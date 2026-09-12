> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/getworkqueue](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/getworkqueue)

# GetWorkQueue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the work queue created by the video object.

## Declaration

```objectivec
OSSharedPtr<IODispatchQueue> GetWorkQueue();
```

<a id="return-value"></a>

## Return Value

An OSSharedPtr to an IODispatchQueue on success

<a id="discussion"></a>

## Discussion

The work queue is used to synchronize access to the object’s state. Setters and Getters for the object will be done on the work queue.
