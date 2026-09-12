> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtextstylerule/init(textmarkupattributes:textselector:)](https://developer.apple.com/documentation/avfoundation/avtextstylerule/init(textmarkupattributes:textselector:))

# init(textMarkupAttributes:textSelector:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a text style rule object with the specified style attributes and text range information.

## Declaration

```swift
init?(textMarkupAttributes: [String : Any] = [:], textSelector: String?)
```

## Parameters

- `textMarkupAttributes`: A dictionary of style attributes. For a list of supported keys and values that you can include in this dictionary, see `CMTextMarkup.h`.
- `textSelector`: A string contains an identifier for the ranges of text to which the style attributes should be applied. Eligible identifiers are determined by the media format and its corresponding text content. For example, the string could contain the CSS selectors used by the corresponding text in Web Video Text Tracks (WebVTT) markup. Specify `nil` if you want the style attributes to apply to all text in the item.

<a id="return-value"></a>

## Return Value

A text style rule object initialized with the specified attributes and range information.

## See Also

### Creating and initializing style rules

- [textStyleRules(fromPropertyList:)](textstylerules%28frompropertylist_%29.md): Creates an array of text style rule objects from the specified property-list object.
- [init(textMarkupAttributes:)](init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.

# initWithTextMarkupAttributes:textSelector: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a text style rule object with the specified style attributes and text range information.

## Declaration

```objectivec
- (instancetype) initWithTextMarkupAttributes:(NSDictionary<NSString *,id> *) textMarkupAttributes textSelector:(NSString *) textSelector;
```

## Parameters

- `textMarkupAttributes`: A dictionary of style attributes. For a list of supported keys and values that you can include in this dictionary, see `CMTextMarkup.h`.
- `textSelector`: A string contains an identifier for the ranges of text to which the style attributes should be applied. Eligible identifiers are determined by the media format and its corresponding text content. For example, the string could contain the CSS selectors used by the corresponding text in Web Video Text Tracks (WebVTT) markup. Specify `nil` if you want the style attributes to apply to all text in the item.

<a id="return-value"></a>

## Return Value

A text style rule object initialized with the specified attributes and range information.

## See Also

### Creating and initializing style rules

- [textStyleRulesFromPropertyList:](textstylerules%28frompropertylist_%29.md): Creates an array of text style rule objects from the specified property-list object.
- [textStyleRuleWithTextMarkupAttributes:](textstylerulewithtextmarkupattributes_.md): Creates a new text style rule object using the style attributes in the specified dictionary.
- [textStyleRuleWithTextMarkupAttributes:textSelector:](textstylerulewithtextmarkupattributes_textselector_.md): Creates a new text style rule object using the specified style attributes and text range information.
- [initWithTextMarkupAttributes:](init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.
