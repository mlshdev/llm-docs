> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment/dragregion-swift.property](https://developer.apple.com/documentation/paperkit/markupadornment/dragregion-swift.property)

# dragRegion

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The constraints that define where a person can drag this adornment.

## Declaration

```swift
var dragRegion: MarkupAdornment.DragRegion
```

<a id="discussion"></a>

## Discussion

- `.fixed`: A person cannot move the adornment.
- `.canvas`: A person can move the adornment freely within the canvas.

## See Also

### Controlling interactions

- [MarkupAdornment.DragRegion](dragregion-swift.struct.md): The movement behavior and interaction constraints for a markup adornment.
- [scalesWithZoom](scaleswithzoom.md): A Boolean value that indicates whether the adornment scales with the zoom level or remains fixed in the base coordinate system.
