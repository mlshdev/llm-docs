> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/handtrackingprovider/latestanchors

# latestAnchors

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The most recent hand anchors for each hand.

## Declaration

```swift
final var latestAnchors: (leftHand: HandAnchor?, rightHand: HandAnchor?) { get }
```

<a id="Discussion"></a>

## Discussion

Accessing this tuple consumes its values and sets them to `nil` until the next anchor update. Both elements of this tuple are `nil` when the associated [HandTrackingProvider](../handtrackingprovider.md) isn’t running.

## See Also

### Observing hand anchor data

- [anchorUpdates](anchorupdates.md): A sequence of updates for all hands that a provider tracks.
