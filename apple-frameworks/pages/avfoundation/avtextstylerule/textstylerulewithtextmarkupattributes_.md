> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtextstylerule/textstylerulewithtextmarkupattributes:](https://developer.apple.com/documentation/avfoundation/avtextstylerule/textstylerulewithtextmarkupattributes:)

# textStyleRuleWithTextMarkupAttributes:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new text style rule object using the style attributes in the specified dictionary.

## Declaration

```objectivec
+ (AVTextStyleRule *) textStyleRuleWithTextMarkupAttributes:(NSDictionary<NSString *,id> *) textMarkupAttributes;
```

## Parameters

- `textMarkupAttributes`: A dictionary of style attributes. For a list of supported keys and values that you can include in this dictionary, see `CMTextMarkup.h`.

<a id="return-value"></a>

## Return Value

A new text style rule object with the specified attributes.

<a id="Discussion"></a>

## Discussion

This method sets the [textSelector](textselector.md) property of the style object to `nil`, which causes the rules to be applied to all of the text in the media item.

## See Also

### Creating and initializing style rules

- [textStyleRulesFromPropertyList:](textstylerules%28frompropertylist_%29.md): Creates an array of text style rule objects from the specified property-list object.
- [textStyleRuleWithTextMarkupAttributes:textSelector:](textstylerulewithtextmarkupattributes_textselector_.md): Creates a new text style rule object using the specified style attributes and text range information.
- [initWithTextMarkupAttributes:](init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.
- [initWithTextMarkupAttributes:textSelector:](init%28textmarkupattributes_textselector_%29.md): Creates a text style rule object with the specified style attributes and text range information.
