> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtextstylerule/textstylerules(frompropertylist:)](https://developer.apple.com/documentation/avfoundation/avtextstylerule/textstylerules(frompropertylist:))

# textStyleRules(fromPropertyList:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates an array of text style rule objects from the specified property-list object.

## Declaration

```swift
class func textStyleRules(fromPropertyList plist: Any) -> [AVTextStyleRule]?
```

## Parameters

- `plist`: A property-list object containing the text style data.

<a id="return-value"></a>

## Return Value

An array of `AVTextStyleRule` objects corresponding to the style information in the property-list object.

<a id="Discussion"></a>

## Discussion

Use this method to create new text style rule objects based on data you previously converted to a property-list format using the [propertyList(for:)](propertylist%28for_%29.md) class method.

## See Also

### Creating and initializing style rules

- [init(textMarkupAttributes:)](init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.
- [init(textMarkupAttributes:textSelector:)](init%28textmarkupattributes_textselector_%29.md): Creates a text style rule object with the specified style attributes and text range information.

# textStyleRulesFromPropertyList: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates an array of text style rule objects from the specified property-list object.

## Declaration

```objectivec
+ (NSArray<AVTextStyleRule *> *) textStyleRulesFromPropertyList:(id) plist;
```

## Parameters

- `plist`: A property-list object containing the text style data.

<a id="return-value"></a>

## Return Value

An array of `AVTextStyleRule` objects corresponding to the style information in the property-list object.

<a id="Discussion"></a>

## Discussion

Use this method to create new text style rule objects based on data you previously converted to a property-list format using the [propertyListForTextStyleRules:](propertylist%28for_%29.md) class method.

## See Also

### Creating and initializing style rules

- [textStyleRuleWithTextMarkupAttributes:](textstylerulewithtextmarkupattributes_.md): Creates a new text style rule object using the style attributes in the specified dictionary.
- [textStyleRuleWithTextMarkupAttributes:textSelector:](textstylerulewithtextmarkupattributes_textselector_.md): Creates a new text style rule object using the specified style attributes and text range information.
- [initWithTextMarkupAttributes:](init%28textmarkupattributes_%29.md): Creates a text style rule object with the specified style attributes.
- [initWithTextMarkupAttributes:textSelector:](init%28textmarkupattributes_textselector_%29.md): Creates a text style rule object with the specified style attributes and text range information.
