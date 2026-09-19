> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/transform(at:)

# transform(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Computes the prim’s composed local transform at the specified time.

## Declaration

```swift
func transform(at time: USDStage.TimeCode = .default) -> USDValue.Matrix4d?
```

## Parameters

- `time`: The time at which to evaluate the transform. Defaults to `.default`.

<a id="return-value"></a>

## Return Value

The composed local transformation matrix, or `nil` if the prim is not transformable.
