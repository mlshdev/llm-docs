> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/creationconfiguration/asiflayer(url:type:)](https://developer.apple.com/documentation/diskimagekit/diskimage/creationconfiguration/asiflayer(url:type:))

# asifLayer(url:type:)

**Framework:** DiskImageKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

Returns an Apple sparse image format (ASIF) configuration for stackable layers.

## Declaration

```swift
static func asifLayer(url: URL, type: DiskImage.LayerType) -> Self
```

## Parameters

- `url`: The [URL](https://developer.apple.com/documentation/foundation/url) for the disk image file.
- `type`: The type of layer (cache or overlay).

<a id="return-value"></a>

## Return Value

An [ASIFLayerCreationConfiguration](../../asiflayercreationconfiguration.md) instance for stacking use.

<a id="discussion"></a>

## Discussion

The following example demonstrates how to append a new cache layer to a base image:

```
var stackedImage = try baseImage.appending(.asifLayer(url: cacheURL, type: .cache))
```
