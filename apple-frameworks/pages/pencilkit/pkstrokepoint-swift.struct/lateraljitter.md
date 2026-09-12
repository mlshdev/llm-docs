> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepoint-swift.struct/lateraljitter](https://developer.apple.com/documentation/pencilkit/pkstrokepoint-swift.struct/lateraljitter)

# lateralJitter

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The amount of lateral particle jitter at the stroke edge for supported inks.

## Declaration

```swift
var lateralJitter: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

Lateral jitter applies only to some inks, such as `.pencil`.

## See Also

### Getting the point’s drawing data

- [size](size.md): The size of this point.
- [opacity](opacity.md): Opacity of the point.
- [secondaryScale](secondaryscale.md)
- [threshold](threshold.md): The alpha threshold for clipping the stroke rendering for supported inks.
