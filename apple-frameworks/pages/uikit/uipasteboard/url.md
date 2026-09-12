> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/url](https://developer.apple.com/documentation/uikit/uipasteboard/url)

# url (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL object of the first pasteboard item.

## Declaration

```swift
var url: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is an [NSURL](../../foundation/nsurl.md) object. The associated array of representation types is [typeListURL](typelisturl.md), which includes type `kUTTypeURL`. Setting this property replaces all current items in the pasteboard with the new item.  If the first item has no value of the indicated type, `nil` is returned.

> **Note**

>  Do not use this property to determine if a pasteboard contains URL data. Instead, use the [hasURLs](hasurls.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [strings](strings.md): An array of strings in all pasteboard items.
- [image](image.md): The image object of the first pasteboard item.
- [images](images.md): An array of image objects in all pasteboard items.
- [urls](urls.md): An array of URL objects in all pasteboard items.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.

# URL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL object of the first pasteboard item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is an [NSURL](../../foundation/nsurl.md) object. The associated array of representation types is [UIPasteboardTypeListURL](typelisturl.md), which includes type `kUTTypeURL`. Setting this property replaces all current items in the pasteboard with the new item.  If the first item has no value of the indicated type, `nil` is returned.

> **Note**

>  Do not use this property to determine if a pasteboard contains URL data. Instead, use the [hasURLs](hasurls.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [strings](strings.md): An array of strings in all pasteboard items.
- [image](image.md): The image object of the first pasteboard item.
- [images](images.md): An array of image objects in all pasteboard items.
- [URLs](urls.md): An array of URL objects in all pasteboard items.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.
