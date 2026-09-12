> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/copy(colorspace:)](https://developer.apple.com/documentation/coregraphics/cgimage/copy(colorspace:))

# copy(colorSpace:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of a bitmap image, replacing its colorspace.

## Declaration

```swift
func copy(colorSpace space: CGColorSpace) -> CGImage?
```

## Parameters

- `space`: The destination color space. The number of components in this color space must be the same as the number in the specified image.

<a id="return-value"></a>

## Return Value

A new CGImage that is a copy of the image passed as the `image` parameter but with its color space replaced by that specified by the `colorspace` parameter. Returns `NULL` if `image` is an image mask, or if the number of components of `colorspace` is not the same as the number of components of the colorspace of `image`. In Objective-C, you’re responsible for releasing this object using [CGImageRelease](../cgimagerelease.md).

## See Also

### Copying an image

- [copy()](copy%28%29.md): Creates a copy of a bitmap image.

# CGImageCreateCopyWithColorSpace (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of a bitmap image, replacing its colorspace.

## Declaration

```objectivec
extern CGImageRefCGImageCreateCopyWithColorSpace(CGImageRef image, CGColorSpaceRef space);
```

## Parameters

- `image`: The graphics image to copy.
- `space`: The destination color space. The number of components in this color space must be the same as the number in the specified image.

<a id="return-value"></a>

## Return Value

A new CGImage that is a copy of the image passed as the `image` parameter but with its color space replaced by that specified by the `colorspace` parameter. Returns `NULL` if `image` is an image mask, or if the number of components of `colorspace` is not the same as the number of components of the colorspace of `image`. In Objective-C, you’re responsible for releasing this object using [CGImageRelease](../cgimagerelease.md).

## See Also

### Copying an image

- [CGImageCreateCopy](copy%28%29.md): Creates a copy of a bitmap image.
