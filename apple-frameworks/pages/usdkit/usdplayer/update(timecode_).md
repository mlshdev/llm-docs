> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/update(timecode:)

# update(timeCode:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Updates the stage to `timeCode` and returns a [USDPlayer.FrameUpdate](frameupdate.md) describing all scene changes.

## Declaration

```swift
final func update(timeCode: USDStage.TimeCode) -> sending USDPlayer.FrameUpdate?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if nothing changed.

## See Also

### Driving playback

- [USDPlayer.FrameUpdate](frameupdate.md): A snapshot of all mesh, material, texture, and deformation changes from the last update.
