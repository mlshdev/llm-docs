> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeometryutils](https://developer.apple.com/documentation/vision/vngeometryutils)

# VNGeometryUtils (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Utility methods to determine the geometries of various Vision types.

## Declaration

```swift
class VNGeometryUtils
```

## Topics

### Calculating Bounding Circles

- [boundingCircle(for:)](vngeometryutils/boundingcircle%28for_%29-423ll.md): Calculates a bounding circle for the specified contour object.
- [boundingCircle(for:)](vngeometryutils/boundingcircle%28for_%29-9dggv.md): Calculates a bounding circle for the specified array of points.
- [boundingCircle(forSIMDPoints:pointCount:)](vngeometryutils/boundingcircle%28forsimdpoints_pointcount_%29.md): Calculates a bounding circle for the specified points.

### Calculating Area and Perimeter

- [calculateArea(\_:for:orientedArea:)](vngeometryutils/calculatearea%28__for_orientedarea_%29.md): Calculates the area for the specified contour.
- [calculatePerimeter(\_:for:)](vngeometryutils/calculateperimeter%28__for_%29.md): Calculates the perimeter of a closed contour.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

# VNGeometryUtils (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Utility methods to determine the geometries of various Vision types.

## Declaration

```objectivec
@interface VNGeometryUtils : NSObject
```

## Topics

### Calculating Bounding Circles

- [boundingCircleForContour:error:](vngeometryutils/boundingcircle%28for_%29-423ll.md): Calculates a bounding circle for the specified contour object.
- [boundingCircleForPoints:error:](vngeometryutils/boundingcircle%28for_%29-9dggv.md): Calculates a bounding circle for the specified array of points.
- [boundingCircleForSIMDPoints:pointCount:error:](vngeometryutils/boundingcircle%28forsimdpoints_pointcount_%29.md): Calculates a bounding circle for the specified points.

### Calculating Area and Perimeter

- [calculateArea:forContour:orientedArea:error:](vngeometryutils/calculatearea%28__for_orientedarea_%29.md): Calculates the area for the specified contour.
- [calculatePerimeter:forContour:error:](vngeometryutils/calculateperimeter%28__for_%29.md): Calculates the perimeter of a closed contour.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.
