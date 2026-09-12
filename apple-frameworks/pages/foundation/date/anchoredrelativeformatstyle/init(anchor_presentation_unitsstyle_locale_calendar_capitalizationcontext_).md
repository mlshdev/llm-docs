> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/anchoredrelativeformatstyle/init(anchor:presentation:unitsstyle:locale:calendar:capitalizationcontext:)](https://developer.apple.com/documentation/foundation/date/anchoredrelativeformatstyle/init(anchor:presentation:unitsstyle:locale:calendar:capitalizationcontext:))

# init(anchor:presentation:unitsStyle:locale:calendar:capitalizationContext:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Create a relative format style that is detached from the system time, and instead formats an anchor date relative to the format input.

## Declaration

```swift
init(anchor: Date, presentation: Date.AnchoredRelativeFormatStyle.Presentation = .numeric, unitsStyle: Date.AnchoredRelativeFormatStyle.UnitsStyle = .wide, locale: Locale = .autoupdatingCurrent, calendar: Calendar = .autoupdatingCurrent, capitalizationContext: FormatStyleCapitalizationContext = .unknown)
```

## Parameters

- `anchor`: The date the formatted output is referring to.
