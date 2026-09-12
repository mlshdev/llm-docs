> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedrect/fullimage](https://developer.apple.com/documentation/vision/normalizedrect/fullimage)

# fullImage

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A normalized rectangle with an origin at zero and a width and height of one.

## Declaration

```swift
static var fullImage: NormalizedRect { get }
```

## See Also

### Creating a normalized rectangle

- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle with the specified coordinates.
- [init(imageRect:in:)](init%28imagerect_in_%29.md): Creates a normalized rectangle from a rectangle in an image coordinate space.
- [init(imageRect:in:normalizedTo:)](init%28imagerect_in_normalizedto_%29.md): Creates a rectangle normalized to a region of interest in an image from a rectangle in an image coordinate space.
- [init(normalizedRect:)](init%28normalizedrect_%29.md): Creates a rectangle from the specified Core Graphics rectangle.
