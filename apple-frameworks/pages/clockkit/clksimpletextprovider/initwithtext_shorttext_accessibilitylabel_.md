> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clksimpletextprovider/initwithtext:shorttext:accessibilitylabel:

# initWithText:shortText:accessibilityLabel:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates and returns a text provider with the text strings and an accessible string.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text shortText:(NSString *) shortText accessibilityLabel:(NSString *) accessibilityLabel;
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
- [textProviderWithText:shortText:accessibilityLabel:](init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
