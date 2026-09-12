> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecreatethumbnailatindex(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecreatethumbnailatindex(_:_:_:))

# CGImageSourceCreateThumbnailAtIndex(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a thumbnail version of the image at the specified index in an image source.

## Declaration

```swift
func CGImageSourceCreateThumbnailAtIndex(_ isrc: CGImageSource, _ index: Int, _ options: CFDictionary?) -> CGImage?
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index of the image you want. If the index is invalid, this method returns `NULL`.
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

The image at the specified index, or `NULL` if an error occurs. You are responsible for releasing the returned object using [CGImageRelease](../coregraphics/cgimagerelease.md).

<a id="Discussion"></a>

## Discussion

If the image source is a PDF, this function creates a 72 dpi image of the PDF page specified by the index that you pass. You must, however, pass an options dictionary that contains either the [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md) or [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md) keys, with the value of the key set to `true`.

## See Also

### Extracting Images From an Image Source

- [CGImageSourceCreateImageAtIndex(\_:\_:\_:)](cgimagesourcecreateimageatindex%28______%29.md): Creates an image object from the data at the specified index in an image source.
- [CGImageSourceGetPrimaryImageIndex(\_:)](cgimagesourcegetprimaryimageindex%28__%29.md): Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.

# CGImageSourceCreateThumbnailAtIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a thumbnail version of the image at the specified index in an image source.

## Declaration

```objectivec
extern CGImageRefCGImageSourceCreateThumbnailAtIndex(CGImageSourceRef isrc, size_t index, CFDictionaryRef options);
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index of the image you want. If the index is invalid, this method returns `NULL`.
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

The image at the specified index, or `NULL` if an error occurs. You are responsible for releasing the returned object using [CGImageRelease](../coregraphics/cgimagerelease.md).

<a id="Discussion"></a>

## Discussion

If the image source is a PDF, this function creates a 72 dpi image of the PDF page specified by the index that you pass. You must, however, pass an options dictionary that contains either the [kCGImageSourceCreateThumbnailFromImageIfAbsent](kcgimagesourcecreatethumbnailfromimageifabsent.md) or [kCGImageSourceCreateThumbnailFromImageAlways](kcgimagesourcecreatethumbnailfromimagealways.md) keys, with the value of the key set to `true`.

## See Also

### Extracting Images From an Image Source

- [CGImageSourceCreateImageAtIndex](cgimagesourcecreateimageatindex%28______%29.md): Creates an image object from the data at the specified index in an image source.
- [CGImageSourceGetPrimaryImageIndex](cgimagesourcegetprimaryimageindex%28__%29.md): Returns the index of the primary image for an High Efficiency Image File Format (HEIF) image.
