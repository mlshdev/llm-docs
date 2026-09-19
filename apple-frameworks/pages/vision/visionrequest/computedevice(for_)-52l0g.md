> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/visionrequest/computedevice(for:)-52l0g

# computeDevice(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Returns the compute device for a compute stage.

## Declaration

```swift
func computeDevice(for computeStage: ComputeStage) -> MLComputeDevice?
```

<a id="return-value"></a>

## Return Value

The current compute device; otherwise, `nil` if one isn’t assigned.

<a id="discussion"></a>

## Discussion

- `computeStage: `The compute stage to inspect.
