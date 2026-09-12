> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/sizespecification-swift.struct/closest(to:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/sizespecification-swift.struct/closest(to:))

# closest(to:)

**Framework:** Image Playground  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a new instance of this structure with a size value that best matches the specified size.

## Declaration

```swift
static func closest(to size: CGSize) -> ImagePlaygroundOptions.SizeSpecification
```

## Parameters

- `size`: The image size you want.

<a id="return-value"></a>

## Return Value

A structure with a supported size that most closely matches the requested value in `size`.

<a id="discussion"></a>

## Discussion

This method finds the supported image size that’s closest to the value in the `size` parameter. The method considers both the resolution and aspect ratio of the requested size when choosing the output size.
