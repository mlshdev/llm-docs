> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/pixelbufferobservation/pixel(at:)](https://developer.apple.com/documentation/vision/pixelbufferobservation/pixel(at:))

# pixel(at:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Returns the pixel data for the specified location in the image.

## Declaration

```swift
func pixel(at point: NormalizedPoint) -> Float
```

## Parameters

- `point`: The image location in normalized coordinates.

<a id="return-value"></a>

## Return Value

The pixel value of the image at the specified coordinate.
