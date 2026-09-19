> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/minmaxscaler/transformer/init(desiredrange:fittedrange:)

# init(desiredRange:fittedRange:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a minmax scaling transformer.

## Declaration

```swift
init(desiredRange: ClosedRange<Element>, fittedRange: ClosedRange<Element>)
```

## Parameters

- `desiredRange`: The desired range of transformed values.
- `fittedRange`: The range derived by the estimator when fitting.
