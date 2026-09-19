> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/isprotected

# IsProtected

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

A Boolean value indicating if box is protected.

## Declaration

```objectivec
bool IsProtected();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Managing protection state

- [SetIsProtected](setisprotected.md): Beta. Sets the value indicating the box’s protection state.
