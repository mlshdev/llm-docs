> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/parentuuid](https://developer.apple.com/documentation/diskimagekit/diskimage/parentuuid)

# parentUUID

**Framework:** DiskImageKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A UUID of the image that must be equal to the layer UUID of the layer beneath it in the stack.

## Declaration

```swift
var parentUUID: UUID? { get }
```

<a id="discussion"></a>

## Discussion

This property is in a set state for all images in a stacked disk image, where the layer beneath them has a [layerUUID](layeruuid.md).
