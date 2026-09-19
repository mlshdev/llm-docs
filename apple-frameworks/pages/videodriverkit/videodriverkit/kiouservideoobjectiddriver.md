> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/kiouservideoobjectiddriver

# kIOUserVideoObjectIDDriver

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit 27.0+ beta

The video object identifier of the driver.

## Declaration

```objectivec
constexpr const IOUserVideoObjectID kIOUserVideoObjectIDDriver;
```

<a id="discussion"></a>

## Discussion

This video object ID always refers to the one and only instance of the `IOUserVideoDriver` class.
