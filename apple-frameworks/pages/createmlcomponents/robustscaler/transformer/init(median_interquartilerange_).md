> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/robustscaler/transformer/init(median:interquartilerange:)

# init(median:interQuartileRange:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a robust scaling transformer.

## Declaration

```swift
init(median: Element, interQuartileRange: Element)
```

## Parameters

- `median`: The median used for offsetting.
- `interQuartileRange`: The inter quartile range used for scaling.
