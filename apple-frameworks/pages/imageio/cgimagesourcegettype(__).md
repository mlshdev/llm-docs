> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcegettype(_:)](https://developer.apple.com/documentation/imageio/cgimagesourcegettype(_:))

# CGImageSourceGetType(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the uniform type identifier of the source container.

## Declaration

```swift
func CGImageSourceGetType(_ isrc: CGImageSource) -> CFString?
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

The uniform type identifier of the image source container.

<a id="Discussion"></a>

## Discussion

The uniform type identifier of the source container can be different from the type of the images in the container. For example, the `.icns` format supports embedded `JPEG2000`. The type of the source container is `"com.apple.icns"`, but type of the images is `JPEG2000`.

For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID()](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceCopyTypeIdentifiers()](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount(\_:)](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

# CGImageSourceGetType (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the uniform type identifier of the source container.

## Declaration

```objectivec
extern CFStringRefCGImageSourceGetType(CGImageSourceRef isrc);
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

The uniform type identifier of the image source container.

<a id="Discussion"></a>

## Discussion

The uniform type identifier of the source container can be different from the type of the images in the container. For example, the `.icns` format supports embedded `JPEG2000`. The type of the source container is `"com.apple.icns"`, but type of the images is `JPEG2000`.

For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceCopyTypeIdentifiers](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.
