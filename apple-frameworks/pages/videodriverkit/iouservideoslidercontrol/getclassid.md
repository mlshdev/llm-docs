> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/getclassid

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

<a id="discussion"></a>

## Discussion

This method overrides the base class’s implementation.

## See Also

### Getting information about the class

- [GetBaseClassID](getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](../videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.
