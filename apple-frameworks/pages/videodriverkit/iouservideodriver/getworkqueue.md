> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getworkqueue

# GetWorkQueue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetClassID](getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.
- [GetName](getname.md): Beta. Gets the name of the driver.
- [SetName](setname.md): Beta. Sets the name of the video driver.
