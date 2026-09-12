> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plottablevalue/value(_:_:)-13lvv](https://developer.apple.com/documentation/charts/plottablevalue/value(_:_:)-13lvv)

# value(\_:\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a parameter value with label and value.

## Declaration

```swift
static func value<S>(_ label: S, _ value: Value) -> PlottableValue<Value> where S : StringProtocol
```

## Parameters

- `label`: The label.
- `value`: The parameter’s value.
