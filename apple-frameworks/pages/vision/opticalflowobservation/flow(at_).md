> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/opticalflowobservation/flow(at:)

# flow(at:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Returns the optical flow for the specified location in the observation image.

## Declaration

```swift
func flow(at point: NormalizedPoint) -> (Float, Float)
```
