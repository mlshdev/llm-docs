> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeview/init(gaugeprovider:label:)

# init(gaugeProvider:label:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template with a closed circular gauge, and a SwiftUI view in the center.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, label: Label)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `label`: The SwiftUI view displayed by the template.
