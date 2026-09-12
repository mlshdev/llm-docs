> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecopypropertiesatindex(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecopypropertiesatindex(_:_:_:))

# CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the properties of the image at a specified location in an image source.

## Declaration

```swift
func CGImageSourceCopyPropertiesAtIndex(_ isrc: CGImageSource, _ index: Int, _ options: CFDictionary?) -> CFDictionary?
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index into the images of the image source. If the index is invalid, this method returns `NULL`.
- `options`: A dictionary you can use to request additional options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

A dictionary that contains the properties associated with the image. See `CGImageProperties` for a list of properties that allowed in the dictionary.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID()](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType(\_:)](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers()](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount(\_:)](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

# CGImageSourceCopyPropertiesAtIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the properties of the image at a specified location in an image source.

## Declaration

```objectivec
extern CFDictionaryRefCGImageSourceCopyPropertiesAtIndex(CGImageSourceRef isrc, size_t index, CFDictionaryRef options);
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index into the images of the image source. If the index is invalid, this method returns `NULL`.
- `options`: A dictionary you can use to request additional options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

A dictionary that contains the properties associated with the image. See `CGImageProperties` for a list of properties that allowed in the dictionary.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.
