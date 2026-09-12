> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecreateimageatindex(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecreateimageatindex(_:_:_:))

# CGImageSourceCreateImageAtIndex(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image object from the data at the specified index in an image source.

## Declaration

```swift
func CGImageSourceCreateImageAtIndex(_ isrc: CGImageSource, _ index: Int, _ options: CFDictionary?) -> CGImage?
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index of the image you want. If the index is invalid, this method returns `NULL`.
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

The image at the specified index, or `NULL` if an error occurs. You’re responsible for releasing the returned object using [CGImageRelease](../coregraphics/cgimagerelease.md).

## See Also

### Extracting Images From an Image Source

- [CGImageSourceCreateThumbnailAtIndex(\_:\_:\_:)](cgimagesourcecreatethumbnailatindex%28______%29.md): Creates a thumbnail version of the image at the specified index in an image source.
- [CGImageSourceGetPrimaryImageIndex(\_:)](cgimagesourcegetprimaryimageindex%28__%29.md): Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.

# CGImageSourceCreateImageAtIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image object from the data at the specified index in an image source.

## Declaration

```objectivec
extern CGImageRefCGImageSourceCreateImageAtIndex(CGImageSourceRef isrc, size_t index, CFDictionaryRef options);
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index of the image you want. If the index is invalid, this method returns `NULL`.
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

The image at the specified index, or `NULL` if an error occurs. You’re responsible for releasing the returned object using [CGImageRelease](../coregraphics/cgimagerelease.md).

## See Also

### Extracting Images From an Image Source

- [CGImageSourceCreateThumbnailAtIndex](cgimagesourcecreatethumbnailatindex%28______%29.md): Creates a thumbnail version of the image at the specified index in an image source.
- [CGImageSourceGetPrimaryImageIndex](cgimagesourcegetprimaryimageindex%28__%29.md): Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.
