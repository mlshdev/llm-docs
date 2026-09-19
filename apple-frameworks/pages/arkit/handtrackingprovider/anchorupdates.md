> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/handtrackingprovider/anchorupdates

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A sequence of updates for all hands that a provider tracks.

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<HandAnchor> { get }
```

## See Also

### Observing hand anchor data

- [latestAnchors](latestanchors.md): The most recent hand anchors for each hand.
