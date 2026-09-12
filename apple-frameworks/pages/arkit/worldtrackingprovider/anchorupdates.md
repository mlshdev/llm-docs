> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/anchorupdates](https://developer.apple.com/documentation/arkit/worldtrackingprovider/anchorupdates)

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A sequence of updates to anchors a provider tracks.

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<WorldAnchor> { get }
```

<a id="discussion"></a>

## Discussion

An async sequence providing all anchor updates. The provider vends new or updated world anchors via the sequence as they become available.

Identify the anchors you want to react to by calling [id](../anchor/id.md).

> **Note**

> The provider also vends updates for persisted world anchors from previous runs of the app onto the sequence as soon as the world tracking provider is running. World anchors persist across device restarts until you explicitly remove them.

## See Also

### Tracking objects

- [init()](init%28%29.md): Creates a world-tracking provider.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking world anchors.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports world-tracking providers.
- [allAnchors](allanchors.md): An array of all known world anchors from the world-tracking provider.
- [addAnchor(\_:)](addanchor%28__%29.md): Adds a world anchor you supply to the set of currently tracked anchors.
- [WorldTrackingProvider.Error](error.md): An error that can occur during a world-tracking session.
