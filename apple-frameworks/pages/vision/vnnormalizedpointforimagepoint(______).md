> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnnormalizedpointforimagepoint(_:_:_:)](https://developer.apple.com/documentation/vision/vnnormalizedpointforimagepoint(_:_:_:))

# VNNormalizedPointForImagePoint(\_:\_:\_:) (Swift)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Projects a point from image coordinates into normalized coordinates.

## Declaration

```swift
func VNNormalizedPointForImagePoint(_ imagePoint: CGPoint, _ imageWidth: Int, _ imageHeight: Int) -> CGPoint
```

## Parameters

- `imagePoint`: The input point in image coordinate space.
- `imageWidth`: The image width.
- `imageHeight`: The image height.

<a id="return-value"></a>

## Return Value

The input point projected into normalized coordinates.

<a id="Discussion"></a>

## Discussion

The resulting point in image coordinate space may have nonintegral (floating-point) coordinates.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint(\_:\_:\_:)](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect(\_:\_:\_:)](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect(\_:\_:\_:)](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect(\_:)](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:)](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint(\_:\_:\_:\_:)](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

# VNNormalizedPointForImagePoint (Objective-C)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Projects a point from image coordinates into normalized coordinates.

## Declaration

```objectivec
extern CGPoint VNNormalizedPointForImagePoint(CGPoint imagePoint, size_t imageWidth, size_t imageHeight);
```

## Parameters

- `imagePoint`: The input point in image coordinate space.
- `imageWidth`: The image width.
- `imageHeight`: The image height.

<a id="return-value"></a>

## Return Value

The input point projected into normalized coordinates.

<a id="Discussion"></a>

## Discussion

The resulting point in image coordinate space may have nonintegral (floating-point) coordinates.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.
