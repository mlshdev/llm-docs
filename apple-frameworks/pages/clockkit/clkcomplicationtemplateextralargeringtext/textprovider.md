> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargeringtext/textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargeringtext/textprovider)

# textProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

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

- [fillFraction](fillfraction.md): Deprecated. Setting the Complication Data.
- [ringStyle](ringstyle.md): Deprecated. The style of the progress ring.

# textProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

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

- [fillFraction](fillfraction.md): Deprecated. Setting the Complication Data.
- [ringStyle](ringstyle.md): Deprecated. The style of the progress ring.
