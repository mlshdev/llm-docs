> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plottablevalue/value(_:_:)-7k0m0](https://developer.apple.com/documentation/charts/plottablevalue/value(_:_:)-7k0m0)

# value(\_:\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a parameter value with label key and value.

## Declaration

```swift
static func value(_ labelKey: LocalizedStringKey, _ range: ChartBinRange<Value>) -> PlottableValue<Value> where Value : Comparable
```

## Parameters

- `labelKey`: The localized string key for label.
- `range`: The parameter’s value.
