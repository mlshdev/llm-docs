> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularstacktext/line2textprovider

# line2TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+ (deprecated in 27.2)

The text to display on the bottom row.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var line2TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [line1TextProvider](line1textprovider.md): Deprecated. The text to display on the top row.

# line2TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+ (deprecated in 27.2)

The text to display on the bottom row.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * line2TextProvider;
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [line1TextProvider](line1textprovider.md): Deprecated. The text to display on the top row.
