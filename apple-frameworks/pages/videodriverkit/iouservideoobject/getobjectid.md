> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/getobjectid

# GetObjectID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the video object identifier of the object.

## Declaration

```objectivec
IOUserVideoObjectID GetObjectID();
```

<a id="discussion"></a>

## Discussion

This identifier can be used for object lookup with IOUserVideoDriver.

## See Also

### Working with object identifiers

- [IOUserVideoObjectID](../videodriverkit/iouservideoobjectid.md): Beta. A handle for a a specific video object.
