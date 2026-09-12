> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecopyauxiliarydatainfoatindex(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecopyauxiliarydatainfoatindex(_:_:_:))

# CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns auxiliary data, such as mattes and depth information, that accompany the image.

## Declaration

```swift
func CGImageSourceCopyAuxiliaryDataInfoAtIndex(_ isrc: CGImageSource, _ index: Int, _ auxiliaryImageDataType: CFString) -> CFDictionary?
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index into the images of the image source. If the index is invalid, this method returns `NULL`.
- `auxiliaryImageDataType`: The auxiliary data to retrieve. For a list of possible values, see [Auxiliary Image Data](individual-image-properties.md#Auxiliary-Image-Data) and [Auxiliary Data Types](individual-image-properties.md#Auxiliary-Data-Types).

<a id="return-value"></a>

## Return Value

A dictionary that contains the auxiliary data, or `NULL` if an error occurs.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID()](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType(\_:)](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers()](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount(\_:)](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.

# CGImageSourceCopyAuxiliaryDataInfoAtIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns auxiliary data, such as mattes and depth information, that accompany the image.

## Declaration

```objectivec
extern CFDictionaryRefCGImageSourceCopyAuxiliaryDataInfoAtIndex(CGImageSourceRef isrc, size_t index, CFStringRef auxiliaryImageDataType);
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index into the images of the image source. If the index is invalid, this method returns `NULL`.
- `auxiliaryImageDataType`: The auxiliary data to retrieve. For a list of possible values, see [Auxiliary Image Data](individual-image-properties.md#Auxiliary-Image-Data) and [Auxiliary Data Types](individual-image-properties.md#Auxiliary-Data-Types).

<a id="return-value"></a>

## Return Value

A dictionary that contains the auxiliary data, or `NULL` if an error occurs.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
