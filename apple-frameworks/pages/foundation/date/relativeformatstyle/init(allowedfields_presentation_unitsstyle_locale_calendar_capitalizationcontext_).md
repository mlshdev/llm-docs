> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/relativeformatstyle/init(allowedfields:presentation:unitsstyle:locale:calendar:capitalizationcontext:)

# init(allowedFields:presentation:unitsStyle:locale:calendar:capitalizationContext:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
init(allowedFields: Set<Date.RelativeFormatStyle.Field>, presentation: Date.RelativeFormatStyle.Presentation = .numeric, unitsStyle: Date.RelativeFormatStyle.UnitsStyle = .wide, locale: Locale = .autoupdatingCurrent, calendar: Calendar = .autoupdatingCurrent, capitalizationContext: FormatStyleCapitalizationContext = .unknown)
```
