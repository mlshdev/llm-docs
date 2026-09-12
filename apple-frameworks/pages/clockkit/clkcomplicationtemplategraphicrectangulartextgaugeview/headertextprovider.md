> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgaugeview/headertextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgaugeview/headertextprovider)

# headerTextProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The header text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKTextProvider> @objc final var headerTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Accessing the Content

- [headerLabel](headerlabel.md): Deprecated. The SwiftUI view displayed by the template.
- [bodyTextProvider](bodytextprovider.md): Deprecated. The main body text to display in the complication.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
