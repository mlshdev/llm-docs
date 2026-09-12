> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargetallbody/headertextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetallbody/headertextprovider)

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

A tint color is applied to the header text to differentiate it from the other rows. In multicolor environments, the text provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [bodyTextProvider](bodytextprovider.md): Deprecated. The text to display in the body line.

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

A tint color is applied to the header text to differentiate it from the other rows. In multicolor environments, the text provider or template provide the tint color. In monochrome environments, the clock face provides the tint color.

## See Also

### Setting the Complication Data

- [bodyTextProvider](bodytextprovider.md): Deprecated. The text to display in the body line.
