> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagepointfornormalizedpoint(_:_:_:)](https://developer.apple.com/documentation/vision/vnimagepointfornormalizedpoint(_:_:_:))

# VNImagePointForNormalizedPoint(\_:\_:\_:) (Swift)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Projects a point in normalized coordinates into image coordinates.

## Declaration

```swift
func VNImagePointForNormalizedPoint(_ normalizedPoint: CGPoint, _ imageWidth: Int, _ imageHeight: Int) -> CGPoint
```

## Parameters

- `normalizedPoint`: The input point in normalized coordinate space.
- `imageWidth`: The width of the image into whose coordinate space you’re projecting the input point.
- `imageHeight`: The height of the image into whose coordinate space you’re projecting the input point.

<a id="return-value"></a>

## Return Value

The input point projected into image coordinates.

## Mentioned In

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md)

<a id="Discussion"></a>

## Discussion

The resulting point in image coordinate space may have nonintegral (floating-point) coordinates.

## See Also

### Coordinate conversion

- [VNNormalizedPointForImagePoint(\_:\_:\_:)](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
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

# VNImagePointForNormalizedPoint (Objective-C)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Projects a point in normalized coordinates into image coordinates.

## Declaration

```objectivec
extern CGPoint VNImagePointForNormalizedPoint(CGPoint normalizedPoint, size_t imageWidth, size_t imageHeight);
```

## Parameters

- `normalizedPoint`: The input point in normalized coordinate space.
- `imageWidth`: The width of the image into whose coordinate space you’re projecting the input point.
- `imageHeight`: The height of the image into whose coordinate space you’re projecting the input point.

<a id="return-value"></a>

## Return Value

The input point projected into image coordinates.

## Mentioned In

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md)

<a id="Discussion"></a>

## Discussion

The resulting point in image coordinate space may have nonintegral (floating-point) coordinates.

## See Also

### Coordinate conversion

- [VNNormalizedPointForImagePoint](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
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
