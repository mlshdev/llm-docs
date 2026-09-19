> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgaugeview/init(headerlabel:headertextprovider:bodytextprovider:gaugeprovider:)

# init(headerLabel:headerTextProvider:bodyTextProvider:gaugeProvider:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template that has a header row with a SwiftUI view and text, body text, and a gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(headerLabel: Label, headerTextProvider: CLKTextProvider, bodyTextProvider: CLKTextProvider, gaugeProvider: CLKGaugeProvider)
```

## Parameters

- `headerLabel`: The SwiftUI view displayed by the template.
- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `bodyTextProvider`: The text provider for the body text. The template supports multicolored text from this text provider.
- `gaugeProvider`: The gauge provider for the template.
