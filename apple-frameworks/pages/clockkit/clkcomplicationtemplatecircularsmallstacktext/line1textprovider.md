> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallstacktext/line1textprovider

# line1TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The text to display on the top line of the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var line1TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

## See Also

### Setting the Complication Data

- [line2TextProvider](line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

# line1TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The text to display on the top line of the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * line1TextProvider;
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

## See Also

### Setting the Complication Data

- [line2TextProvider](line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.
