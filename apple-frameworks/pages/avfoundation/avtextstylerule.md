> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtextstylerule](https://developer.apple.com/documentation/avfoundation/avtextstylerule)

# AVTextStyleRule (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that represents the text styling rules to apply to a media item’s textual content.

## Declaration

```swift
class AVTextStyleRule
```

<a id="overview"></a>

## Overview

You use text style objects to format subtitles, closed captions, and other text-related content of the item. The system applies these rules to all or part of the text of the media item.

## Topics

### Creating and initializing style rules

- [textStyleRules(fromPropertyList:)](avtextstylerule/textstylerules%28frompropertylist_%29.md): Creates an array of text style rule objects from the specified property-list object.
- [init(textMarkupAttributes:)](avtextstylerule/init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.
- [init(textMarkupAttributes:textSelector:)](avtextstylerule/init%28textmarkupattributes_textselector_%29.md): Creates a text style rule object with the specified style attributes and text range information.

### Accessing the style attributes

- [textMarkupAttributes](avtextstylerule/textmarkupattributes.md): A dictionary of text style attributes to apply to the text.
- [textSelector](avtextstylerule/textselector.md): A string that identifies the text the style attributes apply to.

### Exporting the style rules

- [propertyList(for:)](avtextstylerule/propertylist%28for_%29.md): Converts one or more text style rules into a serializable property list object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing text style rules

- [textStyleRules](avplayeritem/textstylerules.md): An array of text style rules that specify the formatting and presentation of Web Video Text Tracks (WebVTT) subtitles.

# AVTextStyleRule (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that represents the text styling rules to apply to a media item’s textual content.

## Declaration

```objectivec
@interface AVTextStyleRule : NSObject
```

<a id="overview"></a>

## Overview

You use text style objects to format subtitles, closed captions, and other text-related content of the item. The system applies these rules to all or part of the text of the media item.

## Topics

### Creating and initializing style rules

- [textStyleRulesFromPropertyList:](avtextstylerule/textstylerules%28frompropertylist_%29.md): Creates an array of text style rule objects from the specified property-list object.
- [textStyleRuleWithTextMarkupAttributes:](avtextstylerule/textstylerulewithtextmarkupattributes_.md): Creates a new text style rule object using the style attributes in the specified dictionary.
- [textStyleRuleWithTextMarkupAttributes:textSelector:](avtextstylerule/textstylerulewithtextmarkupattributes_textselector_.md): Creates a new text style rule object using the specified style attributes and text range information.
- [initWithTextMarkupAttributes:](avtextstylerule/init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.
- [initWithTextMarkupAttributes:textSelector:](avtextstylerule/init%28textmarkupattributes_textselector_%29.md): Creates a text style rule object with the specified style attributes and text range information.

### Accessing the style attributes

- [textMarkupAttributes](avtextstylerule/textmarkupattributes.md): A dictionary of text style attributes to apply to the text.
- [textSelector](avtextstylerule/textselector.md): A string that identifies the text the style attributes apply to.

### Exporting the style rules

- [propertyListForTextStyleRules:](avtextstylerule/propertylist%28for_%29.md): Converts one or more text style rules into a serializable property list object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing text style rules

- [textStyleRules](avplayeritem/textstylerules.md): An array of text style rules that specify the formatting and presentation of Web Video Text Tracks (WebVTT) subtitles.
