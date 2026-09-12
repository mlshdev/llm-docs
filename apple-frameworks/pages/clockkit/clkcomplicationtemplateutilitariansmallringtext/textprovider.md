> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateutilitariansmallringtext/textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitariansmallringtext/textprovider)

# textProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

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
**Availability:** watchOS 2.0+ (deprecated in 27.0)

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
