> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview/trailingtextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview/trailingtextprovider)

# trailingTextProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The text provider for the gauge’s trailing text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKTextProvider?> @objc final var trailingTextProvider: CLKTextProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

The template supports multicolored text from this text provider.

## See Also

### Accessing the Content

- [label](label.md): Deprecated. The SwiftUI view displayed by the template.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](leadingtextprovider.md): Deprecated. The text provider for the gauge’s leading text.
