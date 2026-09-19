> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/init-5dkv4

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_video_driver);
```

## Parameters

- `in_video_driver`: The IOUserVideoDriver that owns this object.

<a id="return-value"></a>

## Return Value

True on success.

<a id="discussion"></a>

## Discussion

Initializes a IOUserVideoObject.

Always pass in the IOUserVideoDriver.  init() will always return false;

## See Also

### Creating a video object

- [init](init-853a8.md): Beta.
