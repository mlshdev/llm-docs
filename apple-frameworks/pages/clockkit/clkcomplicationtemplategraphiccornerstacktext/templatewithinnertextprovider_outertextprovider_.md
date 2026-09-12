> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext/templatewithinnertextprovider:outertextprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext/templatewithinnertextprovider:outertextprovider:)

# templateWithInnerTextProvider:outerTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a template that has an inner line of text and an outer text element.

## Declaration

```objectivec
+ (instancetype) templateWithInnerTextProvider:(CLKTextProvider *) innerTextProvider outerTextProvider:(CLKTextProvider *) outerTextProvider;
```

## Parameters

- `innerTextProvider`: The text provider for the inner line of text. The template supports multicolored text from this text provider.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [initWithInnerTextProvider:outerTextProvider:](init%28innertextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has an inner line of text and an outer text element.
