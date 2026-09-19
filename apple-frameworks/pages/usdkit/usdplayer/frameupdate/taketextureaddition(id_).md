> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/frameupdate/taketextureaddition(id:)

# takeTextureAddition(id:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Consumes and returns the [USDPlayer.TextureData](../texturedata.md) for the given texture addition.

## Declaration

```swift
mutating func takeTextureAddition(id: USDPlayer.TextureID) -> USDPlayer.TextureData?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if not present.
