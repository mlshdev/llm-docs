> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagepointfornormalizedpointusingregionofinterest(_:_:_:_:)](https://developer.apple.com/documentation/vision/vnimagepointfornormalizedpointusingregionofinterest(_:_:_:_:))

# VNImagePointForNormalizedPointUsingRegionOfInterest(\_:\_:\_:\_:) (Swift)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Projects a point from a region of interest within the normalized coordinates into image coordinates.

## Declaration

```swift
func VNImagePointForNormalizedPointUsingRegionOfInterest(_ normalizedPoint: CGPoint, _ imageWidth: Int, _ imageHeight: Int, _ roi: CGRect) -> CGPoint
```

## Parameters

- `normalizedPoint`: The input point in normalized coordinates.
- `imageWidth`: The width of the image.
- `imageHeight`: The height of the image.
- `roi`: The region of interest within the normalized-coordinate space.

<a id="return-value"></a>

## Return Value

A point in the image-coordinate space.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint(\_:\_:\_:)](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint(\_:\_:\_:)](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect(\_:\_:\_:)](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect(\_:\_:\_:)](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect(\_:)](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:)](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint(\_:\_:\_:\_:)](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

# VNImagePointForNormalizedPointUsingRegionOfInterest (Objective-C)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Projects a point from a region of interest within the normalized coordinates into image coordinates.

## Declaration

```objectivec
extern CGPoint VNImagePointForNormalizedPointUsingRegionOfInterest(CGPoint normalizedPoint, size_t imageWidth, size_t imageHeight, CGRect roi);
```

## Parameters

- `normalizedPoint`: The input point in normalized coordinates.
- `imageWidth`: The width of the image.
- `imageHeight`: The height of the image.
- `roi`: The region of interest within the normalized-coordinate space.

<a id="return-value"></a>

## Return Value

A point in the image-coordinate space.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.
