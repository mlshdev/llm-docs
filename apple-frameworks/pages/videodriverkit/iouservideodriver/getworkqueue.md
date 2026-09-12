> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/getworkqueue](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getworkqueue)

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

The work queue is used to synchronize access to the driver’s state. Setters and Getters for the driver will be done on the work queue.

## See Also

### Getting information about the class

- [GetClassID](getclassid.md): Gets the class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Video class identifiers of an video object.
- [GetName](getname.md): Gets the name of the driver.
- [SetName](setname.md): Sets the name of the video driver.
