> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallstacktext/templatewithline1textprovider:line2textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallstacktext/templatewithline1textprovider:line2textprovider:)

# templateWithLine1TextProvider:line2TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has two lines of text.

## Declaration

```objectivec
+ (instancetype) templateWithLine1TextProvider:(CLKTextProvider *) line1TextProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1TextProvider`: A text provider for the top line of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `line2TextProvider`: A text provider for the bottom line of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two lines of text.
