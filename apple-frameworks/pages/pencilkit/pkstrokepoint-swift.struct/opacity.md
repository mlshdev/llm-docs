> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepoint-swift.struct/opacity](https://developer.apple.com/documentation/pencilkit/pkstrokepoint-swift.struct/opacity)

# opacity

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Opacity of the point.

## Declaration

```swift
var opacity: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The opacity of a [PKStrokePoint](../pkstrokepoint-swift.struct.md) has a range of `0-2`, which is a multiplier of the [PKInk](../pkink-swift.struct.md) opacity.

## See Also

### Getting the point’s drawing data

- [size](size.md): The size of this point.
- [secondaryScale](secondaryscale.md)
- [threshold](threshold.md): The alpha threshold for clipping the stroke rendering for supported inks.
- [lateralJitter](lateraljitter.md): The amount of lateral particle jitter at the stroke edge for supported inks.
