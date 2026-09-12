> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeview/init(gaugeprovider:centertextprovider:bottomlabel:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeview/init(gaugeprovider:centertextprovider:bottomlabel:))

# init(gaugeProvider:centerTextProvider:bottomLabel:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has an open circular gauge, a small amount of text in the center, and a small SwiftUI view at the bottom.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, centerTextProvider: CLKTextProvider, bottomLabel: Label)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.
- `bottomLabel`: The SwiftUI view displayed by the template.
