> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstacktext/templatewithline1textprovider:line2textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstacktext/templatewithline1textprovider:line2textprovider:)

# templateWithLine1TextProvider:line2TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template with two rows of text.

## Declaration

```objectivec
+ (instancetype) templateWithLine1TextProvider:(CLKTextProvider *) line1TextProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1TextProvider`: The text provider for the top row of text. The template supports multicolored text from this text provider.
- `line2TextProvider`: The text provider for the bottom row of text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template with two rows of text.
