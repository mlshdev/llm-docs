> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/setname](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/setname)

# SetName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the name of the video driver.

## Declaration

```objectivec
kern_return_t SetName(OSString *in_name);
```

## Parameters

- `in_name`: An OSString name to set.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating success or failure.

<a id="discussion"></a>

## Discussion

If the object can change the name dynamically, the object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to this value.

## See Also

### Getting information about the class

- [GetClassID](getclassid.md): Gets the class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Video class identifiers of an video object.
- [GetWorkQueue](getworkqueue.md): Gets the work queue created by the video object.
- [GetName](getname.md): Gets the name of the driver.
