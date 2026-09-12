> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstacktext/init(line1textprovider:line2textprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstacktext/init(line1textprovider:line2textprovider:))

# init(line1TextProvider:line2TextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with two rows of text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(line1TextProvider: CLKTextProvider, line2TextProvider: CLKTextProvider)
```

## Parameters

- `line1TextProvider`: The text provider for the top row of text. The template supports multicolored text from this text provider.
- `line2TextProvider`: The text provider for the bottom row of text. The template supports multicolored text from this text provider.

# initWithLine1TextProvider:line2TextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with two rows of text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (instancetype) initWithLine1TextProvider:(CLKTextProvider *) line1TextProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1TextProvider`: The text provider for the top row of text. The template supports multicolored text from this text provider.
- `line2TextProvider`: The text provider for the bottom row of text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [templateWithLine1TextProvider:line2TextProvider:](templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template with two rows of text.
