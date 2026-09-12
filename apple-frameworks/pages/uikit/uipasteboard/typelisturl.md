> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/typelisturl](https://developer.apple.com/documentation/uikit/uipasteboard/typelisturl)

# typeListURL (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An array of pasteboard-item representation types for URL-type uniform type identifiers (UTIs), including `kUTTypeURL`. Related [UIPasteboard](../uipasteboard.md) properties are [url](url.md) and [urls](urls.md).

## Declaration

```swift
class var typeListURL: NSArray
```

## See Also

### Constants

- [typeListString](typeliststring.md): An array of pasteboard-item representation types for string-type uniform type identifiers (UTIs), including the `kUTTypeUTF8PlainText` and `kUTTypeText` types. Related [UIPasteboard](../uipasteboard.md) properties are [string](string.md) and [strings](strings.md).
- [typeListImage](typelistimage.md): An array of pasteboard-item representation types for image-type uniform type identifiers (UTIs), including `kUTTypePNG` and `kUTTypeJPEG`. Related [UIPasteboard](../uipasteboard.md) properties are [image](image.md) and [images](images.md).
- [typeListColor](typelistcolor.md): An array of pasteboard-item representation types for colors. Related [UIPasteboard](../uipasteboard.md) properties are [color](color.md) and [colors](colors.md).
- [typeAutomatic](typeautomatic.md): An array of pasteboard-item representation types with automatically-determined uniform type identifiers (UTIs).

# UIPasteboardTypeListURL (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An array of pasteboard-item representation types for URL-type uniform type identifiers (UTIs), including `kUTTypeURL`. Related [UIPasteboard](../uipasteboard.md) properties are [URL](url.md) and [URLs](urls.md).

## Declaration

```objectivec
extern NSArray<NSString *> * UIPasteboardTypeListURL;
```

## See Also

### Constants

- [UIPasteboardTypeListString](typeliststring.md): An array of pasteboard-item representation types for string-type uniform type identifiers (UTIs), including the `kUTTypeUTF8PlainText` and `kUTTypeText` types. Related [UIPasteboard](../uipasteboard.md) properties are [string](string.md) and [strings](strings.md).
- [UIPasteboardTypeListImage](typelistimage.md): An array of pasteboard-item representation types for image-type uniform type identifiers (UTIs), including `kUTTypePNG` and `kUTTypeJPEG`. Related [UIPasteboard](../uipasteboard.md) properties are [image](image.md) and [images](images.md).
- [UIPasteboardTypeListColor](typelistcolor.md): An array of pasteboard-item representation types for colors. Related [UIPasteboard](../uipasteboard.md) properties are [color](color.md) and [colors](colors.md).
- [UIPasteboardTypeAutomatic](typeautomatic.md): An array of pasteboard-item representation types with automatically-determined uniform type identifiers (UTIs).
