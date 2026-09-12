> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/scaletype/symmetriclog(slopeatzero:)](https://developer.apple.com/documentation/charts/scaletype/symmetriclog(slopeatzero:))

# symmetricLog(slopeAtZero:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A number scale where each range value y can be expressed as a symmetric log function of the domain value x, with `y = a * sign(x) * log(1 + |x * slopeAtZero|) + b`.

## Declaration

```swift
static func symmetricLog(slopeAtZero: Double) -> ScaleType
```

## Parameters

- `slopeAtZero`: A positive constant that controls the slope of the symmetric log function at zero.
