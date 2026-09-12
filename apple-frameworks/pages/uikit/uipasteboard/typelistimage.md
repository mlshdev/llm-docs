> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/typelistimage](https://developer.apple.com/documentation/uikit/uipasteboard/typelistimage)

# typeListImage (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An array of pasteboard-item representation types for image-type uniform type identifiers (UTIs), including `kUTTypePNG` and `kUTTypeJPEG`. Related [UIPasteboard](../uipasteboard.md) properties are [image](image.md) and [images](images.md).

## Declaration

```swift
class var typeListImage: NSArray
```

## See Also

### Constants

- [typeListString](typeliststring.md): An array of pasteboard-item representation types for string-type uniform type identifiers (UTIs), including the `kUTTypeUTF8PlainText` and `kUTTypeText` types. Related [UIPasteboard](../uipasteboard.md) properties are [string](string.md) and [strings](strings.md).
- [typeListURL](typelisturl.md): An array of pasteboard-item representation types for URL-type uniform type identifiers (UTIs), including `kUTTypeURL`. Related [UIPasteboard](../uipasteboard.md) properties are [url](url.md) and [urls](urls.md).
- [typeListColor](typelistcolor.md): An array of pasteboard-item representation types for colors. Related [UIPasteboard](../uipasteboard.md) properties are [color](color.md) and [colors](colors.md).
- [typeAutomatic](typeautomatic.md): An array of pasteboard-item representation types with automatically-determined uniform type identifiers (UTIs).

# UIPasteboardTypeListImage (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An array of pasteboard-item representation types for image-type uniform type identifiers (UTIs), including `kUTTypePNG` and `kUTTypeJPEG`. Related [UIPasteboard](../uipasteboard.md) properties are [image](image.md) and [images](images.md).

## Declaration

```objectivec
extern NSArray<NSString *> * UIPasteboardTypeListImage;
```

## See Also

### Constants

- [UIPasteboardTypeListString](typeliststring.md): An array of pasteboard-item representation types for string-type uniform type identifiers (UTIs), including the `kUTTypeUTF8PlainText` and `kUTTypeText` types. Related [UIPasteboard](../uipasteboard.md) properties are [string](string.md) and [strings](strings.md).
- [UIPasteboardTypeListURL](typelisturl.md): An array of pasteboard-item representation types for URL-type uniform type identifiers (UTIs), including `kUTTypeURL`. Related [UIPasteboard](../uipasteboard.md) properties are [URL](url.md) and [URLs](urls.md).
- [UIPasteboardTypeListColor](typelistcolor.md): An array of pasteboard-item representation types for colors. Related [UIPasteboard](../uipasteboard.md) properties are [color](color.md) and [colors](colors.md).
- [UIPasteboardTypeAutomatic](typeautomatic.md): An array of pasteboard-item representation types with automatically-determined uniform type identifiers (UTIs).
