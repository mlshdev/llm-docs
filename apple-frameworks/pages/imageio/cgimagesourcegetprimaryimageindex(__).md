> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcegetprimaryimageindex(_:)](https://developer.apple.com/documentation/imageio/cgimagesourcegetprimaryimageindex(_:))

# CGImageSourceGetPrimaryImageIndex(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.

## Declaration

```swift
func CGImageSourceGetPrimaryImageIndex(_ isrc: CGImageSource) -> Int
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

The index of the primary image, or `0` for image formats other than the HEIF format.

## See Also

### Extracting Images From an Image Source

- [CGImageSourceCreateImageAtIndex(\_:\_:\_:)](cgimagesourcecreateimageatindex%28______%29.md): Creates an image object from the data at the specified index in an image source.
- [CGImageSourceCreateThumbnailAtIndex(\_:\_:\_:)](cgimagesourcecreatethumbnailatindex%28______%29.md): Creates a thumbnail version of the image at the specified index in an image source.

# CGImageSourceGetPrimaryImageIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.

## Declaration

```objectivec
extern size_t CGImageSourceGetPrimaryImageIndex(CGImageSourceRef isrc);
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

The index of the primary image, or `0` for image formats other than the HEIF format.

## See Also

### Extracting Images From an Image Source

- [CGImageSourceCreateImageAtIndex](cgimagesourcecreateimageatindex%28______%29.md): Creates an image object from the data at the specified index in an image source.
- [CGImageSourceCreateThumbnailAtIndex](cgimagesourcecreatethumbnailatindex%28______%29.md): Creates a thumbnail version of the image at the specified index in an image source.
