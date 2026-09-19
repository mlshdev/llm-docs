> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiofileresource/configuration-swift.struct/shouldrandomizestarttime

# shouldRandomizeStartTime

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Stores a Boolean indicating whether the playback begins from the start of the file, or from a random position.

## Declaration

```swift
var shouldRandomizeStartTime: Bool
```

<a id="discussion"></a>

## Discussion

When this property and [shouldLoop](shouldloop.md) are both true, only the first playback iteration begins from a random position.

## See Also

### Customizing the playback

- [shouldLoop](shouldloop.md): Stores a Boolean indicating whether the playback loops infinitely, until manually stopped or paused.
