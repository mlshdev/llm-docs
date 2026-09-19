> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview/gaugeprovider

# gaugeProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The gauge to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKGaugeProvider> @objc final var gaugeProvider: CLKGaugeProvider { get set }
```

## See Also

### Accessing the Content

- [label](label.md): Deprecated. The SwiftUI view displayed by the template.
- [leadingTextProvider](leadingtextprovider.md): Deprecated. The text provider for the gauge’s leading text.
- [trailingTextProvider](trailingtextprovider.md): Deprecated. The text provider for the gauge’s trailing text.
