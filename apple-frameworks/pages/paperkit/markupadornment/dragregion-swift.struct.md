> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment/dragregion-swift.struct](https://developer.apple.com/documentation/paperkit/markupadornment/dragregion-swift.struct)

# MarkupAdornment.DragRegion

**Framework:** PaperKit  
**Kind:** Structure

The movement behavior and interaction constraints for a markup adornment.

## Declaration

```swift
struct DragRegion
```

<a id="overview"></a>

## Overview

A `DragRegion` determines if and how people can reposition an adornment within the markup canvas. You can configure adornments to remain fixed in place or allow people to move them freely.

## Topics

### Choosing a drag region

- [fixed](dragregion-swift.struct/fixed.md): A drag region that prevents people from moving the adornment.
- [canvas](dragregion-swift.struct/canvas.md): A drag region that allows people to move the adornment within the canvas.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling interactions

- [dragRegion](dragregion-swift.property.md): The constraints that define where a person can drag this adornment.
- [scalesWithZoom](scaleswithzoom.md): A Boolean value that indicates whether the adornment scales with the zoom level or remains fixed in the base coordinate system.
