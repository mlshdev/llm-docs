> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/kiouservideoobjectiddriver](https://developer.apple.com/documentation/videodriverkit/videodriverkit/kiouservideoobjectiddriver)

# kIOUserVideoObjectIDDriver

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit 27.0+

The video object identifier of the driver.

## Declaration

```objectivec
constexpr const IOUserVideoObjectID kIOUserVideoObjectIDDriver;
```

<a id="discussion"></a>

## Discussion

This video object ID always refers to the one and only instance of the `IOUserVideoDriver` class.
