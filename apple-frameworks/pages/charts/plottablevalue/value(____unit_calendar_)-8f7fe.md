> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plottablevalue/value(_:_:unit:calendar:)-8f7fe](https://developer.apple.com/documentation/charts/plottablevalue/value(_:_:unit:calendar:)-8f7fe)

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
