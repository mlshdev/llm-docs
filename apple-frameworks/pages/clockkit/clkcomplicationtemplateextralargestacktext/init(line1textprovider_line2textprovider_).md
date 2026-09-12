> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargestacktext/init(line1textprovider:line2textprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargestacktext/init(line1textprovider:line2textprovider:))

# init(line1TextProvider:line2TextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has two rows of text.

## Declaration

```swift
init(line1TextProvider: CLKTextProvider, line2TextProvider: CLKTextProvider)
```

## Parameters

- `line1TextProvider`: A text provider for the top row of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `line2TextProvider`: A text provider for the bottom row of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

# initWithLine1TextProvider:line2TextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has two rows of text.

## Declaration

```objectivec
- (instancetype) initWithLine1TextProvider:(CLKTextProvider *) line1TextProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1TextProvider`: A text provider for the top row of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `line2TextProvider`: A text provider for the bottom row of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [templateWithLine1TextProvider:line2TextProvider:](templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template that has two rows of text.
