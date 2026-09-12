> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnnormalizedrectforimagerect(_:_:_:)](https://developer.apple.com/documentation/vision/vnnormalizedrectforimagerect(_:_:_:))

# VNNormalizedRectForImageRect(\_:\_:\_:) (Swift)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Projects a rectangle from image coordinates into normalized coordinates.

## Declaration

```swift
func VNNormalizedRectForImageRect(_ imageRect: CGRect, _ imageWidth: Int, _ imageHeight: Int) -> CGRect
```

## Parameters

- `imageRect`: The input rectangle in image coordinate space.
- `imageWidth`: The width of the image in whose coordinates the input rect resides.
- `imageHeight`: The height of the image in whose coordinates the input rect resides.

<a id="return-value"></a>

## Return Value

The input rectangle projected into normalized coordinates.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint(\_:\_:\_:)](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint(\_:\_:\_:)](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect(\_:\_:\_:)](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect(\_:)](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:)](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint(\_:\_:\_:\_:)](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

# VNNormalizedRectForImageRect (Objective-C)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Projects a rectangle from image coordinates into normalized coordinates.

## Declaration

```objectivec
extern CGRect VNNormalizedRectForImageRect(CGRect imageRect, size_t imageWidth, size_t imageHeight);
```

## Parameters

- `imageRect`: The input rectangle in image coordinate space.
- `imageWidth`: The width of the image in whose coordinates the input rect resides.
- `imageHeight`: The height of the image in whose coordinates the input rect resides.

<a id="return-value"></a>

## Return Value

The input rectangle projected into normalized coordinates.

## See Also

### Coordinate conversion

- [VNImagePointForNormalizedPoint](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.
