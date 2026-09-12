> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment/scaleswithzoom](https://developer.apple.com/documentation/paperkit/markupadornment/scaleswithzoom)

# scalesWithZoom

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the adornment scales with the zoom level or remains fixed in the base coordinate system.

## Declaration

```swift
var scalesWithZoom: Bool
```

<a id="discussion"></a>

## Discussion

When this value is `true`, the adornment image adjusts to the zoom scale of the `PaperMarkupViewController`. When `false`, the adornment image remains fixed in the base coordinate system.

## See Also

### Controlling interactions

- [MarkupAdornment.DragRegion](dragregion-swift.struct.md): The movement behavior and interaction constraints for a markup adornment.
- [dragRegion](dragregion-swift.property.md): The constraints that define where a person can drag this adornment.
