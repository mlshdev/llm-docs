> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment](https://developer.apple.com/documentation/paperkit/markupadornment)

# MarkupAdornment

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A visual adornment that appears on top of markup content within a markup view controller.

## Declaration

```swift
struct MarkupAdornment
```

<a id="overview"></a>

## Overview

You use a markup adornment to display an image-based overlay that you can position and configure to enhance markup content. Adornments scale with the zoom level or remain a fixed size in the base coordinate system.

## Topics

### Creating an adornment

- [init(id:anchor:imageConfiguration:dragRegion:scalesWithZoom:)](markupadornment/init%28id_anchor_imageconfiguration_dragregion_scaleswithzoom_%29.md): Creates a new markup adornment with the specified configuration.

### Anchoring the adornment

- [MarkupAdornment.Anchor](markupadornment/anchor-swift.struct.md): The positioning reference point for an adornment within the markup canvas.
- [anchor](markupadornment/anchor-swift.property.md): The anchor that positions the adornment.

### Configuring the image

- [MarkupAdornment.ImageConfiguration](markupadornment/imageconfiguration-swift.struct.md): The visual appearance configuration for a markup adornment.
- [imageConfiguration](markupadornment/imageconfiguration-swift.property.md): The image to display as the adornment.

### Controlling interactions

- [MarkupAdornment.DragRegion](markupadornment/dragregion-swift.struct.md): The movement behavior and interaction constraints for a markup adornment.
- [dragRegion](markupadornment/dragregion-swift.property.md): The constraints that define where a person can drag this adornment.
- [scalesWithZoom](markupadornment/scaleswithzoom.md): A Boolean value that indicates whether the adornment scales with the zoom level or remains fixed in the base coordinate system.

### Identifying markup

- [id](markupadornment/id.md): A unique identifier for this adornment.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
