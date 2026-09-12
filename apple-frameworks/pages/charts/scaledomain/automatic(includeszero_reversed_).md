> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/scaledomain/automatic(includeszero:reversed:)](https://developer.apple.com/documentation/charts/scaledomain/automatic(includeszero:reversed:))

# automatic(includesZero:reversed:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a scale domain configuration that infers the scale domain from data.

## Declaration

```swift
static func automatic(includesZero: Bool? = nil, reversed: Bool? = nil) -> AutomaticScaleDomain
```

## Parameters

- `includesZero`: Whether the scale domain should include zero (only applicable for numerical values).
- `reversed`: Whether the scale domain should be reversed (e.g., 100 … 0).
