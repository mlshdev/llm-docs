> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdtransformoperation/transform(at:)

# transform(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Computes the transformation matrix at the specified time.

## Declaration

```swift
func transform(at time: USDStage.TimeCode) -> USDValue.Matrix4d
```

## Parameters

- `time`: The time at which to evaluate the operation.

<a id="return-value"></a>

## Return Value

The transformation matrix.
