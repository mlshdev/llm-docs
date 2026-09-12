> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/typeautomatic](https://developer.apple.com/documentation/uikit/uipasteboard/typeautomatic)

# typeAutomatic (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of pasteboard-item representation types with automatically-determined uniform type identifiers (UTIs).

## Declaration

```swift
class let typeAutomatic: String
```

<a id="Discussion"></a>

## Discussion

Use this type in the [setItems(\_:options:)](setitems%28__options_%29.md) method to automatically insert appropriate UTIs for supported types. In iOS 10, supported types are [NSString](../../foundation/nsstring.md), [NSAttributedString](../../foundation/nsattributedstring.md), [NSURL](../../foundation/nsurl.md), [UIImage](../uiimage.md), and [UIColor](../uicolor.md).

## See Also

### Constants

- [typeListString](typeliststring.md): An array of pasteboard-item representation types for string-type uniform type identifiers (UTIs), including the `kUTTypeUTF8PlainText` and `kUTTypeText` types. Related [UIPasteboard](../uipasteboard.md) properties are [string](string.md) and [strings](strings.md).
- [typeListURL](typelisturl.md): An array of pasteboard-item representation types for URL-type uniform type identifiers (UTIs), including `kUTTypeURL`. Related [UIPasteboard](../uipasteboard.md) properties are [url](url.md) and [urls](urls.md).
- [typeListImage](typelistimage.md): An array of pasteboard-item representation types for image-type uniform type identifiers (UTIs), including `kUTTypePNG` and `kUTTypeJPEG`. Related [UIPasteboard](../uipasteboard.md) properties are [image](image.md) and [images](images.md).
- [typeListColor](typelistcolor.md): An array of pasteboard-item representation types for colors. Related [UIPasteboard](../uipasteboard.md) properties are [color](color.md) and [colors](colors.md).

# UIPasteboardTypeAutomatic (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of pasteboard-item representation types with automatically-determined uniform type identifiers (UTIs).

## Declaration

```objectivec
extern NSString * const UIPasteboardTypeAutomatic;
```

<a id="Discussion"></a>

## Discussion

Use this type in the [setItems:options:](setitems%28__options_%29.md) method to automatically insert appropriate UTIs for supported types. In iOS 10, supported types are [NSString](../../foundation/nsstring.md), [NSAttributedString](../../foundation/nsattributedstring.md), [NSURL](../../foundation/nsurl.md), [UIImage](../uiimage.md), and [UIColor](../uicolor.md).

## See Also

### Constants

- [UIPasteboardTypeListString](typeliststring.md): An array of pasteboard-item representation types for string-type uniform type identifiers (UTIs), including the `kUTTypeUTF8PlainText` and `kUTTypeText` types. Related [UIPasteboard](../uipasteboard.md) properties are [string](string.md) and [strings](strings.md).
- [UIPasteboardTypeListURL](typelisturl.md): An array of pasteboard-item representation types for URL-type uniform type identifiers (UTIs), including `kUTTypeURL`. Related [UIPasteboard](../uipasteboard.md) properties are [URL](url.md) and [URLs](urls.md).
- [UIPasteboardTypeListImage](typelistimage.md): An array of pasteboard-item representation types for image-type uniform type identifiers (UTIs), including `kUTTypePNG` and `kUTTypeJPEG`. Related [UIPasteboard](../uipasteboard.md) properties are [image](image.md) and [images](images.md).
- [UIPasteboardTypeListColor](typelistcolor.md): An array of pasteboard-item representation types for colors. Related [UIPasteboard](../uipasteboard.md) properties are [color](color.md) and [colors](colors.md).
