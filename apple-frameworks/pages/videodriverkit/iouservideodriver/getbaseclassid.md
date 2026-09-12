> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/getbaseclassid](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getbaseclassid)

# GetBaseClassID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the class identifier of the base class object.

## Declaration

```objectivec
IOUserVideoClassID GetBaseClassID();
```

<a id="return-value"></a>

## Return Value

A video class identifier.

## See Also

### Getting information about the class

- [GetClassID](getclassid.md): Gets the class identifier of the object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Video class identifiers of an video object.
- [GetWorkQueue](getworkqueue.md): Gets the work queue created by the video object.
- [GetName](getname.md): Gets the name of the driver.
- [SetName](setname.md): Sets the name of the video driver.
