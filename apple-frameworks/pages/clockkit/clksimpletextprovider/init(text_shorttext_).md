> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimpletextprovider/init(text:shorttext:)](https://developer.apple.com/documentation/clockkit/clksimpletextprovider/init(text:shorttext:))

# init(text:shortText:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with both long and short versions of the text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(text: String, shortText: String?)
```

## Parameters

- `text`: The text that you want to display. This value is assigned to the [text](text.md) property of your text provider object.
- `shortText`: A shorter version of the value in the `text` parameter that conveys the same information.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified content.

## See Also

### Creating a Text Provider

- [init(text:)](init%28text_%29.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [init(text:shortText:accessibilityLabel:)](init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.

# textProviderWithText:shortText: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with both long and short versions of the text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithText:(NSString *) text shortText:(NSString *) shortText;
```

## Parameters

- `text`: The text that you want to display. This value is assigned to the [text](text.md) property of your text provider object.
- `shortText`: A shorter version of the value in the `text` parameter that conveys the same information.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified content.

## See Also

### Creating a Text Provider

- [textProviderWithText:](init%28text_%29.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [initWithText:](initwithtext_.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [initWithText:shortText:](initwithtext_shorttext_.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [textProviderWithText:shortText:accessibilityLabel:](init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
- [initWithText:shortText:accessibilityLabel:](initwithtext_shorttext_accessibilitylabel_.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
