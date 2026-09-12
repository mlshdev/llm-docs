> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectfacelandmarksrequest/constellation](https://developer.apple.com/documentation/vision/vndetectfacelandmarksrequest/constellation)

# constellation (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A variable that describes how a face landmarks request orders or enumerates the resulting features.

## Declaration

```swift
var constellation: VNRequestFaceLandmarksConstellation { get set }
```

<a id="Discussion"></a>

## Discussion

Set this variable to one of the supported constellation types detailed in [VNRequestFaceLandmarksConstellation](../vnrequestfacelandmarksconstellation.md). The default value is [VNRequestFaceLandmarksConstellation.constellationNotDefined](../vnrequestfacelandmarksconstellation/constellationnotdefined.md).

## See Also

### Locating Face Landmarks

- [VNRequestFaceLandmarksConstellation](../vnrequestfacelandmarksconstellation.md): An enumeration of face landmarks in a constellation object.

# constellation (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A variable that describes how a face landmarks request orders or enumerates the resulting features.

## Declaration

```objectivec
@property (assign, readwrite) VNRequestFaceLandmarksConstellation constellation;
```

<a id="Discussion"></a>

## Discussion

Set this variable to one of the supported constellation types detailed in [VNRequestFaceLandmarksConstellation](../vnrequestfacelandmarksconstellation.md). The default value is [VNRequestFaceLandmarksConstellationNotDefined](../vnrequestfacelandmarksconstellation/constellationnotdefined.md).

## See Also

### Locating Face Landmarks

- [VNRequestFaceLandmarksConstellation](../vnrequestfacelandmarksconstellation.md): An enumeration of face landmarks in a constellation object.
