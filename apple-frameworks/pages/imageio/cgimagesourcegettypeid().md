> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcegettypeid()](https://developer.apple.com/documentation/imageio/cgimagesourcegettypeid())

# CGImageSourceGetTypeID() (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unique type identifier of an image source opaque type.

## Declaration

```swift
func CGImageSourceGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

Returns the Core Foundation type ID for an image source.

<a id="Discussion"></a>

## Discussion

A type identifier is an integer that identifies the opaque type to which a Core Foundation object belongs. You use type IDs in various contexts, such as when you are operating on heterogeneous collections. Note that a Core Foundation type ID is different from a uniform type identifier.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetType(\_:)](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers()](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount(\_:)](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.

# CGImageSourceGetTypeID (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unique type identifier of an image source opaque type.

## Declaration

```objectivec
extern CFTypeID CGImageSourceGetTypeID();
```

<a id="return-value"></a>

## Return Value

Returns the Core Foundation type ID for an image source.

<a id="Discussion"></a>

## Discussion

A type identifier is an integer that identifies the opaque type to which a Core Foundation object belongs. You use type IDs in various contexts, such as when you are operating on heterogeneous collections. Note that a Core Foundation type ID is different from a uniform type identifier.

## See Also

### Getting Information From an Image Source

- [CGImageSourceGetType](cgimagesourcegettype%28__%29.md): Returns the uniform type identifier of the source container.
- [CGImageSourceCopyTypeIdentifiers](cgimagesourcecopytypeidentifiers%28%29.md): Returns an array of uniform type identifiers that are supported for image sources.
- [CGImageSourceGetCount](cgimagesourcegetcount%28__%29.md): Returns the number of images (not including thumbnails) in the image source.
- [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md): Returns the properties of the image source.
- [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md): Returns the properties of the image at a specified location in an image source.
- [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md): Returns auxiliary data, such as mattes and depth information, that accompany the image.
