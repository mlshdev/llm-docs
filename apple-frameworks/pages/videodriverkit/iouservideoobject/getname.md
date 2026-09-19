> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/getname

# GetName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the name of the video object.

## Declaration

```objectivec
OSSharedPtr<OSString> GetName();
```

<a id="return-value"></a>

## Return Value

The video object’s name.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with object names

- [SetName](setname.md): Beta. Sets the name of the video object.
