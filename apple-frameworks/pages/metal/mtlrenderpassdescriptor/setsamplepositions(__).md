> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/setsamplepositions(_:)](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/setsamplepositions(_:))

# setSamplePositions(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS

Sets the programmable sample positions for a render pass.

## Declaration

```swift
func setSamplePositions(_ positions: [MTLSamplePosition])
```

## Parameters

- `positions`: An array of programmable sample positions for the render pass with the the same number of elements as the render pass sample count, or an empty array to disable custom sample positions.

<a id="discussion"></a>

## Discussion

Programmable sample positions need to be floating-point values in the `[0.0, 1.0)` range along each axis, with the origin `(0,0)` defined at the top-left corner. Values can be set from `0/16` up to `15/16`, inclusive, in `1/16` increments along each axis.

If the length of the array is `0`, the GPU uses the default sample positions for the render pass.

> **Note**

>  Call the [supportsTextureSampleCount(\_:)](../mtldevice/supportstexturesamplecount%28__%29.md) method to determine whether the device object supports a specific sample count.

## See Also

### Using programmable sample positions

- [MTLSamplePositionMake(\_:\_:)](../mtlsamplepositionmake%28____%29.md): Returns a new sample position on a subpixel grid.
- [getSamplePositions()](getsamplepositions%28%29.md): Returns the programmable sample positions set for a render pass.
