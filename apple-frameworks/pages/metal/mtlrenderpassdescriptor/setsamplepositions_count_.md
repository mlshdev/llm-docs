> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/setsamplepositions:count:](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/setsamplepositions:count:)

# setSamplePositions:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Sets the programmable sample positions for a render pass.

## Declaration

```objectivec
- (void) setSamplePositions:(const MTLSamplePosition *) positions count:(NSUInteger) count;
```

## Parameters

- `positions`: An array of programmable sample positions for the render pass.
- `count`: The number of elements, which needs to match the render pass sample count, or `0` to disable custom sample positions.

## Mentioned In

- [Positioning samples programmatically](../positioning-samples-programmatically.md)

<a id="discussion"></a>

## Discussion

Programmable sample positions need to be floating-point values in the `[0.0, 1.0)` range along each axis, with the origin `(0,0)` defined at the top-left corner. Values can be set from `0/16` up to `15/16`, inclusive, in 1`/16` increments along each axis.

If the value of `count` is `0`, the GPU uses the default sample positions for the render pass.

> **Note**

>  Call the [supportsTextureSampleCount:](../mtldevice/supportstexturesamplecount%28__%29.md) method to determine whether the device object supports a specific sample count.

## See Also

### Using programmable sample positions

- [MTLSamplePositionMake](../mtlsamplepositionmake%28____%29.md): Returns a new sample position on a subpixel grid.
- [getSamplePositions:count:](getsamplepositions_count_.md): Retrieves the programmable sample positions set for a render pass.
