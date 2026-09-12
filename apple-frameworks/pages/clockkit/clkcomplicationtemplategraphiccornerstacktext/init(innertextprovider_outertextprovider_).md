> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext/init(innertextprovider:outertextprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext/init(innertextprovider:outertextprovider:))

# init(innerTextProvider:outerTextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has an inner line of text and an outer text element.

## Declaration

```swift
init(innerTextProvider: CLKTextProvider, outerTextProvider: CLKTextProvider)
```

## Parameters

- `innerTextProvider`: The text provider for the inner line of text. The template supports multicolored text from this text provider.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

# initWithInnerTextProvider:outerTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has an inner line of text and an outer text element.

## Declaration

```objectivec
- (instancetype) initWithInnerTextProvider:(CLKTextProvider *) innerTextProvider outerTextProvider:(CLKTextProvider *) outerTextProvider;
```

## Parameters

- `innerTextProvider`: The text provider for the inner line of text. The template supports multicolored text from this text provider.
- `outerTextProvider`: The text provider for the outer line of text. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [templateWithInnerTextProvider:outerTextProvider:](templatewithinnertextprovider_outertextprovider_.md): Deprecated. Returns a template that has an inner line of text and an outer text element.
