> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/frameupdate/takemeshaddition(id:)

# takeMeshAddition(id:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Consumes and returns the [USDPlayer.MeshData](../meshdata.md) for the given mesh addition.

## Declaration

```swift
mutating func takeMeshAddition(id: USDPlayer.MeshID) -> USDPlayer.MeshData?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if not present.
