> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/allanchors](https://developer.apple.com/documentation/arkit/worldtrackingprovider/allanchors)

# allAnchors

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An array of all known world anchors from the world-tracking provider.

## Declaration

```swift
final var allAnchors: [WorldAnchor]? { get async }
```

<a id="Discussion"></a>

## Discussion

Returns `nil` if the data provider isn’t running, and for other errors.

## See Also

### Tracking objects

- [init()](init%28%29.md): Creates a world-tracking provider.
- [anchorUpdates](anchorupdates.md): A sequence of updates to anchors a provider tracks.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking world anchors.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports world-tracking providers.
- [addAnchor(\_:)](addanchor%28__%29.md): Adds a world anchor you supply to the set of currently tracked anchors.
- [WorldTrackingProvider.Error](error.md): An error that can occur during a world-tracking session.
