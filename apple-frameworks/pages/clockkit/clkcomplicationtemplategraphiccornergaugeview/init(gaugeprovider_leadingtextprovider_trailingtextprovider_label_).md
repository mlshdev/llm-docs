> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview/init(gaugeprovider:leadingtextprovider:trailingtextprovider:label:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview/init(gaugeprovider:leadingtextprovider:trailingtextprovider:label:))

# init(gaugeProvider:leadingTextProvider:trailingTextProvider:label:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with the provided gauge and view.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, leadingTextProvider: CLKTextProvider? = nil, trailingTextProvider: CLKTextProvider? = nil, label: Label)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `leadingTextProvider`: The text provider for the gauge’s leading text. The template supports multicolored text from this text provider.
- `trailingTextProvider`: The text provider for the gauge’s trailing text. The template supports multicolored text from this text provider.
- `label`: The SwiftUI view displayed by the template.
