> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeview/centertextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeview/centertextprovider)

# centerTextProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The text provider for the center text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKTextProvider> @objc var centerTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The template supports multicolored text from this text provider.

## See Also

### Accessing the Content

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge provider for the template.
- [bottomLabel](bottomlabel.md): Deprecated. The SwiftUI view displayed by the template.
