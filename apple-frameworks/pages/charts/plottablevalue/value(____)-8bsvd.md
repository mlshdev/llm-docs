> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/plottablevalue/value(_:_:)-8bsvd

# value(\_:\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a parameter value with label and value.

## Declaration

```swift
static func value(_ labelResource: LocalizedStringResource, _ range: Range<Value>) -> PlottableValue<Value> where Value : Comparable
```

## Parameters

- `labelResource`: The localized string resource for label.
- `range`: The parameter’s value.
