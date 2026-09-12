> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imageprocessingrequest/regionofinterest](https://developer.apple.com/documentation/vision/imageprocessingrequest/regionofinterest)

# regionOfInterest

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The region of the image where the framework performs the request.

## Declaration

```swift
var regionOfInterest: NormalizedRect { get set }
```

<a id="Discussion"></a>

## Discussion

The system normalizes the rectangle to the dimensions of the processed image. Its origin is the image’s lower-left corner.

The default value is `{ { 0, 0 }, { 1, 1 } }`.
