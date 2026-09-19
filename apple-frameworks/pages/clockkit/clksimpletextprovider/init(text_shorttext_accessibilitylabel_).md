> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clksimpletextprovider/init(text:shorttext:accessibilitylabel:)

# init(text:shortText:accessibilityLabel:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

Creates and returns a text provider with the text strings and an accessible string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(text: String, shortText: String?, accessibilityLabel: String?)
```

## Parameters

- `text`: The text that you want to display.
- `shortText`: A shorter version of the value in the `text` parameter that conveys the same information.
- `accessibilityLabel`: A succinct string that identifies the purpose of the text.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified content.

## See Also

### Creating a Text Provider

- [init(text:)](init%28text_%29.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [init(text:shortText:)](init%28text_shorttext_%29.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.

# textProviderWithText:shortText:accessibilityLabel: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

Creates and returns a text provider with the text strings and an accessible string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithText:(NSString *) text shortText:(NSString *) shortText accessibilityLabel:(NSString *) accessibilityLabel;
```

## Parameters

- `text`: The text that you want to display.
- `shortText`: A shorter version of the value in the `text` parameter that conveys the same information.
- `accessibilityLabel`: A succinct string that identifies the purpose of the text.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified content.

## See Also

### Creating a Text Provider

- [textProviderWithText:](init%28text_%29.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [initWithText:](initwithtext_.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [textProviderWithText:shortText:](init%28text_shorttext_%29.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [initWithText:shortText:](initwithtext_shorttext_.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [initWithText:shortText:accessibilityLabel:](initwithtext_shorttext_accessibilitylabel_.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
