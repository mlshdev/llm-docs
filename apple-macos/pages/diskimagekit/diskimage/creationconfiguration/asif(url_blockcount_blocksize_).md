> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/creationconfiguration/asif(url:blockcount:blocksize:)](https://developer.apple.com/documentation/diskimagekit/diskimage/creationconfiguration/asif(url:blockcount:blocksize:))

# asif(url:blockCount:blockSize:)

**Framework:** DiskImageKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

Returns an Apple sparse image format (ASIF) configuration for standalone or base images.

## Declaration

```swift
static func asif(url: URL, blockCount: Int, blockSize: DiskImage.BlockSize) -> Self
```

## Parameters

- `url`: The [URL](https://developer.apple.com/documentation/foundation/url) for the disk image file.
- `blockCount`: Size of the disk image in blocks.
- `blockSize`: The [DiskImage.BlockSize](../blocksize-swift.enum.md) to use.

<a id="return-value"></a>

## Return Value

An [ASIFCreationConfiguration](../../asifcreationconfiguration.md) instance for standalone use.

<a id="discussion"></a>

## Discussion

Use this initializer when creating a standalone image, or a base image for a stack, using [init(creating:)](../init%28creating_%29.md). To create a cache or overlay layer for a stacked disk image, use [asifLayer(url:type:)](asiflayer%28url_type_%29.md) instead.

The following example demonstrates how to create a ASIF disk image:

```
_ = try DiskImage(creating: .asif(url: imageURL, blockCount: blockCount, blockSize: .bytes512))
```
