> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/strings](https://developer.apple.com/documentation/uikit/uipasteboard/strings)

# strings (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of strings in all pasteboard items.

## Declaration

```swift
var strings: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is an array of [NSString](../../foundation/nsstring.md) objects. The associated array of representation types is [typeListString](typeliststring.md), which includes type `kUTTypeUTF8PlainText`. Setting this property replaces all current items in the pasteboard with the new items.  The returned array may have fewer objects than the number of pasteboard items; this happens if a pasteboard item does not have a value of the indicated type.

> **Note**

>  Do not use this property to determine if a pasteboard contains string data. Instead, use the [hasStrings](hasstrings.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [image](image.md): The image object of the first pasteboard item.
- [images](images.md): An array of image objects in all pasteboard items.
- [url](url.md): The URL object of the first pasteboard item.
- [urls](urls.md): An array of URL objects in all pasteboard items.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.

# strings (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of strings in all pasteboard items.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * strings;
```

<a id="Discussion"></a>

## Discussion

The value stored in this property is an array of [NSString](../../foundation/nsstring.md) objects. The associated array of representation types is [UIPasteboardTypeListString](typeliststring.md), which includes type `kUTTypeUTF8PlainText`. Setting this property replaces all current items in the pasteboard with the new items.  The returned array may have fewer objects than the number of pasteboard items; this happens if a pasteboard item does not have a value of the indicated type.

> **Note**

>  Do not use this property to determine if a pasteboard contains string data. Instead, use the [hasStrings](hasstrings.md) property.

## See Also

### Getting and setting pasteboard items of standard data types

- [string](string.md): The string value of the first pasteboard item.
- [image](image.md): The image object of the first pasteboard item.
- [images](images.md): An array of image objects in all pasteboard items.
- [URL](url.md): The URL object of the first pasteboard item.
- [URLs](urls.md): An array of URL objects in all pasteboard items.
- [color](color.md): The color object of the first pasteboard item.
- [colors](colors.md): An array of color objects in all pasteboard items.
