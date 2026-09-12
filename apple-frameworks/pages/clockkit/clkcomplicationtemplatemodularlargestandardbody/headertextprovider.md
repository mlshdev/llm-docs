> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/headertextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/headertextprovider)

# headerTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The text to display in the header line.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var headerTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The width of the header image determines how much space is available for displaying text. A tint color is applied to the header text to differentiate it from the body text rows. In multicolor environments, the text provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [headerImageProvider](headerimageprovider.md): Deprecated. An optional image to display in the header.
- [body1TextProvider](body1textprovider.md): Deprecated. The top line of body text.
- [body2TextProvider](body2textprovider.md): Deprecated. An optional second line of body text.

# headerTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The text to display in the header line.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * headerTextProvider;
```

<a id="Discussion"></a>

## Discussion

The width of the header image determines how much space is available for displaying text. A tint color is applied to the header text to differentiate it from the body text rows. In multicolor environments, the text provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [headerImageProvider](headerimageprovider.md): Deprecated. An optional image to display in the header.
- [body1TextProvider](body1textprovider.md): Deprecated. The top line of body text.
- [body2TextProvider](body2textprovider.md): Deprecated. An optional second line of body text.
