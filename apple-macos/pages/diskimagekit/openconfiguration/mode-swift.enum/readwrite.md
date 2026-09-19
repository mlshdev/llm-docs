> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/diskimagekit/openconfiguration/mode-swift.enum/readwrite

# OpenConfiguration.Mode.readWrite

**Framework:** DiskImageKit  
**Kind:** Case  
**Availability:** macOS 27.0+

Open the disk-image with read-write permissions.

## Declaration

```swift
case readWrite
```

<a id="discussion"></a>

## Discussion

Fails if there’s no permission to open the image in this mode.
