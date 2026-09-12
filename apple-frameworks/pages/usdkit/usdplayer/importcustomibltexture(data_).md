> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/importcustomibltexture(data:)](https://developer.apple.com/documentation/usdkit/usdplayer/importcustomibltexture(data:))

# importCustomIBLTexture(data:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Imports a custom IBL texture.

## Declaration

```swift
final func importCustomIBLTexture(data: Data) throws -> USDPlayer.TextureData
```

<a id="discussion"></a>

## Discussion

Expects input data from an HDR image.
