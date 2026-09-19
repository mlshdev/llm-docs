> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/diskimagekit/openconfiguration/init(url:mode:)

# init(url:mode:)

**Framework:** DiskImageKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a configuration for opening a disk image.

## Declaration

```swift
init(url: URL, mode: OpenConfiguration.Mode = .automatic)
```

## Parameters

- `url`: The [URL](https://developer.apple.com/documentation/foundation/url) of the disk image file to open.
- `mode`: The mode in which to open the image (read-only or read-write).
