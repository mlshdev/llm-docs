> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargestacktext/line2textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargestacktext/line2textprovider)

# line2TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

The text to display on the bottom line of the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var line2TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

When the [highlightLine2](highlightline2.md) property is [true](https://developer.apple.com/documentation/swift/true), a tint color is applied to this text. In multicolor environments, the text provider or template provides the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [highlightLine2](highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.
- [line1TextProvider](line1textprovider.md): Deprecated. The text to display on the top line of the complication.

# line2TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

The text to display on the bottom line of the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * line2TextProvider;
```

<a id="Discussion"></a>

## Discussion

Space for text is limited in this particular template so keep strings as short as possible.

When the [highlightLine2](highlightline2.md) property is [true](https://developer.apple.com/documentation/swift/true), a tint color is applied to this text. In multicolor environments, the text provider or template provides the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [highlightLine2](highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.
- [line1TextProvider](line1textprovider.md): Deprecated. The text to display on the top line of the complication.
