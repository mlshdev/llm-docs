> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/plottablevalue/value(_:_:unit:calendar:)-8f7fe

# value(\_:\_:unit:calendar:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a parameter value with label key and value.

## Declaration

```swift
static func value(_ labelKey: LocalizedStringKey, _ date: Date, unit: Calendar.Component, calendar: Calendar? = nil) -> PlottableValue<Value> where Value == Date
```

## Parameters

- `labelKey`: The localized string key for label.
