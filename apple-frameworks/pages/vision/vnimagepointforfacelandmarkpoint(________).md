> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagepointforfacelandmarkpoint(_:_:_:_:)](https://developer.apple.com/documentation/vision/vnimagepointforfacelandmarkpoint(_:_:_:_:))

# VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:) (Swift)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns the image coordinates of a specified face landmark point.

## Declaration

```swift
func VNImagePointForFaceLandmarkPoint(_ faceLandmarkPoint: vector_float2, _ faceBoundingBox: CGRect, _ imageWidth: Int, _ imageHeight: Int) -> CGPoint
```

## Parameters

- `faceLandmarkPoint`: The location of the face landmark, as returned from a [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md) instance.
- `faceBoundingBox`: The normalized bounding box rect around the face, as obtained from a [VNFaceObservation](vnfaceobservation.md).
- `imageWidth`: The width of the image from which the [VNFaceObservation](vnfaceobservation.md) was generated.
- `imageHeight`: The height of the image from which the [VNFaceObservation](vnfaceobservation.md) was generated.

<a id="return-value"></a>

## Return Value

The input face landmark point, projected into image coordinates.

<a id="Discussion"></a>

## Discussion

The resulting point in image coordinate space may have nonintegral (floating-point) coordinates.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint(\_:\_:\_:)](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint(\_:\_:\_:)](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect(\_:\_:\_:)](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect(\_:\_:\_:)](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect(\_:)](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint(\_:\_:\_:\_:)](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

# VNImagePointForFaceLandmarkPoint (Objective-C)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns the image coordinates of a specified face landmark point.

## Declaration

```objectivec
extern CGPoint VNImagePointForFaceLandmarkPoint(vector_float2 faceLandmarkPoint, CGRect faceBoundingBox, size_t imageWidth, size_t imageHeight);
```

## Parameters

- `faceLandmarkPoint`: The location of the face landmark, as returned from a [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md) instance.
- `faceBoundingBox`: The normalized bounding box rect around the face, as obtained from a [VNFaceObservation](vnfaceobservation.md).
- `imageWidth`: The width of the image from which the [VNFaceObservation](vnfaceobservation.md) was generated.
- `imageHeight`: The height of the image from which the [VNFaceObservation](vnfaceobservation.md) was generated.

<a id="return-value"></a>

## Return Value

The input face landmark point, projected into image coordinates.

<a id="Discussion"></a>

## Discussion

The resulting point in image coordinate space may have nonintegral (floating-point) coordinates.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.
