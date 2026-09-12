> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcegetcount(_:)](https://developer.apple.com/documentation/imageio/cgimagesourcegetcount(_:))

# CGImageSourceGetCount(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of images (not including thumbnails) in the image source.

## Declaration

```swift
func CGImageSourceGetCount(_ isrc: CGImageSource) -> Int
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

The number of images. If the image source is a multilayered Photoshop (PSD) file, the function returns `1`.

<a id="Discussion"></a>

## Discussion

This function does not extract the layers of a PSD file.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID()](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType(\_:)](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers()](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

# CGImageSourceGetCount (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of images (not including thumbnails) in the image source.

## Declaration

```objectivec
extern size_t CGImageSourceGetCount(CGImageSourceRef isrc);
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

The number of images. If the image source is a multilayered Photoshop (PSD) file, the function returns `1`.

<a id="Discussion"></a>

## Discussion

This function does not extract the layers of a PSD file.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.
