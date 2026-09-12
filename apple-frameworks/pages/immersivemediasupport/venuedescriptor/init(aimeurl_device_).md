> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor/init(aimeurl:device:)](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/init(aimeurl:device:))

# init(aimeURL:device:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates a venue descriptor instance from an AIME file.

## Declaration

```swift
convenience init(aimeURL: URL, device: (any MTLDevice)? = nil) async throws
```

## Parameters

- `aimeURL`: A URL that points to a valid AIME file to load.
- `device`: The Metal device to use when loading calibration meshes into memory.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws exceptions if the input file doesn’t exist, or contains invalid information.

## See Also

### Creating a venue descriptor

- [init(device:)](init%28device_%29.md): Creates an empty venue descriptor instance.
