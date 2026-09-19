> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getbaseclassid

# GetBaseClassID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetClassID](getclassid.md): Beta. Gets the class identifier of the object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.
- [GetWorkQueue](getworkqueue.md): Beta. Gets the work queue created by the video object.
- [GetName](getname.md): Beta. Gets the name of the driver.
- [SetName](setname.md): Beta. Sets the name of the video driver.
