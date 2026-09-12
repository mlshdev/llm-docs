> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnnormalizedrectisidentityrect(_:)](https://developer.apple.com/documentation/vision/vnnormalizedrectisidentityrect(_:))

# VNNormalizedRectIsIdentityRect(\_:) (Swift)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.

## Declaration

```swift
func VNNormalizedRectIsIdentityRect(_ normalizedRect: CGRect) -> Bool
```

## Parameters

- `normalizedRect`: Normalized input rect to test for identity.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle is the identity rectangle, otherwise [false](https://developer.apple.com/documentation/swift/false).

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
- [VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:)](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint(\_:\_:\_:\_:)](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

# VNNormalizedRectIsIdentityRect (Objective-C)

**Framework:** Vision  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.

## Declaration

```objectivec
extern bool VNNormalizedRectIsIdentityRect(CGRect normalizedRect);
```

## Parameters

- `normalizedRect`: Normalized input rect to test for identity.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle is the identity rectangle, otherwise [false](https://developer.apple.com/documentation/swift/false).

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
- [VNImagePointForFaceLandmarkPoint](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.
