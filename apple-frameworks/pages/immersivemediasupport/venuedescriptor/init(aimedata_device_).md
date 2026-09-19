> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/init(aimedata:device:)

# init(aimeData:device:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates a venue descriptor instance from memory.

## Declaration

```swift
init(aimeData: Data, device: (any MTLDevice)? = nil) async throws
```

## Parameters

- `aimeData`: The Data that contains the venue descriptor to parse.
- `device`: The Metal device to use when loading calibration meshes into memory.
