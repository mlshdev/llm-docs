> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/frameupdate/takematerialaddition(id:)](https://developer.apple.com/documentation/usdkit/usdplayer/frameupdate/takematerialaddition(id:))

# takeMaterialAddition(id:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Consumes and returns the [USDPlayer.MaterialData](../materialdata.md) for the given material addition.

## Declaration

```swift
mutating func takeMaterialAddition(id: USDPlayer.MaterialID) -> USDPlayer.MaterialData?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if not present.
