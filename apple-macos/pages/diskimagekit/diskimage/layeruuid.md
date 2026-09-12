> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/layeruuid](https://developer.apple.com/documentation/diskimagekit/diskimage/layeruuid)

# layerUUID

**Framework:** DiskImageKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A UUID of the image that the framework uses to validate its compatibility with the layer above it in the stack

## Declaration

```swift
var layerUUID: UUID? { get }
```

<a id="discussion"></a>

## Discussion

All images contain a layer UUID, except for RAW images.

The layer UUID changes when the framework first writes to an image. In a stacked disk image, the framework can only write to the topmost image. The layer UUID of cache layers never changes.
