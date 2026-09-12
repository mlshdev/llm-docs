> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/getname](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getname)

# GetName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the name of the driver.

## Declaration

```objectivec
OSSharedPtr<OSString> GetName();
```

<a id="return-value"></a>

## Return Value

The driver’s name.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Getting information about the class

- [GetClassID](getclassid.md): Gets the class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Video class identifiers of an video object.
- [GetWorkQueue](getworkqueue.md): Gets the work queue created by the video object.
- [SetName](setname.md): Sets the name of the video driver.
