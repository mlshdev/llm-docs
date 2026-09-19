> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/setname

# SetName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetClassID](getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.
- [GetWorkQueue](getworkqueue.md): Beta. Gets the work queue created by the video object.
- [GetName](getname.md): Beta. Gets the name of the driver.
