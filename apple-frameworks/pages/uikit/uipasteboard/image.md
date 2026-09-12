> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/image](https://developer.apple.com/documentation/uikit/uipasteboard/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image object of the first pasteboard item.

## Declaration

```swift
@NSCopying var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is a [UIImage](../uiimage.md) object. The associated array of representation types is [typeListImage](typelistimage.md), which includes types `kUTTypePNG` and `kUTTypeJPEG`. Setting this property replaces all current items in the pasteboard with the new item.  If the first item has no value of the indicated type, `nil` is returned.

> **Note**

>  Do not use this property to determine if a pasteboard contains image data. Instead, use the [hasImages](hasimages.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [strings](strings.md): An array of strings in all pasteboard items.
- [images](images.md): An array of image objects in all pasteboard items.
- [url](url.md): The URL object of the first pasteboard item.
- [urls](urls.md): An array of URL objects in all pasteboard items.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.

# image (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image object of the first pasteboard item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is a [UIImage](../uiimage.md) object. The associated array of representation types is [UIPasteboardTypeListImage](typelistimage.md), which includes types `kUTTypePNG` and `kUTTypeJPEG`. Setting this property replaces all current items in the pasteboard with the new item.  If the first item has no value of the indicated type, `nil` is returned.

> **Note**

>  Do not use this property to determine if a pasteboard contains image data. Instead, use the [hasImages](hasimages.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [strings](strings.md): An array of strings in all pasteboard items.
- [images](images.md): An array of image objects in all pasteboard items.
- [URL](url.md): The URL object of the first pasteboard item.
- [URLs](urls.md): An array of URL objects in all pasteboard items.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.
