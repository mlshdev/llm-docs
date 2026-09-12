> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/openconfigurationprotocol/open(url:mode:)](https://developer.apple.com/documentation/diskimagekit/openconfigurationprotocol/open(url:mode:))

# open(url:mode:)

**Framework:** DiskImageKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

Returns a configuration to use for opening a disk image.

## Declaration

```swift
static func open(url: URL, mode: OpenConfiguration.Mode = .automatic) -> Self
```

## Parameters

- `url`: A [URL](https://developer.apple.com/documentation/foundation/url)  of the disk image file to open.
- `mode`: Mode in which to open the image (read-only or read-write).

<a id="return-value"></a>

## Return Value

An [OpenConfiguration](../openconfiguration.md) instance.

<a id="discussion"></a>

## Discussion

The following example demonstrates how to open a disk image.

```
let image = try DiskImage(opening: .open(url: imageURL))
```
