> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/accessorytrackingprovider/latestanchors

# latestAnchors

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The latest accessory anchors updated with the most recent inertial data.

## Declaration

```swift
final var latestAnchors: [AccessoryAnchor] { get }
```

<a id="discussion"></a>

## Discussion

These anchors provide higher frequency, lower latency and slightly lower accuracy than `anchorUpdates`. Use them directly or in combination with `predictAnchor(for:at:)`.

The array may be empty if the provider is not running or no accessory is tracked at the moment.
