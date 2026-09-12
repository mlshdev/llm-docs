> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/scaletype/power(exponent:)](https://developer.apple.com/documentation/charts/scaletype/power(exponent:))

# power(exponent:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A number scale where each range value y can be expressed as a power function of the domain value x, with `y = a * pow(x, exponent) + b`.

## Declaration

```swift
static func power(exponent: Double) -> ScaleType
```

## Parameters

- `exponent`: The exponent of the power function.
