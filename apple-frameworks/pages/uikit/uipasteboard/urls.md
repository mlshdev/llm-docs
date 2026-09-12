> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/urls](https://developer.apple.com/documentation/uikit/uipasteboard/urls)

# urls (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of URL objects in all pasteboard items.

## Declaration

```swift
var urls: [URL]? { get set }
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is an array of [NSURL](../../foundation/nsurl.md) objects. The associated array of representation types is [typeListURL](typelisturl.md), which includes type `kUTTypeURL`. Setting this property replaces all current items in the pasteboard with the new items. The returned array may have fewer objects than the number of pasteboard items; this happens if a pasteboard item does not have a value of the indicated type.

> **Note**

>  Do not use this property to determine if a pasteboard contains URL data. Instead, use the [hasURLs](hasurls.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [strings](strings.md): An array of strings in all pasteboard items.
- [image](image.md): The image object of the first pasteboard item.
- [images](images.md): An array of image objects in all pasteboard items.
- [url](url.md): The URL object of the first pasteboard item.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.

# URLs (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of URL objects in all pasteboard items.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSURL *> * URLs;
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is an array of [NSURL](../../foundation/nsurl.md) objects. The associated array of representation types is [UIPasteboardTypeListURL](typelisturl.md), which includes type `kUTTypeURL`. Setting this property replaces all current items in the pasteboard with the new items. The returned array may have fewer objects than the number of pasteboard items; this happens if a pasteboard item does not have a value of the indicated type.

> **Note**

>  Do not use this property to determine if a pasteboard contains URL data. Instead, use the [hasURLs](hasurls.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [strings](strings.md): An array of strings in all pasteboard items.
- [image](image.md): The image object of the first pasteboard item.
- [images](images.md): An array of image objects in all pasteboard items.
- [URL](url.md): The URL object of the first pasteboard item.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.
