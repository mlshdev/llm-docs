> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/issupported](https://developer.apple.com/documentation/arkit/worldtrackingprovider/issupported)

# isSupported

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

A Boolean value that indicates whether the current runtime environment supports world-tracking providers.

## Declaration

```swift
static var isSupported: Bool { get }
```

## See Also

### Tracking objects

- [init()](init%28%29.md): Creates a world-tracking provider.
- [anchorUpdates](anchorupdates.md): A sequence of updates to anchors a provider tracks.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking world anchors.
- [allAnchors](allanchors.md): An array of all known world anchors from the world-tracking provider.
- [addAnchor(\_:)](addanchor%28__%29.md): Adds a world anchor you supply to the set of currently tracked anchors.
- [WorldTrackingProvider.Error](error.md): An error that can occur during a world-tracking session.
