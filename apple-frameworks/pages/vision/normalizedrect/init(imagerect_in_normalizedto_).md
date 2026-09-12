> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedrect/init(imagerect:in:normalizedto:)](https://developer.apple.com/documentation/vision/normalizedrect/init(imagerect:in:normalizedto:))

# init(imageRect:in:normalizedTo:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a rectangle normalized to a region of interest in an image from a rectangle in an image coordinate space.

## Declaration

```swift
init(imageRect: CGRect, in imageSize: CGSize, normalizedTo regionOfInterest: NormalizedRect)
```

## Parameters

- `imageRect`: A rectangle in the image coordinate space.
- `imageSize`: The size of the image.
- `regionOfInterest`: The region of interest.

## See Also

### Creating a normalized rectangle

- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle with the specified coordinates.
- [init(imageRect:in:)](init%28imagerect_in_%29.md): Creates a normalized rectangle from a rectangle in an image coordinate space.
- [init(normalizedRect:)](init%28normalizedrect_%29.md): Creates a rectangle from the specified Core Graphics rectangle.
- [fullImage](fullimage.md): A normalized rectangle with an origin at zero and a width and height of one.
