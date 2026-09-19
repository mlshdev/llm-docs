> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallstacktext/line2textprovider

# line2TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The text to display on the bottom line of the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var line2TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

## See Also

### Setting the Complication Data

- [line1TextProvider](line1textprovider.md): Deprecated. The text to display on the top line of the complication.

# line2TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The text to display on the bottom line of the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * line2TextProvider;
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

## See Also

### Setting the Complication Data

- [line1TextProvider](line1textprovider.md): Deprecated. The text to display on the top line of the complication.
