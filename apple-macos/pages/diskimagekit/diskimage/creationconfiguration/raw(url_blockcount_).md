> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/creationconfiguration/raw(url:blockcount:)](https://developer.apple.com/documentation/diskimagekit/diskimage/creationconfiguration/raw(url:blockcount:))

# raw(url:blockCount:)

**Framework:** DiskImageKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

Returns a RAW configuration for standalone or base images.

## Declaration

```swift
static func raw(url: URL, blockCount: Int) -> Self
```

## Parameters

- `url`: The [URL](https://developer.apple.com/documentation/foundation/url) for the disk image file.
- `blockCount`: Size of the disk image in blocks.

<a id="return-value"></a>

## Return Value

A [RAWCreationConfiguration](../../rawcreationconfiguration.md) instance.

<a id="discussion"></a>

## Discussion

The framework only supports the 512-byte block size for RAW images.

The following example demonstrates how to create a RAW disk image.

```
_ = try DiskImage(creating: .raw(url: imageURL, blockCount: blockCount))
```
