> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectedobjectobservation/init(boundingbox:)](https://developer.apple.com/documentation/vision/vndetectedobjectobservation/init(boundingbox:))

# init(boundingBox:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates an observation with a bounding box.

## Declaration

```swift
convenience init(boundingBox: CGRect)
```

## Parameters

- `boundingBox`: The observation’s bounding box, in coordinates normalized to the dimensions of the processed image, with its origin at the image’s lower-left corner.

## See Also

### Creating an Observation

- [init(requestRevision:boundingBox:)](init%28requestrevision_boundingbox_%29.md): Creates an observation with a revision number and bounding box.

# observationWithBoundingBox: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates an observation with a bounding box.

## Declaration

```objectivec
+ (instancetype) observationWithBoundingBox:(CGRect) boundingBox;
```

## Parameters

- `boundingBox`: The observation’s bounding box, in coordinates normalized to the dimensions of the processed image, with its origin at the image’s lower-left corner.

## See Also

### Creating an Observation

- [observationWithRequestRevision:boundingBox:](init%28requestrevision_boundingbox_%29.md): Creates an observation with a revision number and bounding box.
