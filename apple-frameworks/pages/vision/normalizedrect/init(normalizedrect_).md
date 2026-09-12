> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedrect/init(normalizedrect:)](https://developer.apple.com/documentation/vision/normalizedrect/init(normalizedrect:))

# init(normalizedRect:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a rectangle from the specified Core Graphics rectangle.

## Declaration

```swift
init(normalizedRect: CGRect)
```

## Parameters

- `normalizedRect`: The normalized rect.

## See Also

### Creating a normalized rectangle

- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle with the specified coordinates.
- [init(imageRect:in:)](init%28imagerect_in_%29.md): Creates a normalized rectangle from a rectangle in an image coordinate space.
- [init(imageRect:in:normalizedTo:)](init%28imagerect_in_normalizedto_%29.md): Creates a rectangle normalized to a region of interest in an image from a rectangle in an image coordinate space.
- [fullImage](fullimage.md): A normalized rectangle with an origin at zero and a width and height of one.
