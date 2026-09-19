> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgaugeview/bodytextprovider

# bodyTextProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The main body text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKTextProvider> @objc final var bodyTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Accessing the Content

- [headerLabel](headerlabel.md): Deprecated. The SwiftUI view displayed by the template.
- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
