> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/standardscaler/transformer/init(mean:standarddeviation:)

# init(mean:standardDeviation:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a standard scaling transformer.

## Declaration

```swift
init(mean: Element, standardDeviation: Element)
```

## Parameters

- `mean`: The mean used for offsetting.
- `standardDeviation`: The standard deviation used for scaling.
