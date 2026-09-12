> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/headerimageprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/headerimageprovider)

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
- [body1TextProvider](body1textprovider.md): Deprecated. The top line of body text.
- [body2TextProvider](body2textprovider.md): Deprecated. An optional second line of body text.

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
- [body1TextProvider](body1textprovider.md): Deprecated. The top line of body text.
- [body2TextProvider](body2textprovider.md): Deprecated. An optional second line of body text.
