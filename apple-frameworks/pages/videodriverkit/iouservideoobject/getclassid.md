> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/getclassid

# GetClassID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the class identifier of the object.

## Declaration

```objectivec
virtual IOUserVideoClassID GetClassID();
```

<a id="return-value"></a>

## Return Value

A video class identifier.

## See Also

### Getting information about the class

- [GetBaseClassID](getbaseclassid.md): Beta. Gets the class identifier of the object’s base class.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.
