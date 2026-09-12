> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargetable/headerimageprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetable/headerimageprovider)

# headerImageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An optional image to display in the header.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var headerImageProvider: CLKImageProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

A tint color is applied to the header image to differentiate it from the other rows. In multicolor environments, the image provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The text to display in the header line.
- [row1Column1TextProvider](row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.
- [column2Alignment](column2alignment.md): Deprecated. The alignment of the text in the second column.

# headerImageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An optional image to display in the header.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLKImageProvider * headerImageProvider;
```

<a id="Discussion"></a>

## Discussion

A tint color is applied to the header image to differentiate it from the other rows. In multicolor environments, the image provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The text to display in the header line.
- [row1Column1TextProvider](row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.
- [column2Alignment](column2alignment.md): Deprecated. The alignment of the text in the second column.
