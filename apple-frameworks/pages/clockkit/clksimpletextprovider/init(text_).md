> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimpletextprovider/init(text:)](https://developer.apple.com/documentation/clockkit/clksimpletextprovider/init(text:))

# init(text:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified long form text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(text: String)
```

## Parameters

- `text`: The text that you want to display. This value is assigned to the [text](text.md) property of your text provider object.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified content.

## See Also

### Creating a Text Provider

- [init(text:shortText:)](init%28text_shorttext_%29.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [init(text:shortText:accessibilityLabel:)](init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.

# textProviderWithText: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider with the specified long form text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithText:(NSString *) text;
```

## Parameters

- `text`: The text that you want to display. This value is assigned to the [text](text.md) property of your text provider object.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified content.

## See Also

### Creating a Text Provider

- [initWithText:](initwithtext_.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [textProviderWithText:shortText:](init%28text_shorttext_%29.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [initWithText:shortText:](initwithtext_shorttext_.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [textProviderWithText:shortText:accessibilityLabel:](init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
- [initWithText:shortText:accessibilityLabel:](initwithtext_shorttext_accessibilitylabel_.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
