> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectedobjectobservation/init(requestrevision:boundingbox:)](https://developer.apple.com/documentation/vision/vndetectedobjectobservation/init(requestrevision:boundingbox:))

# init(requestRevision:boundingBox:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates an observation with a revision number and bounding box.

## Declaration

```swift
convenience init(requestRevision: Int, boundingBox: CGRect)
```

## Parameters

- `requestRevision`: The revision of the request to use.
- `boundingBox`: The observation’s bounding box, in coordinates normalized to the dimensions of the processed image, with its origin at the image’s lower-left corner.

## See Also

### Creating an Observation

- [init(boundingBox:)](init%28boundingbox_%29.md): Creates an observation with a bounding box.

# observationWithRequestRevision:boundingBox: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates an observation with a revision number and bounding box.

## Declaration

```objectivec
+ (instancetype) observationWithRequestRevision:(NSUInteger) requestRevision boundingBox:(CGRect) boundingBox;
```

## Parameters

- `requestRevision`: The revision of the request to use.
- `boundingBox`: The observation’s bounding box, in coordinates normalized to the dimensions of the processed image, with its origin at the image’s lower-left corner.

## See Also

### Creating an Observation

- [observationWithBoundingBox:](init%28boundingbox_%29.md): Creates an observation with a bounding box.
