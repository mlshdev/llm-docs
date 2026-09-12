> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallcolumnstext/row2column2textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallcolumnstext/row2column2textprovider)

# row2Column2TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The text to display in the second column of the second row.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var row2Column2TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

When the [highlightColumn2](highlightcolumn2.md) property is [true](https://developer.apple.com/documentation/swift/true), a tint color is applied to this text. In multicolor environments, the text provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [row1Column1TextProvider](row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [column2Alignment](column2alignment.md): Deprecated. The alignment of the text in the second column.
- [highlightColumn2](highlightcolumn2.md): Deprecated. A Boolean value indicating which column should be drawn with a highlight.

# row2Column2TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The text to display in the second column of the second row.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * row2Column2TextProvider;
```

<a id="Discussion"></a>

## Discussion

When the [highlightColumn2](highlightcolumn2.md) property is [true](https://developer.apple.com/documentation/swift/true), a tint color is applied to this text. In multicolor environments, the text provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [row1Column1TextProvider](row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [column2Alignment](column2alignment.md): Deprecated. The alignment of the text in the second column.
- [highlightColumn2](highlightcolumn2.md): Deprecated. A Boolean value indicating which column should be drawn with a highlight.
