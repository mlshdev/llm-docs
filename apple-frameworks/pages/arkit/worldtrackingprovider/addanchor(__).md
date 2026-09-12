> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/addanchor(_:)](https://developer.apple.com/documentation/arkit/worldtrackingprovider/addanchor(_:))

# addAnchor(\_:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Adds a world anchor you supply to the set of currently tracked anchors.

## Declaration

```swift
final func addAnchor(_ worldAnchor: WorldAnchor) async throws
```

## Parameters

- `worldAnchor`: A position and orientation in the world you want to track.

## See Also

### Tracking objects

- [init()](init%28%29.md): Creates a world-tracking provider.
- [anchorUpdates](anchorupdates.md): A sequence of updates to anchors a provider tracks.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking world anchors.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports world-tracking providers.
- [allAnchors](allanchors.md): An array of all known world anchors from the world-tracking provider.
- [WorldTrackingProvider.Error](error.md): An error that can occur during a world-tracking session.
