> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getname

# GetName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetClassID](getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.
- [GetWorkQueue](getworkqueue.md): Beta. Gets the work queue created by the video object.
- [SetName](setname.md): Beta. Sets the name of the video driver.
