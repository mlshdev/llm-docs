> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/aggregationoperation/encode(to:)

# encode(to:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Encodes the operation as a keyed container with a `type` discriminator and either `metric` (the metric name) or `label` (for custom operations).

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```
