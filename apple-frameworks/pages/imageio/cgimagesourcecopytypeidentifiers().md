> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecopytypeidentifiers()](https://developer.apple.com/documentation/imageio/cgimagesourcecopytypeidentifiers())

# CGImageSourceCopyTypeIdentifiers() (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of uniform type identifiers that are supported for image sources.

## Declaration

```swift
func CGImageSourceCopyTypeIdentifiers() -> CFArray
```

<a id="return-value"></a>

## Return Value

Returns an array of the uniform type identifiers that are supported for image sources.

<a id="Discussion"></a>

## Discussion

For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID()](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType(\_:)](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceGetCount(\_:)](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

# CGImageSourceCopyTypeIdentifiers (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of uniform type identifiers that are supported for image sources.

## Declaration

```objectivec
extern CFArrayRefCGImageSourceCopyTypeIdentifiers();
```

<a id="return-value"></a>

## Return Value

Returns an array of the uniform type identifiers that are supported for image sources.

<a id="Discussion"></a>

## Discussion

For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetTypeID](cgimagesourcegettypeid%28%29.md): Returns the unique type identifier of an image source opaque type.
- [CGImageSourceGetType](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceGetCount](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.
