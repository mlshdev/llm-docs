> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallringtext/textprovider

# textProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var textProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

## See Also

### Setting the Complication Data

- [ringStyle](ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](fillfraction.md): Deprecated. The fraction of the ring to fill.

# textProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

The text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * textProvider;
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

## See Also

### Setting the Complication Data

- [ringStyle](ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](fillfraction.md): Deprecated. The fraction of the ring to fill.
