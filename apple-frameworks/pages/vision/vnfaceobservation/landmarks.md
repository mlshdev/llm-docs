> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnfaceobservation/landmarks

# landmarks (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The facial features of the detected face.

## Declaration

```swift
var landmarks: VNFaceLandmarks2D? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for face observations produced by a [VNDetectFaceRectanglesRequest](../vndetectfacerectanglesrequest.md) analysis. Use the [VNDetectFaceLandmarksRequest](../vndetectfacelandmarksrequest.md) class to find facial features.

## See Also

### Identifying Landmarks

- [VNFaceLandmarks2D](../vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarkRegion2D](../vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarks](../vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](../vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.

# landmarks (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The facial features of the detected face.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) VNFaceLandmarks2D * landmarks;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for face observations produced by a [VNDetectFaceRectanglesRequest](../vndetectfacerectanglesrequest.md) analysis. Use the [VNDetectFaceLandmarksRequest](../vndetectfacelandmarksrequest.md) class to find facial features.

## See Also

### Identifying Landmarks

- [VNFaceLandmarks2D](../vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarkRegion2D](../vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarks](../vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](../vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.
